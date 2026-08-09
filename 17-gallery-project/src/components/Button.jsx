import React from 'react'

const Button = ({setIndex, index}) => {
  return (
    <div className="buttons flex justify-center items-center gap-4 mt-4">
        <button onClick={() => {
          if(index>1){
            setIndex(index - 1)
          }
        }
        } className='bg-amber-500 px-4 py-1.5 rounded-md font-semibold text-lg cursor-pointer active:scale-95'>Prev</button>
        <h4 className='dark:text-white text-lg font-medium'>Page: {index}</h4>
        <button onClick={() => {
          setIndex(index + 1)
        }
        } className='bg-amber-500 px-4 py-1.5 rounded-md font-semibold text-lg cursor-pointer active:scale-95'>Next</button>
      </div>
  )
}

export default Button
