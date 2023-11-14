import React from 'react';
import { Carousel } from 'react-bootstrap';
import './PhotoGallery.css'; 

const PhotoGallery = () => {
  return (
    <Carousel className='concaved-carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/09/08/20/29/chess-2730034_1280.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='custom-caption'>
          <h3>Chess</h3>
          <p>This is the first slide's description.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Skull</h3>
          <p>This is the second slide's description.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fish</h3>
          <p>This is the third slide's description.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PhotoGallery;
