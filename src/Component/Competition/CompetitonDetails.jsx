import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./CompetitionDetails.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { Alert, Button } from "react-bootstrap";

const CompetitionDetails = () => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleUploadModal = () => setBasicModal(!basicModal);
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1699453223942-dfead4b64e24?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  const [contestDetail, setContestDetail] = useState([]);
  const [imageDetail, setImageDetail] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const fetchImageData = async ()=>{
      try{
        const response = await axios.get(`http://localhost:8080/photo/find-one?id=${id}`);
        setImageDetail(response.data);
        console.log(response.data);
      }catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/contest/findOne?id=${id}`);
        setContestDetail(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    fetchImageData();
  }, [id]);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      const url =
        `http://localhost:8080/photo/upload?contestId=${id}&userId=` +
        sessionStorage.getItem("email");
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Photo uploaded successfully:", response.data);
      alert("Image Uploaded");
      toggleUploadModal();
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="30" xl="20">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <MDBCardImage
                  src={contestDetail.coverPhotoUrl}
                  alt="Contest Cover"
                  className="w-100 rounded-3"
                />
              </div>
              <br></br>

              <MDBCardBody className="text-black p-4">
                <MDBTypography tag="h5">{contestDetail.name}</MDBTypography>
                <MDBCardText>{contestDetail.sponsor}</MDBCardText>
                <div className="mb-5">
                  <p style={{ fontWeight: "500" }}>Brief</p>
                  <p className="text-end" style={{ fontStyle: "oblique" }}>
                    {contestDetail.brief}
                  </p>
                </div>
                <Button onClick={toggleUploadModal} className="btn btn-info btn-block">
                  Add Photo
                </Button>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                  <MDBCardText className="mb-0">
                    <a href="#!" className="text-muted">
                      Show all
                    </a>
                  </MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBModal open={basicModal} setopen={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Hi {sessionStorage.getItem("email")} Upload New Photo</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    onChange={handleFileChange}
                  />
                  <label className="custom-file-label" htmlFor="inputGroupFile01">
                    Choose file
                  </label>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <Button className="btn btn-danger" onClick={toggleUploadModal}>
                Close
              </Button>
              <Button onClick={handleUpload} className="btn btn-primary">
                Save changes
              </Button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default CompetitionDetails;
