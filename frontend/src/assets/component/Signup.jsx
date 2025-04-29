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

    </div>
  )
}

export default Signup