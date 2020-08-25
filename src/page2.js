import React from "react";
import { Link } from "react-router-dom";

const PageTwo = (props) => {
  return (
    <div>
      <h3>PageTwo</h3>
      <Link to="/">
        <a type="button">pageone</a>
      </Link>
      <button
        onClick={() => {
          props.history.push("/");
        }}
      >
        To PageOne
      </button>
    </div>
  );
};

export default PageTwo;
