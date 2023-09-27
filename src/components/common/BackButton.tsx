import { Button, Link } from '@chakra-ui/react'
import React from 'react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export const BackButton: React.FC = () => {
  return (
    <Link as={NextLink} href='/'>
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
