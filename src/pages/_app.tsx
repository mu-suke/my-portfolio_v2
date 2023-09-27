import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import React from 'react'
import { AnimatePresence } from 'framer-motion'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence initial={false}>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  )
}
export default MyApp
