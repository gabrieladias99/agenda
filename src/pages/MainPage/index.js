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
      contacts: [],
      show: false
    };
    this.service = new Service();
  }

  componentDidMount() {
    this.service.all().then(response => {
      console.log(response);
      this.setState({
        contacts: [...response]
      });
    });
  }

  render() {
    return (
      <OpusSafeArea>
        <header className="opus-header">
          <OpusTitle> Contatos</OpusTitle>
          <OpusButton class="circular" to="/new">
            <img id="add-button" src="./add.svg" />
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
