import type { NextPage } from 'next'
import React from 'react'
import { Layout } from '@/components/Layout'
import { About as AboutComponent } from '@/components/About'

const About: NextPage = () => {
  return (
    <Layout>
      <AboutComponent />
    </Layout>
  )
}

export default About
