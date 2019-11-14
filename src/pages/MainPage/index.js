import React, { Component } from "react";
import Service from "../../service";
import "./main.css";
import OpusButton from "../../components/OpusButton";
import OpusTitle from "../../components/OpusTitle";
import OpusSearchBar from "../../components/OpusSearchBar";
import OpusContact from "../../components/OpusContact";
import OpusContactList from "../../components/OpusContactList";
import OpusSafeArea from "../../components/OpusSafeArea";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.service = new Service();
    this.delete = this.delete.bind(this);
    this.getContacs = this.getContacs.bind(this);
  }

  componentDidMount() {
    this.getContacs();
  }
  getContacs() {
    this.service.all().then(response => {
      this.setState({
        contacts: [...response]
      });
    });
  }

  delete(id) {
    this.service.delete(id).then(this.getContacs);
  }

  render() {
    return (
      <OpusSafeArea>
        <header className="flex-direction-row">
          <OpusTitle> Contatos</OpusTitle>
          <OpusButton class="circular" to="/novocontato">
            <img id="add-button" src="./add.svg" alt="Add Icon" />
          </OpusButton>
        </header>
        <main>
          <OpusSearchBar placeholder="Pesquisar"></OpusSearchBar>

          <OpusContactList className="flex-direction-column">
            {this.state.contacts.map(contact => {
              return (
                <OpusContact
                  key={contact._id}
                  id={contact._id}
                  name={contact.name}
                  ddd={contact.ddd}
                  telephone={contact.telephone}
                  onClick={() => this.delete(contact._id)}
                ></OpusContact>
              );
            })}
          </OpusContactList>
        </main>
      </OpusSafeArea>
    );
  }
}
export default Main;
