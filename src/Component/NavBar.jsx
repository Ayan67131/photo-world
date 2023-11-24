import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBInputGroup,
} from "mdb-react-ui-kit";

const NavBar = () => {
  const [openBasic, setOpenBasic] = useState(false);
  const navigate = useNavigate();
  const logout = (e) => {
    document.getElementById('logout').style.display='none';
    sessionStorage.removeItem('email');
    navigate("/");
  };

  useEffect(() => {
    if (sessionStorage.getItem("email") != null) {
      document.getElementById('loginMenuLink').style.display='none';
      document.getElementById('logout').style.display='block';
    } else {
      document.getElementById('loginMenuLink').style.display='block'
    }
  });
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img
            src="../images/Photo.png"
            height="30"
            alt=""
            loading="lazy"
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem id="loginMenuLink">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Login
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href="/login">
                    User
                  </MDBDropdownItem>
                  <MDBDropdownItem link href="/AdminLogin">
                    Admin
                  </MDBDropdownItem>
                  <MDBDropdownItem link href="/signup">
                    Sign Up
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBBtn id = "logout" color="link" rippleColor="dark" onClick={(e)=>logout(e)}>
              Logout
            </MDBBtn>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;
