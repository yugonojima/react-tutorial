import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickResult: "",
      changeResult: "Hello",
      inputResult: "Hello",
      keyupResult: "Hello",
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ clickResult: "clicked" });
          }}
        >
          click
        </button>
        {this.state.clickResult}
        <br />
        <input
          onChange={(e) => {
            this.setState({ changeResult: e.target.value });

          }}
          value={this.state.changeResult}
        />
        {this.state.changeResult}
        <br />
        <input
          onInput={(e) => {
            this.setState({ inputResult: e.target.value });
          }}
          defaultValue={this.state.inputResult}
        />
        {this.state.inputResult}
        <br />
        <input
          onKeyUp={(e) => {
            this.setState({ keyupResult: e.target.value });
          }}
          defaultValue={this.state.keyupResult}
        />
        {this.state.keyupResult}
      </div>
    );
  }
}

export default Hello;
