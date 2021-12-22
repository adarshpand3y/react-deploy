import React, { useState } from 'react'

export default function TextForm() {
  const [text, setText] = useState("");

  const handleUpCLick = ()=> {
    setText(text.toUpperCase());
  }

  const handleDownCLick = ()=> {
    setText(text.toLowerCase());
  }

  const handleRemoveSpaces = ()=> {
    setText(text.replaceAll(" ", ""));
  }

  const handleOnChange = (event)=> {
    setText(event.target.value);
  }

    return (
      <>
        <div className="container my-4">
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
        </div>
      </>
    );
}
