import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CompetitionDetails = () => {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1699453223942-dfead4b64e24?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  const [contestDetail, setContestDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/contest/findOne?id=${id}`);
        setContestDetail(response.data); // Set the fetched data to the state
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Invoke the fetch function
  }, [id]); // Include 'id' in the dependency array to re-fetch when it changes

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div
        className="container"
        style={{ position: "relative", height: "40vh", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${contestDetail.coverPhotoUrl})`,
            backgroundSize: "cover",
            zIndex: -1, // Set a higher zIndex for the background
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            zIndex: 1, // Set a lower zIndex for the text
          }}
        >
          <p style={{ fontSize: "50px", fontWeight: "700" }}>{contestDetail.name}</p>
          <p style={{ fontFamily: "monospace", fontSize: "20px" }}>
            powered by <span>{contestDetail.sponsor}</span>
          </p>
        </div>
      </div>

      <div
        className=" d-flex bg-light "
        style={{
          width: "50vw",

          zIndex: 2, // Set an even lower zIndex for the additional div
          position: "absolute",
          top: "37vh", // Set the top position to be below the first div
          border: "1px solid black",
          borderRadius: "1%",
        }}
      >
        <div className="col-7 pt-3 border border-4">
          <div
            className="p-2 "
            style={{ height: "100%", fontFamily: "monospace", fontSize: "19px" }}
          >
            {/* Content for the 75% width div */}
            <p style={{ fontWeight: "500" }}>Brief</p>
            <p className="text-end" style={{ fontStyle: "oblique" }}>
              {contestDetail.brief}
            </p>
          </div>
        </div>

        {/* right panel   */}
        <div className="col-5 bl-1">
          <div className="d-flex flex-column " style={{ height: "100%", fontSize: "20px" }}>
            {/* Content for the 25% width div */}
            <div className="mb-2" style={{ paddingTop: "20px" }}>
              <strong> {contestDetail.remainingDays} days </strong> remaining{" "}
            </div>

            <div className="mb-2">
              <strong>{contestDetail.photoCount}</strong> photos
            </div>
            <div className="mb-2">
              <strong>{contestDetail.photographerCount}</strong> photographers{" "}
            </div>
            <div className="mb-2">
              Judged by <strong>{contestDetail.judge}</strong>
            </div>
            <div className="mb-2">
              Winner Announcement <strong>{contestDetail.winnerAnnouncementDate}</strong>
            </div>
            <button type="button" class="btn btn-outline-success">
              Submit Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionDetails;
