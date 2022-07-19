import * as React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <h2>Welcome</h2>
      <p>You are now in home page!</p>
      <Link to="/">Back to register page</Link>
    </div>
  );
};

export default Home;
