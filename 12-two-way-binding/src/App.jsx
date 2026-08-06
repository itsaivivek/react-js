import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log('Form submitted');
        setTitle('') // Empty the input after form submission
      }
      }>
        <input 
        type="text" 
        placeholder='Enter your name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
