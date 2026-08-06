import React from 'react'
import { Trash } from 'lucide-react'

const NoteCard = (props) => {

  return (
     <div className={`note w-60 border p-4 flex flex-col gap-2 rounded-2xl ${props.bgColor} wrap-break-word`}>
        <div className="heading text-neutral-600 leading-tight">
          <small>{new Date(props.date).toISOString().split('T')[0]}</small>
          <h2 className='font-medium text-lg text-black'>
          {props.heading}
          </h2>
        </div>
        <div className="description text-sm leading-tight">
          {props.description}
        </div>
        <div className="actions flex justify-end opacity-90 mt-4">
          <Trash onClick={props.onDelete} className='active:scale-90'/>
        </div>
      </div>
  )
}

export default NoteCard
