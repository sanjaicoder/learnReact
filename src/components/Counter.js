import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(() => 4)
    const incrementCounter = () =>{
        setCount(prevCount => prevCount+1)
    }
    const decrementCounter = () =>{
        setCount(prevCount => prevCount-1)
    }
  return (
    <div>
      <button onClick={incrementCounter}>+</button>
        {count}
      <button onClick={decrementCounter}>-</button>
    </div>
  )
}

export default Counter
