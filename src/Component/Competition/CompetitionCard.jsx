import React, { useEffect, useState } from "react";
import "../CardComponent.css";
import { useNavigate } from "react-router-dom";
const CompetitionCard = () => {
  const [photoData, setphotoData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/contest/all");
        const result = await response.json();
        setphotoData(result); // Set the fetched data to the state
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Invoke the fetch function
  }, []); // The

  //this is the navigation logic
  const navigate = useNavigate();

  const handleEnterNowClick = (item) => {
    navigate(`/contest-details/${item.id}`);
  };

  return (
    <div className="row row-cols-4">
      {photoData.map((item) => (
        <div className="container comp-row">
          <div className="col">
          <div className="card" style={{ height: "40vh", width: "18rem" }}>
            <img src={item.coverPhotoUrl} class="card-img-top" alt="coverphoto url" />
            <div class="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">
                <div>{item.sponsor}</div>
              </p>
              <button class="btn btn-primary" onClick={() => handleEnterNowClick(item)}>
                Enter Now
              </button>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default CompetitionCard;
