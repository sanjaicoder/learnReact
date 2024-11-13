import React from 'react'

const Greet = (props) => {
  return (
    <div>
      <h1>Hello {props.name}. age is {props.age}</h1>
    </div>
  )
}

export default Greet;
