/** @format */

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import CheckOutScreen from './screens/CheckOutScreen'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Route path='/' component={HomeScreen} exact />
        <Route path='/search/:keyword' component={HomeScreen} />
        <Route path='/checkout' component={CheckOutScreen} />
      </Router>
    </>
  )
}

export default App
