import type { NextPage } from 'next'
import React from 'react'
import Home from '@/components/Home'
import { Layout } from '@/components/Layout'

const Index: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default Index
