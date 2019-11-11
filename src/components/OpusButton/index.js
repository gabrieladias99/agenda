import React from "react";
import "./OpusButton.css";
import { Link } from "react-router-dom";

const OpusButton = props => {
  return (
    <Link className={"button " + props.class} to={props.to}>
      {props.children}
    </Link>
  );
};

export default OpusButton;
