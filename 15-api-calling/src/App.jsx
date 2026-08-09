import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    // fetch() method
    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = await response.json();
    // console.log(data)

    // axios method
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(response.data)
    setData(response.data)

    // alternative axios method by destructuring data
    // const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(data)
  }

  return (
    <div className='parent'>
      <button onClick={getData}>Get Data</button>
      <div className="userContainer">
          {data.map((elem, idx) => {
            return <div key={idx} className='user'>
              <div>Name: {elem.name}</div>
              <div>Email: {elem.email}</div>
              <div>Phone: {elem.phone}</div>
          </div>
        }
        )}
      </div>

    </div>
  )
}

export default App
