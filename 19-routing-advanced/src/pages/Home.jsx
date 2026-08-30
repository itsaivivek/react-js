import React from 'react'
import Navbar from '../components/Navbar'
import { Flag, MicVocal, MoveRight, Pickaxe, Skull } from 'lucide-react'
import BalenHero from '../assets/balen-hero-removebg.png'

import Temples from '../assets/Kathmandu-Temple-Skyline-Panorama.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  return (
    <div className='flex flex-col gap-2 mt-2'>
      <div className='flex justify-around overflow-hidden w-full bg-position-[right_center] bg-size-[50%_90%] bg-no-repeat' style={{ backgroundImage: `url(${Temples})` }}>

        <div className="leftcontainer flex flex-col gap-4 px-20 py-10">
          <div className="herotext font-bold text-4xl leading-tight uppercase">
            <h2>Engineer.</h2>
            <h2>Rapper.</h2>
            <h2>Mayor.</h2>
            <h2 className='text-red-600'>Prime Minister.</h2>
          </div>
          <div className='text-lg font-medium w-100'>From designing structure to redesigning Nepal. Calculating loads, dropping bars, managing a capital city, and now reforming a nation.</div>
          <div className='flex gap-4'>
            <button
              onClick={() => {
                navigate('/journey/engineering')
              }
              }
              className='flex bg-red-600 text-white rounded-md items-center justify-center gap-2 py-2 px-6 font-semibold text-lg active:scale-95 cursor-pointer'>Explore Journey <MoveRight /></button>
            <button
              onClick={() => {
                navigate('/contact')
              }
              }
              className='flex bg-neutral-300 items-center rounded-md py-2 px-6 font-semibold active:scale-95 cursor-pointer dark:text-black'>Don't Contact Me <Skull className='h-full' /></button>
          </div>
        </div>
        <div className="rightcontainer" >

          <img className='h-100 object-cover' src={BalenHero} alt="" />

        </div>
      </div>
      <div className="bottomcontainer flex flex-col items-center gap-4">
        <h2 className='text-3xl font-bold'>Why I am here?</h2>
        <div className='flex items-center w-full justify-around'>
          <div className='flex items-center gap-2'>
            <div className='bg-red-200/60 dark:bg-red-200/80 p-6 rounded-full text-red-600'>
              <Pickaxe size={30} />
            </div>
            <div>
              <div className='text-2xl text-red-600 font-bold'>01</div>
              <div className='text-lg font-semibold'>Engineering</div>
              <div>Built structures.</div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='bg-red-200/60 dark:bg-red-200/80 p-6 rounded-full text-red-600'>
              <MicVocal size={30} />
            </div>
            <div>
              <div className='text-2xl text-red-600 font-bold'>03</div>
              <div className='text-lg font-semibold'>Rap</div>
              <div>Built bars.</div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='bg-red-200/60 dark:bg-red-200/80 p-6 rounded-full text-red-600'>
              <Flag size={30} />
            </div>
            <div>
              <div className='text-2xl text-red-600 font-bold'>02</div>
              <div className='text-lg font-semibold'>Politics</div>
              <div>Built a government.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
