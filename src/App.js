import "./index.css";
import React, { Component } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "../node_modules/react-bootstrap/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import Tetris from "./components/Tetris"



class App extends Component {
  render() {
    return (
      <div className="background">
        <Navbar />
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home">
              <LandingPage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/play">
              <Tetris />
            </Route> 
          </Switch>
        </Router>
        
            <div>
            <Footer />
      </div>
      </div>
    );
  }
}

export default App;
