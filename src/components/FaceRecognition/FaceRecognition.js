import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ box, imageURL }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img src={imageURL} alt="" id="inputimage" />
        {box.length
          ? box.map((item, i) => (
              <div
                className="bounding-box"
                key={i}
                style={{
                  top: item.topRow + "%",
                  left: item.leftCol + "%",
                  right: item.rightCol + "%",
                  bottom: item.bottomRow + "%"
                }}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default FaceRecognition;
