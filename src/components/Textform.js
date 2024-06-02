import React, { useState } from "react";

export default function Textform(props) {
  const [text, settext] = useState("Enter text here");
  const handleupclick = (event) => {
    event.preventDefault();
    // console.log("UpperCase Was Clicked");
    let newText = text.toUpperCase();
    settext(newText);
  };
  const handleupclick1 = (event) => {
    event.preventDefault();
    // console.log("UpperCase Was Clicked");
    let newText = text.toLowerCase();
    settext(newText);
  };
  const handleonchange = (event) => {
    // console.log("On change");
    settext(event.target.value);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent === "Speak") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if ((toogle.innerHTML = "Speak")) {
        window.speechSynthesis.cancel();
      }
    }
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <form>
          <h1>{props.heading}</h1>
          <label htmlFor="mybox" className="form-label">
            Example textarea
          </label>
          <div className="mb-3">
            <textarea
              className="form-control mb-5"
              value={text}
              style={{
                backgroundColor: props.mode === "dark" ? "dark" : "white",
              }}
              onChange={handleonchange}
              id="myBox "
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleupclick}>
            Convert to Upper case
          </button>
          <button className="btn btn-primary mx-2" onClick={handleupclick1}>
            Convert to Lower case
          </button>
          <button
            type="submit"
            onClick={speak}
            className="btn btn-warning mx-2 my-2"
            id="toggle"
          >
            Speak
          </button>
        </form>
      </div>
      <div
        className="container my-5"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.0047 * text.split(" ").length} minutes preview</p>
      </div>
    </>
  );
}
