import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this)
    this.state = {
      todos: [
        { id: "1", text: "todo 1" },
        { id: "2", text: "todo 2" },
        { id: "3", text: "todo 3" },
      ],
    };
  }

  delete = (id) => {
    const newtodo = this.state.todos.filter((v) => {
      if (v.id !== id) {
        return v;
      }
    });
    this.setState({ todos: newtodo });
  };

  render() {
    return (
      <ul>
        {this.state.todos.map((v) => {
          return (
            <li key={v.id}>
              {v.text}
              <button onClick={() => this.delete(v.id)}>X</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
