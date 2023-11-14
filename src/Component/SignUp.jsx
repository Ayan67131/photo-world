import React from 'react'
import './SignUp.css'
const SignUp = () => {
  return (
    <div class="SignUp">
    <h1>Sign Up</h1>

    <div class="card">
      <div class="card-body">
        {/* form  */}

        <form>
          <div class="form-group">
            <label for="exampleInputName">Name</label>
            <input
              type="name"
              class="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Name"
            />
            <label for="exampleInputPhone">Phone Number</label>
            <input
              type="phone"
              class="form-control"
              id="exampleInputPhone"
              aria-describedby="phoneHelp"
              placeholder="Phone"
            />
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
            <label for="exampleInputAddress">Address</label>
            <input
              type="address"
              class="form-control"
              id="exampleInputAddress"
              aria-describedby="emailHelp"
              placeholder="Address"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
         
         
          <button type="submit" class="btn btn-primary btn-block">
            Sign Up
          </button>

          

        </form>
      </div>
    </div>
  </div>
  )
}

export default SignUp