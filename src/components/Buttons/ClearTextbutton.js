import React from "react";

export default function ClearTextbutton(props) {
  const textareaCheck = () => {
    if (props.text === "") {
      props.showAlert("Textarea is already cleared.", "warning");
    } else {
      handleClearClick();
      props.showAlert("Textarea is cleared.", "success");
    }
  };
  const handleClearClick = () => {
    props.setText("");
  };
  return (
    <div>
      <button
        className={`btn btn-${props.mode} border my-1 mx-1`}
        onClick={textareaCheck}
      >
        Clear Text
      </button>
    </div>
  );
}
