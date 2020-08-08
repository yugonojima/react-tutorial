import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: "1", text: "todo 1" },
        { id: "2", text: "todo 2" },
        { id: "3", text: "todo 3" },
      ],
    };
  }

  render() {
    return (
      <ul>
        {this.state.todos.map((v) => {
          return (
            <li key={v.id}>
              {v.text}
              <button>X</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
