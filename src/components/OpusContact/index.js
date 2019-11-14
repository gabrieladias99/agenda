import React from "react";
import "./OpusContact.css";
import { Link } from "react-router-dom";

const OpusContact = props => {
  return (
    <section className="opus-contact flex-direction-row width-12">
      <div className="flex-direction-column">
        <div className="flex-direction-row">
          <img className="user" src="/user.svg" alt="User Icon" />
          <p className="margin-10">{props.name}</p>
          <p>({props.ddd})</p>
          <p className="margin-10">{props.telephone}</p>
        </div>
      </div>
      <div>
        <Link to={"/edit/" + props.id}>
          <img id="edit-button" src="/edit-24px.svg" alt="Edit Icon" />
        </Link>
        <button className="no-border" onClick={props.onClick}>
          <img src="/delete-24px.svg" alt="Delete Icon" />
        </button>
      </div>
    </section>
  );
};

export default OpusContact;
