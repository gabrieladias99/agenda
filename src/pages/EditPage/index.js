import React, { Component } from "react";
import OpusContactDetails from "../../components/OpusContactDetails";
import Service from "../../service";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ddd: 0,
      telephone: 0
    };
    this.service = new Service();
  }

  componentDidMount() {
    this.service.getOneContact(this.props.match.params.id).then(response => {
      this.setState({
        name: response[0].name,
        ddd: response[0].ddd,
        telephone: response[0].telephone
      });
    });
  }

  render() {
    return (
      <OpusContactDetails
        name={this.state.name}
        ddd={this.state.ddd}
        telephone={this.state.telephone}
      />
    );
  }
}
export default Edit;
