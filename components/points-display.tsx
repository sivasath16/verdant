"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

interface PointsDisplayProps {
  points: number
}

export function PointsDisplay({ points }: PointsDisplayProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl p-6 text-center shadow-xl"
      >
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Sparkles className="h-6 w-6 text-yellow-300" />
          <h2 className="text-xl font-semibold text-white">Available Points</h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-white"
        >
          {points.toLocaleString()}
        </motion.p>
      </motion.div>
    </div>
  )
}

