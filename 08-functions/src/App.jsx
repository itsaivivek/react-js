import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('clicked')
  }

  const inputChanging = (val) =>{
    console.log(val)
  }
  return (
    <div className='parent'>
      <button onClick={btnClicked}>Click 1</button>
      <button onClick={function(){
        console.log('Hello guys')
      }}>Click 2</button>
      <input onChange={function(elem){
        inputChanging(elem.target.value)
      }} type="text" placeholder='Enter Name'/>
    </div>
  )
}

export default App
