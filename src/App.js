import React from "react";
import Hello from "./hello";
import List from "./list";
import AddList from "./addList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addValueParent = this.addValueParent.bind(this);
    this.state = {
      title: "React sites",
      url1: "https://reactjs.org/",
      url2: "https://material-ui.com/",
      parentValue: 100,
    };
  }

  addValueParent(value) {
    const newValue = this.state.parentValue + value;
    this.setState({ parentValue: newValue });
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
        <AddList send={this.addValueParent} pvalue={this.state.parentValue} />
      </div>
    );
  }
}

export default App;
