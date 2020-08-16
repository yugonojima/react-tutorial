import React from "react";

class AddList extends React.Component {
  addValueChild = () => {
    this.props.send(10);
  };
  render() {
    return (
      <div>
        {this.props.pvalue}
        <button onClick={this.addValueChild.bind(this)}>add</button>
      </div>
    );
  }
}

export default AddList;
