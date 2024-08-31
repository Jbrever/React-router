import React from 'react'
import './App.css';
import {Routes , Route, Router,useLocation } from 'react-router-dom'
import Header from '../components/Header';
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'

function App() {
const location = useLocation();
  return (
    <> 
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/help' element={<div>it's help page {location.state.fName}</div>}></Route>
      </Routes>
    </>
  )
}

export default App
