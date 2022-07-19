import * as React from "react";
import { Link } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const { handleLogin, setEmail, setPassword } = useLogin();

  return (
    <div className="App">
      <div className="app-title">
        <h2>Login</h2> or
        <Link className="link" to="/">
          Register
        </Link>
      </div>
      <form onSubmit={handleLogin}>
        <div className="form">
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

export default Login;
