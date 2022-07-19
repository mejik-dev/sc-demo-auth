import * as React from 'react';
import { useLogout } from '../hooks/useLogout';

const Home = () => {
  const { handleLogout } = useLogout();

  return (
    <div className="App">
      <h2>Welcome</h2>
      <p>You are now in home page!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
