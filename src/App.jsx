import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about-me" element={<About/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      
    </div>
  )
}

export default App
