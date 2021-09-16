import { Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const Works = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <Link to='/'>
        <Button color='gray.50' colorScheme='gray.50' variant='outline' width='100%'>
          Back
        </Button>
      </Link>
    </motion.div>
  )
}

export default Works