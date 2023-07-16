import React, { useState } from 'react'

const Task = (props) => {
const handleClick=()=>{
    let newText=Text.toUpperCase()
setText(newText)
console.log(Text)
}
const handleChange=(event)=>{
setText(event.target.value)
console.log("change fx")
}





const[Text,setText]=useState("Enter the text here")
 
  return (
  <>
  <div className="mb-3 my-4 ">
  <label htmlFor="exampleFormControlTextarea1" className
  ="form-label">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="20" value={Text} onChange={handleChange}></textarea>
  <button type="button" className="btn btn-primary my-3" onClick={handleClick}>click to uppercase</button>
</div>
  
  </>
  )
}

export default Task