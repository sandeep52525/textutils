import React from "react";

export default function UpperCasebutton(props) {
  const textareaCheck = () => {
    if (props.text === "") {
      props.showAlert("Please enter some text for modifications.", "warning");
    } else {
      if (props.text.toUpperCase() === props.text) {
        props.showAlert("Text is already in uppercase letters.", "warning");
      } else {
        handleUpClick();
        props.showAlert("Changed to uppercase letters.", "success");
      }
    }
  };
  const handleUpClick = () => {
    props.setText(props.text.toUpperCase());
  };
  return (
    <div>
      <button
        className={`btn btn-${props.mode} border my-1 mx-1`}
        onClick={textareaCheck}
      >
        Convert to UpperCase
      </button>
    </div>
  );
}
