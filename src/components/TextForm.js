import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper case was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase!","success")
      }
      
      const handleLowClick = () =>{
        // console.log("Lower case was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase!","success")
    }

    const handleClearText = () =>{
        // console.log("Lower case was clicked " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text is now clear!","success")
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value); //Now we can type inside textarea.
    }


    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipbord!","success")
    }


    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed ExtraSpaces!","success")
    }


  const [text, setText] = useState('');  //default string ''
//   text = "New text";//Wrong way to change the state.
//   setText("New Text"); //Correct way to change the text
  return (
    <>
    <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#13466e':'white',color : props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lower case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
        
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      {/* Now it will not count space(" ") as an element. */}
    <p><b>{text.split(" ").filter((element) => {return element.length !== 0}).length}</b> Words and <b>{text.length}</b> characters</p>
    {/* array = text.split(" ") will give an array */}
    {/* array.length give the size of array. OR number of words.*/}
    
    <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something above in text box to preview it here."}</p>
    </div>
    </>
  )
}


