import React, { useState } from "react";
import "./Slider.css";
import hand1 from "/images/hand1.jpg";
import hand2 from "/images/hand2.jpg";
import hand3 from "/images/hand3.jpg";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [hand1, hand2, hand3];
  const navigate = useNavigate();

  const slidesData = [
    {
      image: hand1,
      headline:
        "Welcome to Helping Hand! A place where we change the world! Our mission is to minimize the effort of people wanting to help and to maximise their impact!",
      buttonText: "Learn more!",
      action: "/about-us",
    },
    {
      image: hand2,
      headline: "Thinking about joining us? We would love to have you!",
      buttonText: "Join us",
      action: "/register",
    },
    {
      image: hand3,
      headline:
        "Our database consists of multiple exciting charities! From local to nationwide",
      buttonText: "Check out our charities!",
      action: "/charities",
    },
  ];
  const handleButtonClick = (action) => {
    navigate(action);
  };

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

  const getCaptionClass = (index) => {
    if (index === 0) return "carousel-caption-left";
    if (index === 1) return "carousel-caption-center";
    return "carousel-caption-right";
  };

  return (
    <div className="slider">
      <div
        id="carouselExampleControls"
        className="carousel slide h-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner h-100">
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item${
                currentImage === index ? " active" : ""
              } w-100 h-100`}
            >
              <img
                src={slide.image}
                className="d-block w-100 h-100"
                alt={`Slide ${index + 1}`}
              />
              <div
                className={`carousel-caption d-none d-md-block ${getCaptionClass(
                  index
                )}`}
              >
                <h4>{slide.headline}</h4>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleButtonClick(slide.action)}
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          onClick={handlePreviousImage}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          onClick={handleNextImage}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
