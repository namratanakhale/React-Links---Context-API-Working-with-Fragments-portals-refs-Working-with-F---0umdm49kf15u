import React from "react";
import { Link } from "react-router-dom";

const ComponentsTopic = () => {
  return (
    <div id="components-div">
      <h3>Components in React</h3>
      <button id="components-back-button"><Link to = "/topics">Back</Link>
      
      </button>
    </div>
  );
};

export default ComponentsTopic;
