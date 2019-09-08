import React, { Component } from "react";
import Main from "./components/Main.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-light">
        <Main />
      </div>
    );
  }
}

export default App;
