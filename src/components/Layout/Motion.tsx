import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

export const Motion: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
