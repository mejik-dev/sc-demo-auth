import * as React from "react";
import { Link } from "react-router-dom";

import { useRegister } from "../hooks/useRegister";

const Register = () => {
  const { handleRegister, setEmail, setFirstName, setLastName, setPassword } =
    useRegister();

  return (
    <div className="App">
      <div className="app-title">
        <h2>Register</h2> or
        <Link className="link" to="/Login">
          Login
        </Link>
      </div>
      <form onSubmit={handleRegister}>
        <div className="form">
          <label>First Name</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          <label>Last Name</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
          <label>Email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="sumbit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
