import React, { useState } from "react";
import { Link } from "react-router-dom";
import Service from "../../service";
import OpusTitle from "../../components/OpusTitle";
import OpusSafeArea from "../../components/OpusSafeArea";

const OpusCreateContact = props => {
  const [values, setValues] = useState({ name: "", ddd: "", telephone: "" });
  const service = new Service();

  const handleFormSubmit = event => {
    event.preventDefault();
    const { name, ddd, telephone } = values;
    service
      .addContact(name, ddd, telephone)
      .then(response => {
        console.log(response);
        setValues({ name: "", ddd: "", telephone: "" });
      })
      .catch(e => console.log(e));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <OpusSafeArea>
      <section className="opus-contact-details flex-direction-column align-text-center width-12">
        <div className="flex-direction-row width-12">
          <Link to={"/"}>
            <img id="edit-button" src="/arrow_back-24px.svg" alt="Edit Icon" />
          </Link>
          <OpusTitle>Novo Contato</OpusTitle>

          <Link to={"/"}>
            <img id="edit-button" src="/close-24px.svg" alt="Edit Icon" />
          </Link>
        </div>
        <form onSubmit={handleFormSubmit}>
          <input
            className="opus-input width-12"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            placeholder="Nome Completo"
          ></input>
          <div className="flex-direction-row width-12">
            <input
              className="opus-input width-3"
              name="ddd"
              value={values.ddd}
              onChange={handleInputChange}
              placeholder="DDD"
            ></input>
            <input
              className="opus-input width-9"
              name="telephone"
              value={values.telephone}
              onChange={handleInputChange}
              placeholder="Celular"
            ></input>
          </div>
          <button type="submit" className="long button">
            OK
          </button>
        </form>
      </section>
    </OpusSafeArea>
  );
};

export default OpusCreateContact;
