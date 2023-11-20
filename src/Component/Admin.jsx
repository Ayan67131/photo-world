import React, { useEffect, useState } from "react";
import "./Admin.css";

const Admin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/user/all");
        const result = await response.json();
        setData(result); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Invoke the fetch function
  }, []); // The

  return (
    // jugar css
    <div className=" dashboard mt-4 pt-5 d-flex ">
      {/* // show details   */}
      <div className="UserDetails w-100  d-flex flex-column">
        <h1 className="pl-3 border-bottom">User Details</h1>

        <div>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th></th>

                {/* Add more table headers based on your data structure */}
              </tr>
            </thead>

            {data.map((item) => (
              <tr key={item.email}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>
                    {/* to delete and update  */}
                <a class="btn btn-outline-primary mr-3" href="#" role="button">Update</a>
                <a class="btn btn-outline-danger" href="#" role="button">Delete</a>
                </td>
                {/* Add more table cells based on your data structure */}
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
