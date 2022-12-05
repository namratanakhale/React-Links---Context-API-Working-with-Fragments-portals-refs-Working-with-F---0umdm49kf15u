import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div id="home-div">
      <ul>
        <li>
        <Link to="/">Home</Link>
          {/* <h2 id="home-item">Home</h2> */}
        </li>
        <li>
        <Link to="/topics">Topics</Link>
          {/* <h2 id="topics-item">Topics</h2> */}
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Home;
