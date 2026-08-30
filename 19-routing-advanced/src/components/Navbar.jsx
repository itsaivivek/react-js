import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {ChevronLeft, ChevronRight, Sun} from 'lucide-react'
import ThemeToggle from './ThemeToggle'


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between px-10 items-center py-4'>
      <div className='flex items-center gap-10'>
      <h2 className='uppercase text-3xl font-bold text-red-600'>BALEN.</h2>
      <div className='flex items-center gap-4'>
        <button className='active:scale-90 text-neutral-600 dark:text-neutral-400'
        onClick={() => {
          navigate(-1)
        }
        }><ChevronLeft size={30}/></button>
        <button className='active:scale-90 text-neutral-600 dark:text-neutral-400'
        onClick={() => {
          navigate(+1)
        }
        }
        ><ChevronRight size={30}/></button>
      </div>
      </div>
      <div className="nav2 flex gap-10 font-semibold text-xl items-center">
        <NavLink className='nav-link' to='/'>Home</NavLink>
        <NavLink className='nav-link' to='/about'>About</NavLink>
        <NavLink className='nav-link' to='/journey/engineering'>Journey</NavLink>
        <NavLink className='nav-link' to='/contact'>Contact</NavLink>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar
