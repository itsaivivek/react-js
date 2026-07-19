import React from 'react'
import { Sprout, UserRound, Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex justify-between border-b border-neutral-300 px-8 py-6'>
      <div className="logo uppercase text-black flex tracking-widest justify-center items-center"><span className='font-bold text-blue-600'>Care</span><Sprout />Hotels</div>
      <div className="nav2 text-blue-500 flex justify-center items-center gap-4">
        <ul className="links flex gap-20 max-[900px]:gap-10 max-[700px]:gap-5">
          <li className='max-[500px]:hidden'>Favorites</li>
          <li className='max-[500px]:hidden'>List your hotel</li>
          <li className='max-[500px]:hidden'>Help</li>
          <li className='max-[640px]:hidden'>Jane Marie Doe</li>
        </ul>
        <button className='hidden max-[500px]:flex'><Menu /></button>
        <button className='user bg-blue-500 text-white p-2 rounded-full'><UserRound fill='white' strokeWidth={0} /></button>
      </div>
    </div>
  )
}

export default Navbar
