import React from 'react'
import BalenRapper from '../assets/balen-with-mic-removebg.png'
import { MicVocal } from 'lucide-react'
import ReactPlayer from 'react-player'

const MusicRap = () => {
  return (
    <div className='flex px-18'>
      <div className="leftContainer flex flex-col w-full gap-2 py-4">
        <div className='flex flex-col gap-2'>
          <h2 className='flex text-3xl font-semibold items-center gap-2'>The Rapper Era <MicVocal /></h2>
          <p className='text-xl'>Before politics, there were bars.</p>
        </div>
        <div className='flex gap-4'>
          <div className='player-wrapper w-100 h-55'>
            <ReactPlayer
              src="https://youtube.com/watch?v=VZfKqojCmeg&si=Uf-r8SUaS-MiP2V8"
              controls={true}
              width="100%"
              height="100%"
            />
            <div className='mt-4'>Bro I don't have spotify API yet. 😂</div>
          </div>
          <div className='w-1/2 text-lg font-semibold flex flex-col gap-6'>
            <p className='text-red-600 text-xl'>"History is something that changes, brother, Balen hadn't arrived until now"</p>
            <p>"दुई–चार दिन पर्खी कान्छा, तेरो बाउँलाई पनि मसँग फोटो खिच्न मन पर्छ।"
              <p>
                (Wait a couple of days, kid, even your dad will want to take a picture with me.)
              </p>
            </p>
          </div>

        </div>
      </div>
      <div className="rightContainer w-1/2">
        <img className='h-95 object-cover' src={BalenRapper} alt="" />
      </div>
    </div>
  )
}

export default MusicRap
