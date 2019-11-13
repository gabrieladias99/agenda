import React, { Component } from "react";
import "./OpusContact.css";
import { Link } from "react-router-dom";

class OpusContact extends Component {
  render() {
    return (
      <section className="opus-contact flex-direction-row width-12">
        <Link className="no-link flex-direction-column">
          <div className="flex-direction-row">
            <img className="user" src="/user.svg" />
            <p>{this.props.name}</p>
          </div>
        </Link>
        <div>
          <Link to={"/edit/" + this.props.id}>
            <img id="edit-button" src="/edit-24px.svg" />
          </Link>
        </div>
      </section>
    );
  }
}

export default OpusContact;
