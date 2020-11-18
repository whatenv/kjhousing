import React from "react";
import "./App.css";
import DemoBook from "./DemoBook";
import { BrowserRouter, Route } from "react-router-dom";
import { Kujunghousing, Daeryuk } from "pages";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          component={Kujunghousing}
        />
        <Route
          path={process.env.PUBLIC_URL + "/kujunghousing"}
          component={Kujunghousing}
        />
        <Route path={process.env.PUBLIC_URL + "/daeryuk"} component={Daeryuk} />
        <Route
          path={process.env.PUBLIC_URL + "/kjhousing"}
          component={Kujunghousing}
        />
      </BrowserRouter>
    );
  }
}

export default App;
