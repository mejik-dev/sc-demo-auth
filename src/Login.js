import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './hooks/useLogin';

const Login = () => {
  const { login, error } = useLogin();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    login({
      email,
      password,
    });

    if (error) {
      alert('cant Login');
    }
    navigate('/home');
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-button">
          <button className="button button-primary" type="sumbit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
