import { X } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  let navigate = useNavigate()
  return (
    <div className='flex'>
      <div className='flex flex-col mx-14 my-6 gap-8 w-2/5'>
        <div className="heading flex flex-col gap-2">
          <h2 className='text-5xl font-bold'>Contact Balen</h2>
          <p className='text-xl'>Want to talk to the prime minister?</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if(username.trim() === '' || email.trim() === '' || message.trim() ===''){
              return
            }
            setUsername('')
            setEmail('')
            setMessage('')
            setIsSubmitted(prev => !prev)
          }
          }
          className='flex flex-col w-full gap-4
      '>
          <input type="text" name="" id="" placeholder='Name' className='outline-none border border-neutral-500 h-12 text-xl p-2' value={username} onChange={(e) => {
            setUsername(e.target.value)
          }
          } />
          <input type="email" name="" id="" placeholder='Email' className='outline-none border border-neutral-500 h-12  text-xl p-2' value={email} onChange={(e) => {
            setEmail(e.target.value)
          }
          } />
          <textarea name="" id="" placeholder='Message' className='outline-none border border-neutral-500 h-30  text-xl p-2' value={message} onChange={(e) => {
            setMessage(e.target.value)
          }
          }></textarea>
          <button type='submit' className='bg-red-600 rounded-md text-white text-xl font-semibold px-14 py-4 active:scale-95 cursor-pointer'>Send Message</button>
        </form>


      </div>
      <div className={`messageNotSent flex-col gap-2 mt-10 ml-20 grow ${isSubmitted ? 'flex' : 'hidden'}`}>
        <h2 className='flex items-center text-red-600 text-3xl gap-2 font-semibold'><X size={35}/> Message Not Sent</h2>
        <div>
          <h3 className='text-2xl'>Reason:</h3>
          <p className='text-lg'>You cannot contact Balen.</p>
          <p className='text-lg'>Your aukaad is currently insufficient.</p>
          <p className='text-lg'>Required level: Prime Minister</p>
          <p className='text-lg'>Your level: Student 😂</p>
        </div>
        <div className='flex flex-col w-fit gap-2'>
          <h3 className='text-lg font-semibold'>Still trying to contact him?</h3>
          <button
          onClick={() => {
            navigate('/notfound')
          }
          }
          className='bg-red-600 rounded-md text-white text-xl font-semibold px-10 py-4 active:scale-95 cursor-pointer'>Increase My Aukaad</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
