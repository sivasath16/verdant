"use client"

import { CheckCircle } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import type { Reward } from "@/lib/rewards-data"
import { DialogTitle } from "@radix-ui/react-dialog"

interface RedeemModalProps {
  isOpen: boolean
  onClose: () => void
  reward: Reward | null
}

export function RedeemModal({ isOpen, onClose, reward }: RedeemModalProps) {
  if (!reward) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTitle></DialogTitle>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center justify-center space-y-4 py-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <CheckCircle className="w-16 h-16 text-green-500" />
          </motion.div>
          <h2 className="text-xl font-semibold text-center">Redemption Successful!</h2>
          <p className="text-center text-muted-foreground">
            You have successfully redeemed the {reward.name}. Details have been sent to your email.
          </p>
          <p className="text-sm text-muted-foreground">Points deducted: {reward.points.toLocaleString()}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

