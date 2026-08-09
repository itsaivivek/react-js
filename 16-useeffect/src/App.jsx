import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)

  useEffect(function(){
    console.log('use effect is running')
  }, [num])
  
  return (
    <div className='parent'>
      <h1>{num}</h1>
      <button onClick={() => {
        setNum(num+1)
      }
      }>num</button>
      <h1>{num2}</h1>
      <button onClick={() => {
        setNum2(num2+1)
      }
      }>num2</button>
    </div>
  )
}

export default App
