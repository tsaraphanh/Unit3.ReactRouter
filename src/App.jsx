import { useState } from 'react'
import './index.css'
import {Routes, Route, Link} from 'react-router-dom'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'

function App() {

  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">home</Link>
        <Link to="/blue">blue</Link>
        <Link to="/red">red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/"  Component={Home}/>
          <Route path="/blue" Component={Blue} />
          <Route path="/red" Component={Red} />
        </Routes>
      </div>
    </div>
  )
}

export default App
