import React from "react";
import "../styles/button.scss"

export default function Button({ props }) {
  return (
    <div className="button-container">
      <button style={props.style} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
}
