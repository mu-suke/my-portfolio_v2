import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

export const Motion = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {children}
    </motion.div>
  )
}