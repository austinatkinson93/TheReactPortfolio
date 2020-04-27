import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation"
import AboutMe from "./pages/AboutMe"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import "./App.css"

function App() {

  return (
    <Router>
      <div>
        <Navigation />
        <div className="mainBody">
          <Switch>
            <Route exact path="/">
              <Header />
              <AboutMe />
              <Projects />
              <div className="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
