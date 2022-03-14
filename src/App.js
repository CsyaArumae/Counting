import React from "react";
import Navbar from "./components/navbar";
import Main from "./main";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
  }
}