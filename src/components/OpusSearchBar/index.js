import React from "react";
import "./OpusSearchBar.css";

const OpusSearchBar = props => {
  return (
    <input
      className="opus-input width-12"
      placeholder={props.placeholder}
    ></input>
  );
};

export default OpusSearchBar;
