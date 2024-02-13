import { useState } from 'react'
import './index.css'
import {Routes, Route, Link} from 'react-router-dom'
import Blue from './components/Blue'
import Red from './components/Red'
import Yellow from './components/Yellow'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainSection from './components/MainSection'

function App() {

  return (
    <div id="container">
      <Navbar />
      <MainSection>
        <Routes>
          <Route path="/"  Component={Home}/>
          <Route path="/blue" Component={Blue} />
          <Route path="/red" Component={Red} />
          <Route path="/yellow" Component={Yellow} />

        </Routes>
      </MainSection>
      <Footer />
    </div>
  )
}

export default App
