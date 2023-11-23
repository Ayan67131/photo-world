import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const logout=(e)=>{
    document.getElementById('logout').style.display='none';
    sessionStorage.removeItem('email');
    navigate("/");
  }

  useEffect(()=>{
    if(sessionStorage.getItem('email')!=null){
      document.getElementById('navbarDropdownMenuLink').style.display='none';
      document.getElementById('logout').style.display='block';
    }
    else{
      document.getElementById('navbarDropdownMenuLink').style.display='block'
    }
  })
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="/">
        Photo World
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>

          <li class="nav-item active dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Login/Sign Up
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/login">
                login
              </a>
              <a class="dropdown-item" href="/signup">
                Sign Up
              </a>
              <a class="dropdown-item" href="/Adminlogin">
                Admin Login
              </a>
            </div>
          </li>

          <li class="nav-item active dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Menu
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Button type="button" class="btn btn-link" id="logout" onClick={(e)=>logout()}>
                Logout
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
