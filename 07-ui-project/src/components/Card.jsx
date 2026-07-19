import React from 'react'
import {Star} from 'lucide-react'

const Card = (props) => {
  return (
    <div className='flex flex-col max-w-62.5 max-[530px]:w-80 bg-white shadow-2xl drop-shadow-2xl rounded-2xl overflow-hidden shrink-0 outline-0 cursor-pointer hover:outline-2 hover:outline-blue-500 hover:scale-105 transition duration-200 ease-in-out'>
      <div className="thumbnail h-50">
        <img className='w-full h-full object-cover' src={props.img} alt="" />
      </div>
      <div className="info px-4 py-2">
        <h4 className='font-medium'>{props.destinationHotel}</h4>
        <div className="rating flex">
        {[...Array(props.rating)].map((_, index) => {
          return <Star key={index} fill='black' size={10}/>
        }
        )}
        </div>
        <p className='mt-4 text-sm text-neutral-600'>{props.location}</p>
        <p className='font-medium'>{props.price}</p>
        <button className='border border-blue-500 text-blue-500 px-4 py-2 rounded-md text-sm mt-2 hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out'>View More</button>
      </div>
    </div>
  )
}

export default Card
