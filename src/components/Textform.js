import React, { useState } from "react";
import ClearTextbutton from "./Buttons/ClearTextbutton";
import CopyTextbutton from "./Buttons/CopyTextbutton";
import LowerCasebutton from "./Buttons/LowerCasebutton";
import UpperCasebutton from "./Buttons/UpperCasebutton";

export default function Textform(props) {
  const [text, setText] = useState("Enter text here...");
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const textid = document.getElementById("mytextbox");
  const myStyle = {
    backgroundColor: props.mode === "dark" ? "#343a40" : "white",
    color: props.mode === "dark" ? "white" : "#343a40",
  };
  return (
    <>
      <div
        className="container"
        style={myStyle}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control my-2"
            value={text}
            onChange={handleTextChange}
            style={myStyle}
            id="mytextbox"
            rows="8"
          ></textarea>
        </div>
        <div className="d-flex">
          <UpperCasebutton
            text={text}
            setText={setText}
            mode={props.mode}
            showAlert={props.showAlert}
          />
          <LowerCasebutton
            text={text}
            setText={setText}
            mode={props.mode}
            showAlert={props.showAlert}
          />
          <CopyTextbutton
            text={text}
            textid={textid}
            setText={setText}
            mode={props.mode}
            showAlert={props.showAlert}
          />
          <ClearTextbutton
            text={text}
            setText={setText}
            mode={props.mode}
            showAlert={props.showAlert}
          />
        </div>
      </div>
      <div
        className="container my-3"
        style={myStyle}
      >
        <h1>Your Text Summary :</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
      </div>
    </>
  );
}
