import React, { useState } from 'react';
import Login from './components/Login';
import Jobs from './components/Jobs';

function App() {
  const [token, setToken] = useState('');

  return (
    <div>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <Jobs token={token} />
      )}
    </div>
  );
}

export default App;