import axios from "axios";

class Service {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    });
    this.service = service;
  }

  addContact(name, ddd, telephone) {
    return this.service
      .post("/add", {
        name,
        ddd,
        telephone
      })
      .then(response => response.data)
      .catch(err => console.log(err));
  }

  getOneContact(id) {
    console.log(id);
    return this.service
      .get(`/${id}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  }

  editContact(id, name, ddd, telephone) {
    return this.service
      .put(`/${id}`, {
        name,
        ddd,
        telephone
      })
      .then(response => response.data)
      .catch(err => console.log(err));
  }

  all() {
    return this.service
      .get("/all")
      .then(response => response.data)
      .catch(err => console.log(err));
  }

  delete(id) {
    return this.service
      .delete(`/${id}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  }
}

export default Service;
