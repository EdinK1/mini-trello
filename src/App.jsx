import React from 'react'
import './App.css'
import Header from './components/Navbar/Header'
import Layout from './components/Layout/Layout'
import Router from './router/router'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Router />
      <Layout>
        <div>heyo</div>
      </Layout>
    </div>
  )
}

export default App
