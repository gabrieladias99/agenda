import React from "react";
import "./OpusContact.css";
import { Link } from "react-router-dom";

const OpusContact = props => {
  return (
    <Link>
      <section className="opus-contact">
        <p>{props.name}</p>
        <div>
          <img src="./edit-24px.svg" />
          <img src="./more_vert-24px.svg" />
        </div>
      </section>
    </Link>
  );
};

export default OpusContact;
