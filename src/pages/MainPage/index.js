import React, { Component, Fragment } from "react";
import "./main.css";
import OpusButton from "../../components/OpusButton";
import OpusTitle from "../../components/OpusTitle";
import OpusSearchBar from "../../components/OpusSearchBar";
import OpusContact from "../../components/OpusContact";
import OpusContactList from "../../components/OpusContactList";
import "./names.json";

let pessoas = ["Gabriela Dias", "Andrea Dias", "Guilherme"];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    };
  }

  componentDidMount() {
    this.setState({
      names: pessoas
    });
  }

  render() {
    return (
      <>
        <main>
          <div className="opus-header">
            <OpusTitle child="Contatos"></OpusTitle>
            <OpusButton children="+" class="circular"></OpusButton>
          </div>
          <OpusSearchBar placeholder="Pesquisar"></OpusSearchBar>
        </main>
        <OpusContactList>
          {this.state.names.map(name => {
            return <OpusContact name={name}></OpusContact>;
          })}
        </OpusContactList>
      </>
    );
  }
}
export default Main;
