import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <h2>Vivek</h2>
      <div>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
