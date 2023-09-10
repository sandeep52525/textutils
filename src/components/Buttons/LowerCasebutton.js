import React from "react";

export default function LowerCasebutton(props) {
  const textareaCheck = () => {
    if (props.text === "") {
      props.showAlert("Please enter some text for modifications.", "warning");
    } else {
      if (props.text.toLowerCase() === props.text) {
        props.showAlert("Text is already in lowercase letters.", "warning");
      } else {
        handleLowClick();
        props.showAlert("Changed to lowercase letters.", "success");
      }
    }
  };
  const handleLowClick = () => {
    props.setText(props.text.toLowerCase());
  };
  return (
    <div>
      <button
        className={`btn btn-${props.mode} border my-1 mx-1`}
        onClick={textareaCheck}
      >
        Convert to LowerCase
      </button>
    </div>
  );
}
