import React, {useState} from 'react'




export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        // console.log("UpperCase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () =>{
        // console.log("UpperCase was clicked");
        let newText = '';
        setText(newText);
    }
    const handleCopyClick = () =>{
               let newText = document.getElementById("myBox");
               newText.select()
               navigator.clipboard.writeText(newText.value)
            //    setText(newText);
               //alert(`You have copied "${copyText}"`);
            
    }
    const handleExtraSpaceClick = () =>{
       
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }

  const[text , setText] = useState(" ");  
//   text = "wrong way to set text";
//   setText("right way to set text");

  return (
    <>
    <div className='container' style={{color : props.mode === 'dark' ? 'white':'black' }}>
        <h1>{props.heading} </h1>
        <div className="mb-3" >
            <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? '#495057':'#ced4da', color : props.mode === 'dark' ? 'white':'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick} >Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaceClick} >Clear Extra Space</button>
    </div>
    <div className="container my-2" style={{color : props.mode === 'dark' ? 'white':'black' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").length-1)} minutes read</p>
        <h2>Preview</h2>
        <p style={{color : props.mode === 'dark' ? 'white':'black' }} >{text.length > 0 ? text : "Enter something above to preview here..." }</p>
    </div>
    </>
  )
}


