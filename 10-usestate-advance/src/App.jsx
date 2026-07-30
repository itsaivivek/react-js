import React, { useState } from 'react'

const App = () => {
  const [user, setUser] = useState({ username: 'Sarthak', age: 20 })
  const [num, setNum] = useState([10, 20, 30])
  const [a, setA] = useState(3)
  return (
    <div className='parent'>
      <h2>username: {user.username}, age: {user.age}</h2>
      <button onClick={() => {
        const newUser = { ...user }
        newUser.username = 'Aman'
        setUser(newUser)
        // setUser(prev => ({ ...prev, username:'Aman', age: 40 })) // Alternative way
      }
      }>Click</button>
      <h2>num: {num}</h2>
      <h2>variable a: {a}</h2>
      <button onClick={() => {
        const newNum = [...num]
        newNum.push(99)
        setNum(newNum)

        // Batch Update
        setA(prev => (prev+1))
        setA(prev => (prev+1))
        setA(prev => (prev+1))
      }
      }>Update</button>
    </div>
  )
}

export default App
