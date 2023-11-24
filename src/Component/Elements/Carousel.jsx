import React from 'react';
import "./Carousel.css"
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

const Carousel=()=> {
  return (
    <MDBCarousel showControls interval={3000}>
      <MDBCarouselItem itemId={1} interval={1000} className='carousal-home-main'>
        <img src='https://img.freepik.com/free-photo/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds_181624-21317.jpg?w=1480&t=st=1700808812~exp=1700809412~hmac=3d8b33206619f6c2700c296311bb0efed45b1b5cc3988a67998c44d4b752f6af' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2} className='carousal-home-main'>
        <img src='https://img.freepik.com/free-photo/tranquil-scene-majestic-waterfall-forest-generated-by-ai_188544-32700.jpg?w=1800&t=st=1700808757~exp=1700809357~hmac=7616e4bb1676c2720e1fbccc2e7fd562b6483eb9a7018f335424936cbe2842a0' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default Carousel;