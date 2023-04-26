import React, { useState } from 'react';
import './Slider.css';
import hand1 from '/images/hand1.jpg';
import hand2 from '/images/hand2.jpg';
import hand3 from '/images/hand3.jpg';


const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [hand1, hand2, hand3];

  const handleNextImage = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="slider">
      <div className="carousel slide h-100">
        <div className="carousel-inner h-100">
          <div className="carousel-item active w-100 h-100">
            <img src={images[currentImage]} className="d-block w-100 h-100" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" onClick={handlePreviousImage}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNextImage}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Slider;