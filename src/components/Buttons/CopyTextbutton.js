import React from "react";

export default function CopyTextbutton(props) {
  const textareaCheck = () => {
    if (props.text === "") {
      props.showAlert("Please enter some text for copy.", "warning");
    } else {
      props.textid && handleCopyClick();
      props.showAlert("Text copied to clipboard.", "success");
    }
  };
  const handleCopyClick = () => {
    props.textid.select();
    navigator.clipboard.writeText(props.textid.value);
  };
  return (
    <div>
      <button
        className={`btn btn-${props.mode} border my-1 mx-1`}
        onClick={textareaCheck}
      >
        Copy Text
      </button>
    </div>
  );
}
