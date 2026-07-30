import React, { useState } from 'react'

const Counter = () => {
    const [num, setNum] = useState(0)
    return (
        <div className='counter'>
            <h2>Counter</h2>
            <div>
            <button onClick={() => {
                setNum(num + 1)
            }
            }>Increase</button>
            <h2>{num}</h2>
            <button onClick={() => {
                if (num > 0) {
                    setNum(num - 1)
                }
            }
            }>Decrease</button>
            </div>
        </div>
    )
}

export default Counter
