import React ,{useState} from 'react'

export default function TextForm(props) {
  const [mode,setMode] = useState("light")
  const handleUpCase = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event) =>{
    setText(event.target.value)
    
  }
  const handleClear = () =>{
    setText("");
  }
  

  if(mode==='dark'){
    var  myStyle={
      backgroundColor:'black',
      
      color:'white'
    }
  }
  else{
    var myStyle={
      backgroundColor:'white',
      color:'black'
    }
  }
  
 
   
  
  
  const Mode =() =>{
   if (mode==="dark") {
    setMode("light")
    console.log("light mode activated")
   }
   else{
    setMode("dark")
    console.log("dark mode activate")
   
   }
  }
 

 const root=document.getElementById("root")
 root.style={myStyle}
  const [text,setText] = useState("Enter text here ")
  return (
    <>
        
<div className="mb-3" style={myStyle}>
{/* <button type="button" class="btn btn-primary btn-sm " id='switch' onClick={Mode}>Small button</button> */}
<div className="form-check form-switch d-flex justify-content-end" onClick={Mode}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label mx-1 " for="flexSwitchCheckDefault"> {mode}</label>
</div>


<h1 className='my-3' >{props.heading}  </h1>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" style={myStyle} id="exampleFormControlTextarea1 myInput" value={text} onChange={handleOnChange} rows="6"></textarea>

  <button className='btn btn-primary my-2' onClick={handleUpCase} >Convert to Upper case</button>
  <button className='btn btn-primary my-2 mx-2' onClick={handleLoCase}  >Convert to Lower case</button>
  <button className='btn btn-primary my-2 mx-2' onClick={handleClear}  >Clear text</button>
</div>
 <div className='container' style={myStyle}>
 <h2>Your Text Summary</h2>
 <p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
 <h3 className="my-2">Preview</h3>
 <p>{text}</p>
 
 </div>


    </>
    )
}
