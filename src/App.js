import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Hooks, NoHooks } from "./components";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Hooks />
        <NoHooks />
      </React.Fragment>
    );
  }
}

export default App;
