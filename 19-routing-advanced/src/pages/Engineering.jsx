import { UtilityPole } from 'lucide-react'
import React from 'react'
import EngineerBalen from '../assets/engineer-balen-removebg.png'

const Engineering = () => {
  return (
    <div className='flex px-20'>
      <div className="leftContainer flex flex-col w-full gap-10 py-4">
        <div className='flex flex-col gap-2'>
          <h2 className='flex text-3xl font-semibold items-center gap-2'>The Engineering Arc <UtilityPole /></h2>
          <p className='text-xl'>Started by calculating loads. Eventually started carrying the whole country.</p>
          <p className='text-xl'>Before managing the complex dynamics of a capital city, I learned to manage structural integrity. Engineering taught me that no matter how beautiful a structure looks on the outside, it cannot stand without a rock-solid foundation. Transforming Nepal requires that same rigorous structural analysis—fixing the hidden, broken frameworks so the nation can rise securely.</p>
        </div>
        <blockquote className="border-l-2 bg-neutral-200/50 dark:bg-neutral-800/50 pl-4 pr-10 py-4 rounded-md w-fit border-red-600 text-lg text-red-600 font-semibold">
            "I didn't choose engineering, engineering chose me"
          </blockquote>
      </div>
      <div className="rightContainer w-1/2">
        <img className='h-90 object-cover' src={EngineerBalen} alt="" />
      </div>
    </div>
  )
}

export default Engineering
