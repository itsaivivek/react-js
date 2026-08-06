import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

const App = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Navbar />
      <Main />
    </div>
  )
}

export default App
