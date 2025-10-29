import { useState } from 'react'
import About from './components/About'
import './App.css'
import Education from './components/Education'
import Skills from './components/Skills'
import Certification from './components/Certification'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
     <About/>
     <Education/>
     <Skills/>
     <Certification/>
     <Form/>
     <Footer/>
    </>
  )
}

export default App
