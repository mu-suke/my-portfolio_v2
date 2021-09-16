import { Button } from '@chakra-ui/button'
import React from 'react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export const BackButton = () => {
  return (
    <Link to='/'>
      <Button
        leftIcon={<ArrowBackIcon />}
        variant='outline'
        width='100%'
        color='gray.50'
        colorScheme='gray.50'
      >
        Back
      </Button>
    </Link>
  )
}

