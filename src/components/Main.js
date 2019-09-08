//IMPORTS=========================================================================================================================================================

import React, { Component } from "react";

//Child components
import AboutMe from "./AboutMe";
import Applications from "./Applications";
import Connect from "./Connect";

//STYLING=========================================================================================================================================================

//NAME, STATE, AND BINDING=========================================================================================================================================================

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalClicks: 0,
      subComponentVisibilityToggler: {
        Applications: false,
        Skills: false,
        Connect: false,
        AboutMe: false
      }
    };
    this.toggleVisibilityForAll = this.toggleVisibilityForAll.bind(this);
  }

  //LIFECYCLE METHODS=========================================================================================================================================================

  //SELF METHODS=========================================================================================================================================================

  //When tallyCumulativeClicks is called, do the following
  toggleVisibilityForAll(componentName) {
    let visKeys = Object.keys(this.state.subComponentVisibilityToggler);
    for (var i = 0; i < visKeys.length; i++) {
      if (visKeys[i] === componentName) {
        this.setState({
          subComponentVisibilityToggler: { [componentName]: true }
        });
      } else {
        let x = visKeys[i];
        this.setState({ subComponentVisibilityToggler: { [x]: false } });
      }
    }
  }

  //RENDER=========================================================================================================================================================

  render() {
    return (
      <main>
        {/* Header ################################################################## */}
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">
            <i className="fab fa-react"></i>
            <span> Portfolio</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li
                class="nav-item active"
                onClick={() => this.toggleVisibilityForAll("Applications")}
              >
                <a class="nav-link" href="#">
                  Applications
                </a>
              </li>
              <li
                class="nav-item"
                onClick={() => this.toggleVisibilityForAll("Skills")}
              >
                <a class="nav-link" href="#">
                  Skills
                </a>
              </li>
              <li
                class="nav-item"
                onClick={() => this.toggleVisibilityForAll("Connect")}
              >
                <a class="nav-link" href="#">
                  Connect
                </a>
              </li>
              <li
                class="nav-item"
                onClick={() => this.toggleVisibilityForAll("AboutMe")}
              >
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Content Section ################################################################## */}
        <section className="container animated fadeInUpBig p-3">
          <AboutMe
            visibility={this.state.subComponentVisibilityToggler.AboutMe}
            cumulativeClicker={this.tallyCumulativeClicks}
          ></AboutMe>
          <Applications
            visibility={this.state.subComponentVisibilityToggler.Applications}
            cumulativeClicker={this.tallyCumulativeClicks}
          ></Applications>
          <Connect
            visibility={this.state.subComponentVisibilityToggler.Connect}
            cumulativeClicker={this.tallyCumulativeClicks}
          ></Connect>
        </section>
      </main>
    );
  }
}

//Export class AllEntriesList to be used by App.js
export default Main;
