import React from 'react'
import FormRegister from './FormRegister'

const NewAcc = () => {
  return (
    <div>
        <FormRegister />
         <div className="email-address">
          <h4>Email Address *</h4>
          <input type="text" placeholder="Email Address"  />
          <p>Password reset instructions will be sent to your registered email address.

</p>
<div className="input-file">
<input type="file"  />
</div>
<p>Your virtual face or picture. <br />
One file only. <br />
8 MB limit. <br />
Allowed types: png gif jpg jpeg.</p>
<button>Create new account</button>
        </div>
    </div>
  )
}

export default NewAcc