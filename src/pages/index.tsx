import { Avatar, Box, Button, Text, SimpleGrid, Center } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title='Home'>
      <Box w='100%' p={4} shadow='sm' borderWidth='1px' borderColor='gray.50'>
        <Center>
          <Avatar size='xl' name='Yusuke Murakami' src='./icon.png' />
        </Center>
        <Text
          color='gray.50'
          fontSize={{ base: '2xl', md: '4xl', lg: '4xl' }}
          align='center'
        >
          (4xl) In love with React & Next
        </Text>
        <Text
          color='gray.50'
          fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
          align='center'
        >
          (4xl) In love with React & Next
        </Text>
        <SimpleGrid columns={3} spacing={12}>
          <Button color='gray.50' colorScheme='gray.50' variant='outline'>
            Button
          </Button>
          <Button color='gray.50' colorScheme='gray.50' variant='outline'>
            Button
          </Button>
          <Button color='gray.50' colorScheme='gray.50' variant='outline'>
            Button
          </Button>
        </SimpleGrid>
      </Box>
    </Layout>
  )
}

export default Home
