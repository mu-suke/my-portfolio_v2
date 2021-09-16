import type { NextPage } from 'next'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Works from '../components/Works'
import { Layout } from '../components/Layout'
import withRouter from 'next/dist/client/with-router'
import Contact from '../components/Contact'
import { motion } from 'framer-motion'

const Index = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            path='/'
            exact={true}
            component={Home}
          />
          <Route
            path='/about'
            exact={false}
            component={About}
          />
          <Route
            path='/works'
            exact={false}
            component={Works}
          />
          <Route
            path='/contact'
            exact={false}
            component={Contact}
          />
        </Switch>
      </Layout>
    </Router>
  )
}

export default withRouter(Index)
