import React from "react";
import "./App.css";
import DemoBook from "./DemoBook";
import { BrowserRouter, Route } from "react-router-dom";
import { Kujunghousing, Daeryuk } from "pages";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Kujunghousing} />
        <Route path="/kujunghousing" component={Kujunghousing} />
        <Route path="/daeryuk" component={Daeryuk} />
      </BrowserRouter>
    );
  }
}

export default App;
