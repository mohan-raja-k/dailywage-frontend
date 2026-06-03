import React, { useState } from 'react';
import axios from 'axios';

function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('https://dailywage-connect-production.up.railway.app/Auth/login', {
      userEmail: email,
      userPassword: password
    }).then(response => {
      setToken(response.data);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br/>
      <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;