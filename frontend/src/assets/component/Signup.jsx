import React from 'react'

const Signup = () => {
  return (


    <div className='signup-container'>
        <h1>Signup</h1>
        <form action="">
            <input className='login-input' type="text" placeholder='Username' /><br />
            <input className='Email' type="email" placeholder='Email' /><br />
            <input className='Password' type="password" placeholder='Password' /><br />
            <button type="submit">Signup</button>
        </form>
        <p>Already have an account? <a href="/login">Signup</a></p>
        <p>Forgot password? <a href="/forgot-password">Reset</a></p>
        <p>Go back to <a href="/">Home</a></p>
import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('Please fill in all fields');
    } else {
      // Call API to signup
      console.log('Signup successful');
    }
  };

  return (
    <div className='signup-container'>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='login-input'
          type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className='Email'
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className='Password'
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
      <p>Forgot password? <a href="/forgot-password">Reset</a></p>
      <p>Go back to <a href="/">Home</a></p>
    </div>
  );
};

export default Signup;
    </div>
  )
}

export default Signup