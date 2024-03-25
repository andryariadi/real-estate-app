import { useState } from "react";
import "./slider.scss";

export default function Slider({ images }) {
  const [imgIndex, setImgIndex] = useState(null);

  return (
    <>
      <div className="slider">
        {imgIndex !== null && (
          <div className="fullSlider">
            <div className="arrow">
              <img src="/arrow.png" alt="" />
            </div>
            <div className="imgContainer">
              <img src={images[imgIndex]} alt="" />
            </div>
            <div className="arrow">
              <img src="/arrow.png" alt="" className="rightArrow" />
            </div>
            <div className="close" onClick={() => setImgIndex(null)}>
              X
            </div>
          </div>
        )}
        <div className="bigImage">
          <img src={images[0]} alt="" onClick={() => setImgIndex(0)} />
        </div>
        <div className="smallImage">
          {images.slice(1).map((image, index) => (
            <img key={index} src={image} alt="" onClick={() => setImgIndex(index + 1)} />
          ))}
        </div>
      </div>
    </>
  );
}
