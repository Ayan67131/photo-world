import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div class="LoginPage">
      <h1>Sign In</h1>

      <div class="card">
        <div class="card-body">
          {/* form  */}

          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group"> 
              <label for="exampleInputPassword1">Not an User?</label>
              <a href="/signup" class="btn btn-link" role="button" aria-pressed="true">Click Here</a>
            </div>
           
            <button type="submit" class="btn btn-primary btn-block">
              Login
            </button>

            

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
