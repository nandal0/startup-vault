import React from 'react'
import FormRegister from './FormRegister'
const ForgotPassword = () => {
  return (
    <div>
        <FormRegister />
        <div className="email-address">
          <h4>Email Address *</h4>
          <input type="text" placeholder="Email Address"  />
          <p>Password reset instructions will be sent to your registered email address.

</p>
<button>Submit</button>
        </div>
    </div>
  )
}

export default ForgotPassword