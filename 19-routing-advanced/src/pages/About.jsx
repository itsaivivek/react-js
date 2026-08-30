import React from 'react'
import BalenAbout from '../assets/balen-wide-angle-removebg.png'
import Temples from '../assets/Kathmandu-Temple-Skyline-Panorama.png'
import { Infinity, Minus } from 'lucide-react'


const About = () => {
  return (
    <div className='about'>
      <div className='flex mt-4 px-20 justify-between bg-position-[right_center] bg-size-[60%_90%] bg-no-repeat' style={{ backgroundImage: `url(${Temples})` }}>
        <div className='leftContainer w-1/3 flex flex-col gap-4 mt-6'>
          <h2 className='text-4xl font-bold after:w-10 after:h-1 after:bg-red-500 after:absolute after:bottom-0 after:left-0 relative pb-4'>About Balen</h2>
          <div className='text-xl'>Balendra Shan is a structural engineer, rapper and politician who served as Mayor of Kathmandu before becoming Nepal's Prime Minister in 2026. 
            <p>A leader forged by data, driven by art, and proven by action, structurally engineering the future of Nepal from blueprints and bars to national leadership</p>
          </div>

          <blockquote className="pl-2 border-l-2 border-red-600 text-lg text-red-600 font-semibold">
            “I don't follow the system, <br />
            {'\u00A0'}I fix the system.”
          </blockquote>


        </div>

        <div className="rightContainer w-1/2">
          <img className='h-110 object-cover' src={BalenAbout} alt="" />
        </div>
      </div>

      <div className='bottomContainer flex justify-around -mt-6'>
        <div className='bg-white dark:bg-neutral-800/60 shadow-2xl w-fit px-16 py-6 rounded-xl flex flex-col items-center justify-center'>
          <h2 className='text-4xl text-red-600 font-semibold'>35+</h2>
          <h3 className='text-lg font-bold'>Age</h3>
        </div>
        <div className='bg-white dark:bg-neutral-800/60 shadow-2xl w-fit px-16 py-6 rounded-xl flex flex-col items-center justify-center'>
          <h2 className='text-4xl text-red-600 font-semibold'>2022</h2>
          <h3 className='text-lg font-bold'>Kathmandu Mayor</h3>
        </div>
        <div className='bg-white dark:bg-neutral-800/60 shadow-2xl w-fit px-16 py-6 rounded-xl flex flex-col items-center justify-center'>
          <h2 className='text-4xl text-red-600 font-semibold'>2026</h2>
          <h3 className='text-lg font-bold'>Prime Minister</h3>
        </div>
        <div className='bg-white dark:bg-neutral-800/60 shadow-2xl w-fit px-16 py-6 rounded-xl flex flex-col items-center justify-center'>
          <h2 className='text-4xl text-red-600 font-semibold'>{<Infinity size={30}/>}</h2>
          <h3 className='text-lg font-bold'>Age</h3>
        </div>
      </div>
    </div>
  )
}

export default About
