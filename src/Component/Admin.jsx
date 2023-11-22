import React, { useEffect, useState } from "react";
import "./Admin.css";

const Admin = () => {
  const [userData, setUserData] = useState([]);
  const [contests, setContests] = useState([]);
  const [newContest, setNewContest] = useState({
    id: "", // You may need to generate a unique ID for each new contest
    name: "",
    date: "",
    banner_url: "",
    brief: "",
    cover_photo_url: "",
    end_date: "",
    judge: "",
    photo_count: 0,
    photographer_count: 0,
    remaining_days: 0,
    sponsor: "",
    steps: "",
    winner_announcement_date: "",
  });

  useEffect(() => {
    // Function to fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:8080/user/all");
        const result = await response.json();
        setUserData(result); // Set the fetched user data to the state
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Function to fetch contest data from the API
    const fetchContestData = async () => {
      try {
        const response = await fetch("http://localhost:8080/contest/all");
        const result = await response.json();
        setContests(result); // Set the fetched contest data to the state
      } catch (error) {
        console.error("Error fetching contest data:", error);
      }
    };

    fetchUserData(); // Invoke the fetch user data function
    fetchContestData(); // Invoke the fetch contest data function
  }, []); // The empty dependency array ensures that useEffect runs only once

  const handleNewContestChange = (e) => {
    const { name, value } = e.target;
    setNewContest({
      ...newContest,
      [name]: value,
    });
  };

  const handleAddContest = () => {
    // Add logic to send the new contest data to your backend API for storage
    console.log("Adding new contest:", newContest);
  };

  const handleDeleteContest = (contestId) => {
    // Add logic to send a request to delete the contest with the specified ID
    console.log("Deleting contest with ID:", contestId);
  };

  return (
    <div className="dashboard mt-4 pt-5 d-flex">
      <div className="UserDetails w-100 d-flex flex-column">
        <h1 className="pl-3 border-bottom">User Details</h1>
        <div>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            {userData.map((item) => (
              <tr key={item.email}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>
                  <a className="btn btn-outline-primary mr-3" href="#" role="button">
                    Update
                  </a>
                  <a
                    className="btn btn-outline-danger"
                    href="#"
                    role="button"
                    onClick={() => handleDeleteContest(item.id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </table>
        </div>

        <div className="mt-4">
          <h2 className="pl-3 border-bottom">Contest Details</h2>
          <form>
            <label htmlFor="name">Contest Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newContest.name}
              onChange={handleNewContestChange}
            />

            <label htmlFor="date">Contest Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={newContest.date}
              onChange={handleNewContestChange}
            />

            {/* Add more form fields for other contest details as needed */}
            <label htmlFor="banner_url">Banner URL:</label>
            <input
              type="text"
              id="banner_url"
              name="banner_url"
              value={newContest.banner_url}
              onChange={handleNewContestChange}
            />

            {/* Add more form fields for other contest details as needed */}

            <button type="button" onClick={handleAddContest}>
              Add Contest
            </button>
          </form>

          <table className="table table-dark table-hover mt-4">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                {/* Add more table headers for other contest details as needed */}
                <th>Action</th>
              </tr>
            </thead>
            {contests.map((contest) => (
              <tr key={contest.id}>
                <td>{contest.id}</td>
                <td>{contest.name}</td>
                <td>{contest.date}</td>
                {/* Add more table cells for other contest details as needed */}
                <td>
                  <a
                    className="btn btn-outline-danger"
                    href="#"
                    role="button"
                    onClick={() => handleDeleteContest(contest.id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
