  
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./src/components/Nav"
import Search from "./pages/SearchBooks";
import Saved from "./pages/SavedBooks";
import Jumbotron from "./src/components/Jumbotron";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron />
          <Switch>
            {}
            <Route exact path="/" component={Search} />
            {}
            <Route exact path="/search" component={Search} />
            {}
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;