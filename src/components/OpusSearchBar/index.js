import React from "react";
import "./OpusSearchBar.css";

const OpusSearchBar = props => {
  return (
    <input className="opus-search-bar" placeholder={props.placeholder}></input>
  );
};

export default OpusSearchBar;
