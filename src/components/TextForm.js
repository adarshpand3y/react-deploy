import React, { useState } from 'react'

export default function TextForm(props) {
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
        <div className="container my-2">
          <h2 className="mb-4">
            Enter your text below and click on the respective button to analyze
          </h2>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="textInput"
              rows="10"
              value={text}
              onChange={handleOnChange}
              placeholder="Enter your text here"
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
          <h3>Summary</h3>
          <p>{text.split(" ").filter((element) => {return element.length!==0}).length} word(s) and {text.length} character(s).</p>
          <p>{0.008*text.split(" ").filter((element) => {return element.length!==0}).length} minutes to speak.</p>
          <h3>Preview</h3>
          <p>{text?text:"Please write some text to preview."}</p>
        </div>
      </>
    );
}
