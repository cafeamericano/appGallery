import React, { Component } from "react";
import Main from "./components/Main.js";

var style = {
  ApplicationWide: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80)",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed",
    minHeight: "100%"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style.ApplicationWide}>
        <Main />
      </div>
    );
  }
}

export default App;
