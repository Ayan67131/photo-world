// HomePage.js

import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Home.css";
import PhotoGallery from "../Component/PhotoGallery";
import CardComponent from "../Component/CardComponent";

class HomePage extends React.Component {
  handleButtonClick = () => {
    console.log("Button clicked!");
  };

  render() {
    return (


      <div className="HomePage">
        
        <section className="about">
        <h1>A world of great photos and awards , in one place</h1>
        <br></br>
        <h2>Enter now to win great prizes and your work seen around the world</h2>
        </section>
        
        <section>
          <div className="competition-header">
            <h1>Competitons</h1>
          </div>

          {/* the card component need to utilize for loops to render many components */}
          <div className="card-container mt-5">
           <CardComponent />
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
