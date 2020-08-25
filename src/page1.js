import React from "react";
import { Link } from "react-router-dom";
const PageOne = (props) => {
  return (
    <div>
      <h3>PageOne</h3>
      <Link to="/pagetwo">PageTwo</Link>
      <button onClick={() => props.history.push("/pagetwo")}>To PageTwo</button>
    </div>
  );
};

export default PageOne;
