import React from 'react'
import Destination from './Destination'
import CardContainer from './CardContainer'

const Main = (props) => {
  return (
    <div className='px-8 py-5 flex flex-col gap-8'>
     <Destination /> 
     <CardContainer destination = {props.destination} />
    </div>
  )
}

export default Main
