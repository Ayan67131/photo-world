import "./Login.css";
import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const url = "http://localhost:8080/login";
  const[data,setData] = useState({
    userName:"",
    password:""
  })

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      userName:data.userName,
      password:data.password
    })
    .then(res=>{
      if(res.data===true){
        console.log(res.data);
        navigate('/');
        alert("Login Success");
        sessionStorage.setItem('email',data.userName);
        document.getElementById('navbarDropdownMenuLink').style.display='none';
      }
      else{
        console.log("Username/Password Incorrect");
        alert("Username/Password Incorrect");
      }
    })
  }

  function handle(e){
    const newData={...data}
    newData[e.target.id] = e.target.value
    setData(newData)
  }
  return (
    <div>
      <section class="h-100 gradient-form">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        <img className="logo"
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        ></img>
                        <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                      </div>

                      <form onSubmit={(e)=>submit(e)}>
                        <p>Please login to your account</p>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="userName"
                            class="form-control"
                            onChange={(e)=>handle(e)}
                            value={data.userName}
                            placeholder="Email address"
                          />
                          <label class="form-label" for="form2Example11">
                            Username
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input type="password" 
                          id="password" 
                          onChange={(e)=>handle(e)}
                          value={data.password}
                          class="form-control" />
                          <label class="form-label" for="form2Example22">
                            Password
                          </label>
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1">
                          <button
                            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="submit"
                          >
                            Log in
                          </button>
                          <a class="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <button type="button" class="btn btn-outline-danger">
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">We are more than just a company</h4>
                      <p class="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
