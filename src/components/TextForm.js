import React, { useState } from 'react'

export default function TextForm(props) {
  const lightColours = {backgroundColor: 'white', color: 'black'};
  const darkColours = {backgroundColor: '#333', color: 'white'};


  const [text, setText] = useState("");

  const handleUpCLick = ()=> {
    setText(text.toUpperCase());
    props.alertFunc("Converted to uppercase");
  }

  const handleDownCLick = ()=> {
    setText(text.toLowerCase());
    props.alertFunc("Converted to lowercase");
  }

  const handleRemoveSpaces = ()=> {
    setText(text.replaceAll(" ", ""));
    props.alertFunc("Removed extra spaces");
  }

  const handleOnChange = (event)=> {
    setText(event.target.value);
  }

  const handleClearTextarea = (event) => {
    setText("");
    props.alertFunc("Textarea cleared");
  }

  const handleCopyToClipboard = (event) => {
    navigator.clipboard.writeText(text);
    props.alertFunc("Copied to clipboard");
  }

  const handleRemoveExtraSpaces = (event) => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alertFunc("Removed extra spaces");
  }

    return (
      <>
        <div style={props.theme==='light'?lightColours:darkColours} className="container my-2">
          <h2 className="mb-4">
            Enter your text below and click on the respective button to analyze
          </h2>
          <div className="mb-3">
            <textarea
              className={`form-control bg-${props.theme==='light'?'light':'dark'}`}
              id="textInput"
              rows="10"
              value={text}
              onChange={handleOnChange}
              placeholder="Enter your text here"
              style={props.theme==='light'?{color: '#212529'}:{color: '#fff'}}
            ></textarea>
          </div>
          <button type="button" className="btn btn-primary m-2" onClick={handleUpCLick}>
            Convert to Uppercase
          </button>
          <button type="button" className="btn btn-primary m-2" onClick={handleDownCLick}>
            Convert to Lowercase
          </button>
          <button type="button" className="btn btn-primary m-2" onClick={handleRemoveSpaces}>
            Remove All Spaces
          </button>
          <button type="button" className="btn btn-primary m-2" onClick={handleRemoveExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button type="button" className="btn btn-primary m-2" onClick={handleCopyToClipboard}>
            Copy Text to Clipboard
          </button>
          <button type="button" className="btn btn-danger m-2" onClick={handleClearTextarea}>
            Clear Workspace
          </button>
        </div>
        <div className="container">
          <h3 className={`text-${props.theme==='light'?'dark':'light'}`}>Summary</h3>
          <p className={`text-${props.theme==='light'?'dark':'light'}`}>{text.split(" ").filter((element) => {return element.length!==0}).length} word(s) and {text.length} character(s).</p>
          <p className={`text-${props.theme==='light'?'dark':'light'}`}>{0.008*text.split(" ").filter((element) => {return element.length!==0}).length} minutes to speak.</p>
          <h3 className={`text-${props.theme==='light'?'dark':'light'}`}>Preview</h3>
          <p className={`text-${props.theme==='light'?'dark':'light'}`}>{text?text:"Please write some text to preview."}</p>
        </div>
      </>
    );
}
