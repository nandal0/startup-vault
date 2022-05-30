import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <div className="navgation-bar">
<div className="banner-register">
    <h3>SELL ON BAIZON</h3>

</div>
<div className="login-register">
    <div className="login-form">
        <div className="form-header">
          <h3>Log In</h3>
          <p>Enter your details below</p>
        </div>
        <div className="form-input">
          <input type="text"  placeholder="Enter your email id" />
          <input type="text"  placeholder="Enter your password" />

        <Link to='/form-register'>  <p>Forgot your password?</p></Link>
        </div>
        <div className="from-button">
          <button className="btn-login">Log In</button>
          <p>Or</p>
          <Link to='/new-account'>  <button className="btn-register">New?Register</button></Link>
        </div>
    </div>
</div>
        </div>
    </div>
  )
}

export default Register