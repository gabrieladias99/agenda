import React, { Component, Fragment } from "react";
import "./App.css";
import Main from "./pages/MainPage/";
import Edit from "./pages/EditPage/";
import Create from "./pages/CreatePage";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" render={props => <Main {...props} />}></Route>
          <Route
            exact
            path="/edit/:id"
            render={props => <Edit {...props} />}
          ></Route>
          <Route
            exact
            path="/new"
            render={props => <Create {...props} />}
          ></Route>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
