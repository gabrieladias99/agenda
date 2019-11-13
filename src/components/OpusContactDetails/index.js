import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import "./OpusContactDetails.css";
import OpusButton from "../OpusButton";
import OpusTitle from "../OpusTitle";

const OpusContactDetails = props => {
  const [nameState, setNameState] = useState(props.name);

  const handleChange = event => {
    const updateName = [...nameState];
    console.log(updateName);
    updateName[event.target.dataset.id][event.target.name] = event.target.value;
    setNameState(updateName);
  };

  return (
    <section className="opus-contact-details flex-direction-column align-text-center width-12">
      <div className="flex-direction-row width-12">
        <Link to={"/"}>
          <img id="edit-button" src="/arrow_back-24px.svg" />
        </Link>
        <OpusTitle>Editar Contato</OpusTitle>
        <Link to={"/"}>
          <img id="edit-button" src="/close-24px.svg" />
        </Link>
      </div>
      <input
        className="opus-input width-12"
        name="nameState"
        onChange={handleChange}
      ></input>
      <div className="flex-direction-row width-12">
        <input
          className="opus-input width-3"
          defaultValue={props.ddd}
          name="ddd"
          onChange={handleChange}
        ></input>
        <input
          className="opus-input width-9"
          defaultValue={props.telephone}
          name="telephone"
          onChange={handleChange}
        ></input>
      </div>
      <button class="long button"> OK </button>

      <> Apagar Contato </>
    </section>
  );
};

export default OpusContactDetails;
