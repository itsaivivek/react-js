import React from 'react'

const App = () => {
  // used to set items in local storage in key value pair
  // localStorage.setItem('user', 'vivek')

  // used to get item using its key
  // console.log(localStorage.getItem('user'))

  // used to remove item using its key
  // localStorage.removeItem('user')

  // used to clear all the storage
  // localStorage.clear()

  const user = {
    username: 'Vivek',
    age: 20,
    city: 'MNR'
  }

  // localStorage.setItem('user', JSON.stringify(user))
  console.log(JSON.parse(localStorage.getItem('user')))
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
