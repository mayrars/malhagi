import React, { Component } from "react";
import Header from "./common/Header";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  }
}

export default App;
