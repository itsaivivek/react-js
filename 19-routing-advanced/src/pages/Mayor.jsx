import { Building2 } from 'lucide-react'
import React from 'react'
import BalenMayor from '../assets/balen-as-mayor-removebg.png'

const Mayor = () => {
  return (
    <div className='flex px-20'>
          <div className="leftContainer flex flex-col w-full gap-10 py-4">
            <div className='flex flex-col gap-2'>
              <h2 className='flex text-3xl font-semibold items-center gap-2'>The Mayor Arc <Building2 /></h2>
              <p className='text-xl'>Taking the helm of Kathmandu Metropolitan City in 2022 wasn't just a political victory—it was a full system reset.</p>
              <p className='text-xl'>Powered by an engineer's precision, the focus shifted from traditional politics to actionable execution: restoring public spaces, driving urban development, enforcing waste management solutions, and bringing transparency to local governance. Kathmandu needed a mayor to fix the foundations, and the city got a blueprints-first approach to progress.</p>
            </div>
          </div>
          <div className="rightContainer w-1/2">
            <img className='h-90 object-cover' src={BalenMayor} alt="" />
          </div>
        </div>
  )
}

export default Mayor
