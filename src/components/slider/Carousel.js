import React, { useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import "./carousel.css";
function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <div className="container">
      <div className="curousel_list">
        <div className="Main_portfolio">
          <div className="main_image">
            <div className="carousel">
              <ArrowCircleLeftIcon
                className="arrow arrow-left"
                onClick={prevSlide}
              />

              {data.map((item, index) => {
                return (
                  <>
                    <img
                      src={item.image}
                      alt={item.alt}
                      key={index.id}
                      className={
                        slide === index ? "slide" : "slide slide-hidden"
                      }
                    />
                  </>
                );
              })}
              <ArrowCircleRightIcon
                className="arrow arrow-right"
                onClick={nextSlide}
              />
            </div>
          </div>

          <div className="main_description">
            <div className="description">
              {data.map((item, index) => (
                <>
                  <div key={index.id} className="description_list">
                    <h4> {item.name}</h4>
                    <span>{item.description}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div>
          <span className="indicators">
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setSlide(index)}
                  className={
                    slide === index
                      ? "indicator"
                      : "indicator indicator-inactive"
                  }
                ></button>
              );
            })}
          </span>
        </div>
      </div>

      {/* <div className="description">
            {data.map((item, index) => (
              <>
                <div key={index.id} className="description_list">
                  <h4> {item.name}</h4>
                  <span>{item.description}</span>
                </div>
              </>
            ))}
          </div> */}
    </div>
  );
}

export default Carousel;
