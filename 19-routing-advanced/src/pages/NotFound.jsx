import React from 'react'
import BalenEyeGlasses from '../assets/balenEyeGlasses.png'
import { House } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    let navigate = useNavigate()
  return (
    <div className='flex py-20'>
      <div className="leftContainer items-center flex flex-col w-full gap-10 py-4">
        <div className="title flex flex-col justify-center items-center">
        <h1 className='text-[100px] font-bold text-red-600'>404</h1>
        <h2 className='text-5xl font-bold after:w-10 after:h-1 after:bg-red-500 after:absolute after:bottom-0 after:left-1/2 relative pb-4'>Aukaad not found</h2>
        </div>
        <div className='flex flex-col items-center text-xl gap-4'>
            <p>You have entered that place where even Balen doesn't know where you are.</p>
            <button 
            onClick={() => {
              navigate('/')
            }
            }
            className='flex items-center gap-2 bg-red-600 rounded-md text-white text-xl font-semibold px-10 py-4 active:scale-95 cursor-pointer'>Go Back Home <House /></button>
        </div>
      </div>
      <div className="rightContainer w-1/2">
        <img className='h-100 object-cover' src={BalenEyeGlasses} alt="" />
      </div>
    </div>
  )
}

export default NotFound
