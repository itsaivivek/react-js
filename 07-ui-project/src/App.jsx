import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import { Tag, CalendarX2, Leaf } from 'lucide-react'

const App = () => {
  let destination = [
    {
      "destinationHotel": "The Ritz Paris",
      "rating": 5,
      "location": "Paris, France",
      "price": "$1250/night",
      "img": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGx1eHVyeSUyMHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "destinationHotel": "1 Hotel South Beach",
      "rating": 4,
      "location": "Miami, USA",
      "price": "$650/night",
      "img": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "destinationHotel": "Island Palace Hotel",
      "rating": 4,
      "location": "Male, Maldives",
      "price": "$250/night",
      "img": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "destinationHotel": "Bella Vista Resort",
      "rating": 3,
      "location": "Boracay, Philippines",
      "price": "$56/night",
      "img": "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "destinationHotel": "Santorini Secret Suites & Spa",
      "rating": 2,
      "location": "Santorini, Greece",
      "price": "$480/night",
      "img": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  let footerDets = [
        {
            title: 'Special Discount',
            svg: <Tag className='rotate-90 text-blue-500' />
        },
        {
            title: 'Free Cancelation',
            svg: <CalendarX2 className='rotate-90 text-blue-500'/>
        },
        {
            title: 'Eco-friendly stays',
            svg: <Leaf className='rotate-90 text-blue-500'/>
        }
    ]

  return (
    <div>
      <Navbar />
      <Main destination = {destination} />
      <Footer footerDets = {footerDets}/>
    </div>
  )
}

export default App
