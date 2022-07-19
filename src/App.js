import React from 'react'
import "./App.css"

import { Footer, Blog, Possibility, Header, Rating, Features} from "./containers"

import { Cta, Brand, Navbar } from "./components"

const App = () => {
  return (
    <div className='App'>
    <div className='gradiant__bg'>
      <Navbar  /> 
      <Header />
      </div>
      <Brand />
      <Rating />
      <Features />
      <Possibility />
      <Cta/>
      <Blog />
      <Footer />
      <Navbar />
  </div>
  )
}

export default App
