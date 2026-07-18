import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className='card border w-80 h-90 flex flex-col justify-between p-4 bg-white rounded-3xl'>
      <div className="top flex justify-between items-center">
        <div className='w-15 h-15 rounded-full border border-neutral-400 overflow-hidden p-0.5'>
          <img className='w-full h-full object-cover' src={props.brandLogo} alt="" />
        </div>
        <button className='flex justify-center items-center border px-2 py-0.5 opacity-45 border-neutral-400 h-fit'>Save <Bookmark size={20} strokeWidth={2} /></button>
      </div>
      <div className="center flex flex-col gap-2 -mt-6">
        <div className="info flex items-center justify-start gap-2">
          <h4 className='text-xl'>{props.companyName}</h4>
          <span className='text-sm text-neutral-500'>{props.datePosted}</span>
        </div>
        <div className="title text-3xl">{props.postTitle}</div>
        <div className="captions flex gap-2 text-sm">
          <div className="time bg-gray-200 px-4 py-1 rounded-lg">{props.tag1}</div>
          <div className="level bg-gray-200 px-4 py-1 rounded-lg">{props.tag2}</div>
        </div>
      </div>
      <div className="bottom flex justify-between items-center">
        <div>
          <h3 className='text-xl'>{props.salary}$/hr</h3>
          <p className='text-sm text-neutral-500'>{props.location}</p>
        </div>
        <button className='bg-neutral-900 text-white px-4 py-2 h-fit rounded-full'>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
