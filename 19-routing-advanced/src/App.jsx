import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Journey from './pages/Journey'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Engineering from './pages/Engineering'
import MusicRap from './pages/MusicRap'
import Mayor from './pages/Mayor'
import PrimeMinister from './pages/PrimeMinister'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div className='bg-neutral-100 dark:bg-neutral-900 dark:text-white flex flex-col h-screen overflow-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/journey' element={<Journey />} >
          <Route path='engineering' element={<Engineering />}/>
          <Route path='music' element={<MusicRap />}/>
          <Route path='mayor' element={<Mayor />}/>
          <Route path='prime-minister' element={<PrimeMinister />}/>
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
