import React from 'react'
import BalenNamaskar from '../assets/balenNamaskar.png'
import { Building2, Landmark, LockKeyholeOpen, MoveRight, Star } from 'lucide-react'
import NepalFlag from '../assets/Flag_of_Nepal.svg'

const PrimeMinister = () => {
  return (
    <div className='flex px-20'>
      <div className="leftContainer flex flex-col w-full gap-4 py-4">
        <div className='flex items-center gap-2'>
        <h2 className='flex text-3xl font-semibold items-center gap-2'>The Next Chapter</h2>
        <img src={NepalFlag} className='w-6' alt="" />
        </div>
        <div className='flex gap-4'>
          <div className='text-red-600 font-semibold flex flex-col items-center justify-center bg-neutral-200/50 dark:bg-neutral-800 rounded-md p-4'>
            <h2 className='text-5xl font-bold'>27</h2>
            <h2 className='text-3xl'>March</h2>
            <h2 className='text-3xl'>2026</h2>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-3xl font-bold'>Prime Minister of Nepal</h2>
            <p className='text-xl'>From fixing Kathmandu's streets to reshaping the nation: taking the engineer's mindset straight to Singha Durbar.</p>
          </div>
        </div>
        <div className='promotion flex flex-col border border-neutral-300 bg-neutral-300/50 dark:bg-neutral-800/80 dark:border-neutral-600 w-1/2 px-4 py-2 rounded-2xl gap-4 justify-center'>
          <h2 className='flex text-2xl font-semibold items-center gap-2'>Promotion unlocked <LockKeyholeOpen /></h2>
          <div className='flex justify-between pr-10 text-xl items-center'>
            <h2 className='flex items-center gap-1'>Mayor<Building2/></h2>
            <MoveRight />
            <h2 className='flex items-center gap-1'>Prime Minister<Landmark /></h2>
          </div>
          <div className='flex items-center gap-2'>
            <h2 className='text-lg'>Difficulty:</h2>
            <Star className='text-yellow-500 fill-current'/>
            <Star className='text-yellow-500 fill-current'/>
            <Star className='text-yellow-500 fill-current'/>
            <Star className='text-yellow-500 fill-current'/>
            <Star />
          </div>
        </div>
      </div>
      <div className="rightContainer w-1/2">
        <img className='h-90 object-cover' src={BalenNamaskar} alt="" />
      </div>
    </div>
  )
}

export default PrimeMinister
