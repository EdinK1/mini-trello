import React from 'react'
import { Router, Link } from '@reach/router'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'

const Routes = () => (
  <Router>
    <Home path='/' />
    <About path='/about' />
  </Router>
)

export default Routes
