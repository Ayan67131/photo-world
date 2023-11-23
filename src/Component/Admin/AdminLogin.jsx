import "../Login.css";
import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const url = "http://localhost:8080/login";
  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  function submit(e) {
    navigate("/admin");
    e.preventDefault();
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <MDBContainer className="my-5">
          <MDBCard>
            <MDBRow className="g-0">
              <MDBCol md="6">
                <MDBCardImage
                  src="https://images.unsplash.com/photo-1611963169787-ac9e3a65b27b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="login form"
                  className="rounded-start w-100"
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBCardBody className="d-flex flex-column">
                  <div className="d-flex flex-row mt-2">
                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: "#ff6219" }} />
                    <span className="h1 fw-bold mb-0">Login</span>
                  </div>

                  <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
                    Admin Login
                  </h5>

                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Email address"
                    id="userName"
                    type="email"
                    size="lg"
                    required
                    onChange={(e) => handle(e)}
                    value={data.userName}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Password"
                    id="password"
                    type="password"
                    required
                    size="lg"
                    onChange={(e) => handle(e)}
                    value={data.password}
                  />

                  <Button type="submit" className="btn btn-primary"> Login</Button>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </form>
    </div>
  );
};

export default Login;
