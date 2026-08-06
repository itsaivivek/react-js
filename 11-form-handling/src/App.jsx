import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault(); // Prevents the page from reloading
    console.log('Form submitted');
    
    
  }
  return (
    <div>
      <form onSubmit={function(e){
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
