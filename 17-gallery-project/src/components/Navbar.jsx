import React from 'react'
import { User } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center px-10 dark:text-white py-3 max-[450px]:flex-col">
        <h1 className='text-3xl font-bold'>RandomPics</h1>
        <div className='nav2 flex items-center gap-6'>
          <div className='flex items-center gap-2'>
            <span className='text-lg'>Theme:</span>
            <ThemeToggle />

          </div>
          <div className='flex items-center gap-2 max-[500px]:hidden'>
            <span className='text-lg'>Hey, Vivek</span>
            <User className='bg-purple-500 p-0.5 rounded-full'/>
          </div>
        </div>
      </div>
  )
}

export default Navbar
