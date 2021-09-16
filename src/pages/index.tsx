import { Avatar, Box, Button, Text, SimpleGrid, Center, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title='Home'>
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
          <Button color='gray.50' colorScheme='gray.50' variant='outline' as='a' href='/about'>
            About
          </Button>
          <Button color='gray.50' colorScheme='gray.50' variant='outline' as='a' href='/work'>
            Work
          </Button>
          <Button color='gray.50' colorScheme='gray.50' variant='outline' as='a' href='/contact'>
            Contact
          </Button>
        </SimpleGrid>
      </Box>
    </Layout>
  )
}

export default Home