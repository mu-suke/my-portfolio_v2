import {
  Avatar,
  Box,
  Button,
  Center,
  SimpleGrid,
  Text,
  Link,
} from '@chakra-ui/react'
import React from 'react'
import { Motion } from '@/components/Layout/Motion'
import NextLink from 'next/link'

export const Home = () => {
  return (
    <Motion>
      <Box w='100%' p={8} shadow='sm' borderWidth='1px' borderColor='gray.50'>
        <Center>
          <Avatar size='xl' name='Yusuke Murakami' src='./icon.png' />
        </Center>
        <Text
          color='gray.50'
          fontSize={{ base: '2xl', md: '4xl', lg: '4xl' }}
          align='center'
          mt={4}
        >
          mu-suke.com
        </Text>
        <Text
          color='gray.50'
          fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
          align='center'
        >
          Welcome to my portfolio site!
        </Text>
        <SimpleGrid columns={3} spacing={{ base: 4, md: 12 }} mt={8}>
          <Link as={NextLink} href='/about'>
            <Button
              color='gray.50'
              colorScheme='gray.50'
              variant='outline'
              width='100%'
            >
              About
            </Button>
          </Link>
          <Link as={NextLink} href='/works'>
            <Button
              color='gray.50'
              colorScheme='gray.50'
              variant='outline'
              width='100%'
            >
              Works
            </Button>
          </Link>
          <Link as={NextLink} href='/contact'>
            <Button
              color='gray.50'
              colorScheme='gray.50'
              variant='outline'
              width='100%'
            >
              Contact
            </Button>
          </Link>
        </SimpleGrid>
      </Box>
    </Motion>
  )
}

export default Home
