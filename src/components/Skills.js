import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visibility,
      content: {
        languages: ["HTML", "CSS", "JavaScript", "SQL", "JSON"],
        frameworks: [
          "NodeJS",
          "ExpressJS",
          "ReactJS",
          "jQuery",
          "Bootstrap",
          "Materialize"
        ],
        databases: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
        toolsAndTechs: [
          "Git",
          "Handlebars",
          "EJS",
          "Cookies",
          "Local Storage",
          "Session Storage",
          "Firebase Authentication",
          "Heroku",
          "Visual Studio Code",
          "Atom",
          "Photoshop",
          "Lightroom"
        ]
      }
    };
  }

  componentDidUpdate() {
    //Allows state to change when prop is updated by parent
    let x = this.props.visibility;
    if (x !== this.state.visible) {
      this.setState({ visible: x });
    }
  }

  drawCards = argObj => (
    <div className="col-xl-4 col-md-6">
      {argObj}
    </div>
  );

  render() {
    if (this.state.visible) {
      var languages = this.state.content.languages;
      var frameworks = this.state.content.frameworks;
      var databases = this.state.content.databases;
      var toolsAndTechs = this.state.content.toolsAndTechs;
      return (
        /////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
        <section class="animated fadeInUpBig">
          <subsection className="card mb-4">
            <div className="card-header text-left">
              <h5>Languages</h5>
            </div>
            <div className="card-body">
              <div className="row">{languages.map(this.drawCards)}</div>
            </div>
          </subsection>
          <subsection className="card mb-4">
            <div className="card-header text-left">
              <h5>Frameworks</h5>
            </div>
            <div className="card-body">
              <div className="row">{frameworks.map(this.drawCards)}</div>
            </div>
          </subsection>
          <subsection className="card mb-4">
            <div className="card-header text-left">
              <h5>Databases</h5>
            </div>
            <div className="card-body">
              <div className="row">{databases.map(this.drawCards)}</div>
            </div>
          </subsection>
          <subsection className="card mb-4">
            <div className="card-header text-left">
              <h5>Tools and Technologies</h5>
            </div>
            <div className="card-body">
              <div className="row">{toolsAndTechs.map(this.drawCards)}</div>
            </div>
          </subsection>
        </section>
        /////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////
      );
    } else {
      return null;
    }
  }
}

export default Skills;
