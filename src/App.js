import React from "react";
import "./App.css";
import { Hooks, NoHooks } from "./components";

export default function App(props) {
  return (
    <>
      <NoHooks />
      <Hooks />
    </>
  );
}
