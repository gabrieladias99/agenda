import React, { Component, Fragment } from "react";
import "./App.css";
import Main from "./pages/MainPage/";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" render={props => <Main {...props} />}></Route>s
        </Switch>
      </Fragment>
    );
  }
}

export default App;
