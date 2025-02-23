  "use client"

  import { useEffect, useRef } from "react"
  import createGlobe from "cobe"
  import { useSpring } from "framer-motion"

  export default function Globe() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const pointerInteracting = useRef<number | null>(null)
    const pointerInteractionMovement = useRef(0)
    const phi = useSpring(0)

    useEffect(() => {
      let width = 0
      let currentPhi = 0
      let globe: ReturnType<typeof createGlobe>

      const onResize = () => {
        if (canvasRef.current) {
          width = canvasRef.current.offsetWidth
        }
      }
      window.addEventListener("resize", onResize)
      onResize()

      if (canvasRef.current) {
        globe = createGlobe(canvasRef.current, {
          devicePixelRatio: 2,
          width: width * 2,
          height: width * 2,
          phi: 0,
          theta: 0.3,
          dark: 1,
          diffuse: 1.2,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [0.3, 0.6, 1], // Ocean blue
          markerColor: [0.1, 0.5, 0.1], // Darker green for land
          glowColor: [0.3, 0.7, 0.1], // Atmospheric blue glow
          markers: [],
          onRender: (state) => {
            if (!pointerInteracting.current) {
              currentPhi += 0.003
              state.phi = currentPhi
            }
            phi.set(state.phi)
          },
        })
      }

      return () => {
        globe?.destroy()
        window.removeEventListener("resize", onResize)
      }
    }, [phi])

    return (
      <div className="relative w-[480px] h-[480px] md:w-[600px] md:h-[600px]">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          onPointerDown={(e) => {
            pointerInteracting.current = e.clientX - pointerInteractionMovement.current
            canvasRef.current!.style.cursor = "grabbing"
          }}
          onPointerUp={() => {
            pointerInteracting.current = null
            canvasRef.current!.style.cursor = "grab"
          }}
          onPointerOut={() => {
            pointerInteracting.current = null
            canvasRef.current!.style.cursor = "grab"
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current
              pointerInteractionMovement.current = delta
              phi.set(delta * 0.01)
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current
              pointerInteractionMovement.current = delta
              phi.set(delta * 0.01)
            }
          }}
        />
      </div>
    )
  }

