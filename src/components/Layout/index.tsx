import { Container } from '@chakra-ui/layout'
import Head from 'next/head'
import React from 'react'
import style from '../../styles/Layout.module.css'

export const Layout = ({
  title,
  children,
}: {
  title?: string
  children: any
}) => {
  return (
    // TODO: 全てChakra UIに置き換える
    // TODO: styleを使用しない
    <>
      <Head>
        <title>{`${title} | mu-suke.com` ?? 'mu-suke.com'}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <div
        className={style.root}
      >
        <Container maxW='container.sm'>{children}</Container>
      </div>
    </>
  )
}
