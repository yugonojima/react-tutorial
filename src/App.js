import React from "react";
import Hello from "./hello";
import List from "./list";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React sites",
      url1: "https://reactjs.org/",
      url2: "https://material-ui.com/",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <ul>
          <li>
            <a href={this.state.url1}>React</a>
          </li>
          <li>
            <a href={this.state.url2}>Material-UI</a>
          </li>
        </ul>
        <Hello />
        <List />
      </div>
    );
  }
}

export default App;
