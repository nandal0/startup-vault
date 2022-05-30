import React from 'react'
import {Link} from 'react-router-dom'
const FormRegister = () => {
  return (
    <div>
                <div className="navgationn-bar">
<div className="banner-registerr">
    <h3>SELL ON BAIZON</h3>
    <button>Home</button>

</div>
<div className="navbar-r">

    <Link to='/register'>  <button className="btn btn-default">Login</button></Link>
    <Link to='/new-account'>  <button className="btn btn-default">Create new account</button></Link>
    <Link to='/form-register' >  <button className="btn btn-default" >reset  your password</button></Link>
</div>
</div>
    </div>
  )
}

export default FormRegister