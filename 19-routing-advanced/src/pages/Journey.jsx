import { Dot, HardHat, Landmark, Music, Underline } from 'lucide-react'
import React from 'react'
import NepalFlag from '../assets/Flag_of_Nepal.svg'
import { NavLink, Outlet } from 'react-router-dom'

const Journey = () => {
  return (
    <div className='Journey h-screen overflow-hidden flex flex-col'>
      <div className='heading flex flex-col gap-4 shrink-0'>
        <div className='flex flex-col items-center gap-2'>
          <h2 className='text-4xl font-bold'>My Journey</h2>
          <p className='text-xl'>The path from engineer to Prime Minister.</p>
        </div>
        <div className='flex px-40 items-center'>
          <NavLink
          to='/journey/engineering'
            className='nav-link flex flex-col justify-center items-center p-2 rounded-2xl hover:bg-gray-300 active:bg-gray-400 dark:hover:bg-gray-800 dark:active:bg-gray-600'
          >
            <div className='w-20 h-20 border bg-neutral-200/40 dark:bg-neutral-800 dark:border-neutral-500 border-neutral-300 rounded-full p-4'>
              <HardHat className='w-full h-full object-contain text-green-600 fill-current' />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3 className='text-xl font-semibold'>Engineering</h3>
              <p>The foundation</p>
            </div>
          </NavLink>
          <div className='h-0.5 grow bg-red-500 mb-10'></div>
          <NavLink 
          to='/journey/music'
          className='nav-link flex flex-col justify-center items-center p-2 hover:bg-gray-300 active:bg-gray-400 dark:hover:bg-gray-800 dark:active:bg-gray-600 rounded-2xl'>
            <div className='w-20 h-20 border bg-neutral-200/40 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-500 rounded-full p-4'>
              <Music className='text-pink-800 w-full h-full object-contain stroke-3' />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3 className='text-xl font-semibold'>Music / Rap</h3>
              <p>The expression</p>
            </div>
          </NavLink>
          <div className='h-0.5 grow bg-red-500 mb-10'></div>
          <NavLink
          to='/journey/mayor'
          className='nav-link flex flex-col justify-center items-center hover:bg-gray-300 active:bg-gray-400 dark:hover:bg-gray-800 dark:active:bg-gray-600 rounded-2xl p-2'>
            <div className='w-20 h-20 border bg-neutral-200/40 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-500 rounded-full p-4'>
              <Landmark className='w-full h-full object-contain text-violet-500 fill-current' />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3 className='text-xl font-semibold'>KTM Mayor</h3>
              <p>The responsibility</p>
            </div>
          </NavLink>
          <div className='h-0.5 grow bg-red-500 mb-10'></div>
          <NavLink 
          to='/journey/prime-minister'
           className='nav-link flex flex-col justify-center items-center p-2 hover:bg-gray-300 active:bg-gray-400 dark:hover:bg-gray-800 dark:active:bg-gray-600 rounded-2xl'>

            <div className='w-20 h-20 border bg-neutral-200/40 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-500 rounded-full p-4'>
              <img src={NepalFlag} alt="" className='w-full h-full object-contain' />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3 className='text-xl font-semibold'>Prime Minister</h3>
              <p>The next chapter</p>
            </div>
          </NavLink>
        </div>
      </div>

      <div className='flex-1 min-h-0 overflow-y-auto p-4'>
        <Outlet />
      </div>
    </div>
  )
}

export default Journey
