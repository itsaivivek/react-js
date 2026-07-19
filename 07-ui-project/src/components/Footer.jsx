import React from 'react'
import FooterCard from './FooterCard'


const Footer = (props) => {
    
  return (
    <div className='px-8 py-5'>
      <h2 className='text-2xl font-medium'>Why to choose Care Hotels</h2>
      <div className="footerCards flex flex-wrap justify-evenly gap-5 py-4">
        {props.footerDets.map((elem) => {
            return <FooterCard title = {elem.title} svg = {elem.svg}/>
        }
        )}
      </div>
    </div>
  )
}

export default Footer
