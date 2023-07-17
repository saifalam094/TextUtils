import React, { useState } from 'react'

const Task = (props) => {
const handleClick=()=>{
    let newText=Text.toUpperCase()
setText(newText)

}

const handleChange=(event)=>{
setText(event.target.value)

}
const handleLower=()=>{
  let lowText=Text.toLowerCase()
  setText(lowText)
}
const handleClear=()=>{
    setText("") 
}
const handleCopy=()=>{
  navigator.clipboard.writeText(Text).then(()=>{
    alert("copied clipboard successfully")
  }).catch((error)=>{
    console.log("error while copying",error)
  })
 
}





const[Text,setText]=useState("Enter the text here")
 
  return (
  <>
  <div className="mb-3 my-4 ">
<h2>{props.heading}</h2>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={Text} onChange={handleChange}></textarea>
  <button type="button " className="btn btn-primary my-3 mx-4" onClick={handleClick}>click to uppercase</button>
  <button type="button" className="btn btn-primary my-3 mx-4  " onClick={handleLower}>click to lowercase</button>
  <button type="button" className="btn btn-primary my-3 mx-4  " onClick={handleClear}>Clear text</button>
  <button type="button" className="btn btn-primary my-3 mx-4  " onClick={handleCopy}>copy text</button>

</div>
 <div className="container">
  <h3>Text Summary</h3>
  <span className='mx-4'>{Text.split(" ").length} words and {Text.length} characters  ==///</span>
  <span>{0.008*Text.split(" ").length} MINUTES TO READ</span>
<h3>preview</h3>
  <p>{Text}</p>
 </div>
  
  </>
  )
}

export default Task