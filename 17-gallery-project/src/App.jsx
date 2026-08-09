import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Button from './components/Button'
import Navbar from './components/Navbar'


const App = () => {
  const [data, setData] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false) // loading state


  useEffect(() => {
    getData()
  }, [index])



  const getData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=25`)
      setData(response.data)
    }
    catch (error) {
      console.error("Error fetching data")
    }
    finally {
      setLoading(false)
    }
  }
  let printUserData = <h2 className='dark:text-white text-xl font-medium'>Loading..</h2>

  return (
    <div className='dark:bg-zinc-800 bg-zinc-200 h-screen overflow-auto'>
      <Navbar />
      <div className='flex flex-wrap h-[80%] justify-center items-center overflow-y-auto 
            [scrollbar-width:thin] 
            [scrollbar-color:theme(colors.slate.400)_transparent] 
            [&::-webkit-scrollbar]:w-1 
            [&::-webkit-scrollbar-track]:bg-transparent 
            [&::-webkit-scrollbar-thumb]:rounded-full 
            [&::-webkit-scrollbar-thumb]:bg-slate-400 gap-4'>
        {loading ? (
          printUserData
        ) : (
          data.length > 0 &&

          data.map((elem, idx) => {
            return <div key={idx}>
              <Card elem={elem} />
            </div>
          }
          )
        )
        }
      </div>
      <Button setIndex={setIndex} index={index} />
    </div>
  )
}

export default App
