

const Login = () => {
  return (
    
   <div className="login-container">
    <h1>Login</h1>
    <form className="flex" action="">
        <div class className = "user-name"><input type="text " placeholder='Username' /></div>
      
      <div><input type="password" placeholder='Password' /></div>
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <a href="/signup">Register</a></p>
    <p>Forgot password? <a href="/forgot-password">Reset</a></p>
    <p>Go back to <a href="/">Home</a></p>

   </div>
  )
}

export default Login