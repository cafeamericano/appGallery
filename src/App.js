import React, { Component } from "react";
import Main from "./components/Main.js";

var bg = {
  lake:
    "https://images.unsplash.com/photo-1568526490031-3464142e6e9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",
  desk:
    "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",
  orangeTin:
    "https://images.unsplash.com/photo-1534877505613-a00fd6ed83b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",
  cameras:
    "https://images.unsplash.com/photo-1566864222010-d45675442c31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",
  raindrops:
    "https://images.unsplash.com/photo-1537315778366-d1ac8f8876a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",
  lamp:
    "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",
  lake2:
    "https://images.unsplash.com/photo-1566746846724-1ee5a2dc0091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",
  plant:
    "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",
  waterGrass:
    "https://images.unsplash.com/photo-1566155119454-2b581dd44c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",
  waterLeaf:
    "https://images.unsplash.com/photo-1546526474-8bfb84574027?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80"
};

var style = {
  ApplicationWide: {
    backgroundImage: `url(${bg.desk})`,
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
