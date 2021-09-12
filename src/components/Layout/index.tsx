import { Container } from '@chakra-ui/layout'
import Head from 'next/head'
import React from 'react'

export const Layout = ({
  title,
  children,
}: {
  title?: string
  children: any
}) => {
  return (
    // TODO: blurを適用する
    <div
      style={{
        backgroundImage: 'url(./bg.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Head>
        <title>{title ?? 'mu-suke'}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Container maxW='container.sm'>{children}</Container>
    </div>
  )
}
