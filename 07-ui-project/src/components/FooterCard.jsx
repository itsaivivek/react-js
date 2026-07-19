import React from 'react'


const FooterCard = (props) => {
  return (
    <div className='max-w-100 bg-white p-4 rounded-2xl text-sm text-neutral-600 shadow-2xl'>
      <div className="top flex items-center gap-2">
        {props.svg}
        <div>
            <h3 className='font-medium text-base text-black'>{props.title}</h3>
            <p>Subtitle</p>
        </div>
      </div>
      <div className="bottom mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas saepe molestias rem vitae ipsum, esse sint.
      </div>
    </div>
  )
}

export default FooterCard
