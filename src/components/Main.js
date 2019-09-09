//IMPORTS=========================================================================================================================================================

import React, { Component } from "react";

//Child components
import Applications from "./Applications";
import Skills from "./Skills";
import Connect from "./Connect";
import AboutMe from "./AboutMe";

//STYLING=========================================================================================================================================================

//NAME, STATE, AND BINDING=========================================================================================================================================================

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalClicks: 0,
      subComponentVisibilityToggler: {
        Applications: true,
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
    let setObj = {};
    for (var i = 0; i < visKeys.length; i++) {
      let x = visKeys[i];
      if (x === componentName) {
        setObj[x] = true;
      } else {
        setObj[x] = false;
      }
    }
    this.setState({ subComponentVisibilityToggler: setObj });
    console.log(this.state.subComponentVisibilityToggler);
  }

  //RENDER=========================================================================================================================================================

  render() {
    return (
      <main>
        {/* Header ################################################################## */}
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand text-light">
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
                class="nav-item"
                onClick={() => this.toggleVisibilityForAll("Applications")}
              >
                <a class="nav-link">Applications</a>
              </li>
              <li
                class="nav-item"
                onClick={() => this.toggleVisibilityForAll("Skills")}
              >
                <a class="nav-link">Skills</a>
              </li>
              <li
                class="nav-item"
                onClick={() => this.toggleVisibilityForAll("Connect")}
              >
                <a class="nav-link">Connect</a>
              </li>
              <li
                class="nav-item"
                onClick={() => this.toggleVisibilityForAll("AboutMe")}
              >
                <a class="nav-link">About</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Content Section ################################################################## */}
        <section className="container p-3 mt-5">
          <Applications
            visibility={this.state.subComponentVisibilityToggler.Applications}
          ></Applications>
          <Skills
            visibility={this.state.subComponentVisibilityToggler.Skills}
          ></Skills>
          <Connect
            visibility={this.state.subComponentVisibilityToggler.Connect}
          ></Connect>
          <AboutMe
            visibility={this.state.subComponentVisibilityToggler.AboutMe}
          ></AboutMe>
        </section>
      </main>
    );
  }
}

//Export class AllEntriesList to be used by App.js
export default Main;
