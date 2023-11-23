// HomePage.js

import React from "react";
import "./Home.css";
import PhotoGallery from "../Component/PhotoGallery";
import CardComponent from "../Component/CardComponent";
import Carousel from "../Component/Elements/Carousel";

class HomePage extends React.Component {
  handleButtonClick = () => {
    console.log("Button clicked!");
  };

  render() {
    return (
      <div className="HomePage">
        <Carousel />
        <br/><br/>
        <CardComponent />
      </div>
    );
  }
}

export default HomePage;
