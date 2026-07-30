import React, { useState } from 'react'

const Example = () => {

    const [num, setNum] = useState(20)
    return (
        <div className='example'>
            <h2>Value of num is {num}</h2>
            <button onClick={() => {
                setNum(30)
            }
            }>Click</button>
        </div>
    )
}

export default Example
