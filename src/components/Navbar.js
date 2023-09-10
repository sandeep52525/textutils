import React from "react";
import PropTypes from "prop-types";
import DarkModebutton from "./Buttons/DarkModebutton";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">
            {props.title}
          </span>
            <DarkModebutton mode={props.mode} toggleMode={props.toggleMode} />
          </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
