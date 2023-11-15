import React, { useState } from 'react'
import './SignUp.css'
import Axios from 'axios'
const SignUp = () => {
  const url = "http://localhost:8080/user/add";
  const[data,setData] = useState({
    name:"",
    email:"",
    address:"",
    phone:""
  })

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      name:data.name,
      email:data.email,
      address:data.address,
      phone:data.phone
    })
    .then(res=>{
      console.log(res.data)
    })
  }

  function handle(e){
    const newData={...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }
  return (
    <div class="SignUp">
    <h1>Sign Up</h1>

    <div class="card">
      <div class="card-body">
        {/* form  */}

        <form onSubmit={(e)=>submit(e)}>
          <div class="form-group">
            <label for="exampleInputName">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Name"
              onChange={(e)=>handle(e)}
              value={data.name}
            />
            <label for="exampleInputPhone">Phone Number</label>
            <input
              type="number"
              class="form-control"
              id="phone"
              aria-describedby="phoneHelp"
              placeholder="Phone"
              onChange={(e)=>handle(e)}
              value={data.phone}
            />
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email"
              onChange={(e)=>handle(e)}
              value={data.email}
            />
            <label for="exampleInputAddress">Address</label>
            <input
              type="textarea"
              row="4"
              cols="50"
              class="form-control"
              id="address"
              aria-describedby="emailHelp"
              placeholder="Address"
              onChange={(e)=>handle(e)}
              value={data.address}
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