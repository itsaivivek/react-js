import React from 'react'

const Destination = () => {
  return (
    <div>
      <h2 className='text-4xl font-medium'>Choose your destination</h2>
      <form action="" className='mt-6 flex w-full items-center justify-between max-[700px]:grid grid-cols-2 max-[700px]:gap-5'>
        <div className="destinationContainer relative w-1/5 max-[700px]:w-full">
          <label htmlFor="destination" className='text-xs absolute -top-2 left-3 text-neutral-600 bg-white px-1'>Destination</label>
          <select name="" id="destination" className='h-14 px-2 rounded-md w-full border border-neutral-300 outline-none'>
            <option defaultValue={'Choose a location'}>Choose a location</option>
            <option value="Newyork">Newyork</option>
            <option value="Japan">Japan</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Dubai">Dubai</option>
            <option value="Paris">Paris</option>
            <option value="Berlin">Berlin</option>
          </select>
        </div>
        <div className='checkinContainer relative w-1/5 max-[700px]:w-full'>
          <label htmlFor="checkin" className='text-xs absolute -top-2 left-3 text-neutral-600 bg-white px-1'>Check in</label>
          <input type="date" name="" id="checkin" className='h-14 rounded-md w-full px-2 border border-neutral-300'/>
        </div>
        <div className='checkoutContainer relative w-1/5 max-[700px]:w-full'>
          <label htmlFor="checkout" className='text-xs absolute -top-2 left-3 text-neutral-600 bg-white px-1'>Check out</label>
          <input type="date" name="" id="checkout" className='h-14 rounded-md w-full px-2 border border-neutral-300'/>
        </div>
         <div className="guestsContainer relative w-1/5 max-[700px]:w-full">
          <label htmlFor="guests" className='text-xs absolute -top-2 left-3 text-neutral-600 bg-white px-1'>Guests</label>
          <select name="" id="guests" className='h-14 px-2 rounded-md w-full border border-neutral-300 outline-none'>
            <option>1 Adult - 0 children</option>
            <option>2 Adult - 0 children</option>
            <option>3 Adult - 0 children</option>
            <option>1 Adult - 1 children</option>
            <option>2 Adult - 1 children</option>
            <option>3 Adult - 1 children</option>
            <option>1 Adult - 2 children</option>
            <option>2 Adult - 2 children</option>
            <option>3 Adult - 2 children</option>
          </select>
        </div>
        <button type='submit' className='bg-blue-500 text-white text-lg rounded-md h-14 w-1/8 max-[700px]:w-full'>Search</button>
      </form >
    </div >
  )
}

export default Destination
