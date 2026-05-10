import React from 'react'

const App = () => {
  return ( 
    <div>
      <div id="dad">
        <h1>Hello h1</h1>
        <h2>Hello h2</h2>
      </div>
      <div id="uncle"></div>
    </div>
  )
}
// const App = () => {
//   return ( 
//     <> 
//       <div id="dad">
//         <h1>Hello h1</h1>
//         <h2>Hello h2</h2>
//       </div>
//       <div id="uncle"></div>
//     </>
//   )
// }

// Here <> empty tag are fragments and used to contain child. It will show childs directly in html without any wrapper div

export default App
