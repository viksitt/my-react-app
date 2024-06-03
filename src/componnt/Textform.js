import React, {useState} from 'react';

export default function Textform(props) {
    const handleupclick =() =>{
        //console.log("upper case was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("converted", "success");
        
    }
    const handlelowclick =() =>{
      //console.log("upper case was clicked" + text);
      let newtext = text.toLowerCase();
      setText(newtext)
      props.showAlert("converted", "success");
      
  }
  const handleclearclick =() =>{
    //console.log("upper case was clicked" + text);
    let newtext = text.repeat();
    setText(newtext)
    props.showAlert("cleared", "success");
    
}
  
    const handleonchange=(event) =>{
        console.log(" onchange was clicked");
        let newtext = text.toUpperCase();
        setText(event.target.value)
    }
    const [text, setText] =useState(" ");
    
   
  return (
    <>
    <div className='container' style={{Color: props.mode ==='dark'? 'white':'black'}}>
  <h1> {props.heading}  </h1>      
<div className="mb-3">
  <label htmlforfor="mybox" onChange={handleonchange} className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode ==='dark'?'grey':'white'}} id="mybox" rows="8"> </textarea>
</div  >
<button className =" btn btn-primary mx-2" onClick={handleupclick} >convert to uppercase</button>
<button className =" btn btn-primary mx-2" onClick={handlelowclick} >convert to lowercase</button>
<button className =" btn btn-primary mx-2" onClick={handleclearclick} >Clear text</button>

      
    </div>
    <div className='container my-3'  style={{Color: props.mode ==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h2>{ 0.008*(text.split(" ").length)} minutes to read</h2>
      <h1>Preview : </h1>
      <p>{text}</p>
</div>
    
    </>
  );
}
