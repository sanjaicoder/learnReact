import React from 'react'

const EventHandle = () => {
  const handleClick = () =>{
    return console.log("Button Clicked");
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    return console.log("Clicked")
  } 

  const handleNameChange = (e) =>{
    const name = document.getElementById("form");
    console.log(name.value)
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <form action="submit" onSubmit={handleSubmit} >
        <input type="text" name="name" id="form"  />
        <button onClick={handleNameChange}>Form click button</button>
      </form>
    </div>
  )
}

export default EventHandle;
