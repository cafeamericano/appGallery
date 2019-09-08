//IMPORTS=========================================================================================================================================================

import React, { Component } from "react";

//Child components
import Fetcher from "./Fetcher";
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
        Applications: true,
        Skills: false,
        Connect: false,
        AboutMe: false
      }
    };
    this.tallyCumulativeClicks = this.tallyCumulativeClicks.bind(this);
    this.toggleVisibilityForAll = this.toggleVisibilityForAll.bind(this);
  }

  //LIFECYCLE METHODS=========================================================================================================================================================

  //SELF METHODS=========================================================================================================================================================

  //When tallyCumulativeClicks is called, do the following
  tallyCumulativeClicks() {
    const total = this.state.totalClicks;
    this.setState({ totalClicks: total + 1 });
  }

  toggleVisibilityForAll() {
    if (this.state.subComponentVisibilityToggler.AboutMe) {
      this.setState({
        subComponentVisibilityToggler: {
          AboutMe: false,
          Applications: false,
          Connect: false
        }
      });
    } else {
      this.setState({
        subComponentVisibilityToggler: {
          AboutMe: true,
          Applications: true,
          Connect: true
        }
      });
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
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Applications
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Connect
                </a>
              </li>
              <li class="nav-item" onClick={this.toggleVisibilityForAll}>
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Content Section ################################################################## */}
        <section className="container animated fadeInUpBig p-3">
          <div onClick={this.toggleVisibilityForAll} class="text-right mb-3">
            <i class="fas fa-eye-slash fa-2x"></i>
          </div>
          <div class="alert alert-secondary" role="alert">
            Total Clicks Across All Components: {this.state.totalClicks}
          </div>
          <Fetcher></Fetcher>
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
