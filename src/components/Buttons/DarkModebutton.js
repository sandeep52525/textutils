import React from "react";

export default function DarkModebutton(props) {
  return (
    <>
      <div>
        <button
          className={`btn btn-${
            props.mode === "light" ? "light" : "dark"
          } border my-1 mx-1`}
          onClick={props.toggleMode}
        >
          Enable {props.mode === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </>
  );
}
