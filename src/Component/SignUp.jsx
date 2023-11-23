import React, { useState } from "react";
import "./SignUp.css";
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
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

const SignUp = () => {
  const navigate = useNavigate();
  const url = "http://localhost:8080/user/add";
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      address: data.address,
      phone: data.phone,
      password: data.password,
    }).then((res) => {
      if (res.status === 200) {
        navigate("/login");
        alert("Registration Success");
      } else {
        console.log("Registration Failed");
      }
    });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  return (
    <div class="SignUp">
      <form onSubmit={(e)=>submit(e)}>
      <MDBContainer fluid className="bg-dark sign-up-box">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="my-4">
              <MDBRow className="g-0">
                <MDBCol md="6" className="d-none d-md-block">
                  <MDBCardImage
                    src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"
                    alt="Sample photo"
                    className="rounded-start"
                    fluid
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBCardBody className="text-black d-flex flex-column justify-content-center sign-up-card-body">
                    <h3 className="mb-5 text-uppercase fw-bold">Register User</h3>

                    <MDBInput value={data.name} wrapperClass="mb-4" placeholder="Name: " size="lg" id="name" type="text" onChange={(e)=>handle(e)}/>

                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Phone No: "
                      size="lg"
                      id="phone"
                      onChange={(e)=>handle(e)}
                      type="number"
                      value={data.phone}
                    />

                    <MDBInput wrapperClass="mb-4" value={data.email} placeholder="Email" size="lg" id="email" type="email" onChange={(e)=>handle(e)}/>

                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Address"
                      size="lg"
                      id="address"
                      type="text"
                      value={data.address}
                      onChange={(e)=>handle(e)}
                    />

                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Password"
                      size="lg"
                      id="password"
                      type="password"
                      value={data.password}
                      onChange={(e)=>handle(e)}
                    />

                    <div className="d-flex justify-content-end pt-3">
                      <Button className="btn btn-lg" type="submit">Register</Button>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </form>
    </div>
  );
};

export default SignUp;
