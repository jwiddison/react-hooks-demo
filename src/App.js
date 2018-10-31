import React from "react";
import "./App.css";
import { Hooks, NoHooks } from "./components";

export default function App(props) {
  return (
    <React.Fragment>
      <NoHooks />
      <Hooks />
    </React.Fragment>
  );
}
