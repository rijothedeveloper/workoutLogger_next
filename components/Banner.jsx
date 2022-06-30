import React from "react";
import bannerImg from "../public/images/banner.png";
import fitnessIcon from "../public/images/fitnessIcon.png";
import healthIcon from "../public/images/healthIcon.png";
import nutritionIcon from "../public/images/nutritionIcon.png";
import fitnessTagImg from "../public/images/fitnessTag.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="bannerContent">
        <div className="bannerDetails">
          <h4>Welcome to Workout Logger</h4>
          <h1>Workout plan</h1>
          <h1>Builder</h1>
          <div className="banner-icons">
            <img src="/images/fitnessIcon.png" alt="fitness icon" />
            <h4>FITNESS</h4>
            <img src="/images/healthIcon.png" alt="fitness icon" />
            <h4>HEALTH</h4>
            <img src="/images/nutritionIcon.png" alt="fitness icon" />
            <h4>NUTRITION</h4>
          </div>
          <h4>FOR FREE GYM & FITNESS PROGRAM</h4>
          <button>Click Here</button>
        </div>
        <div className="bannerImg">
          <img src="/images/banner.png" alt="banner burned man" />
        </div>
      </div>
      <div className="bannerTag">
        <img src="/images/fitnessTag.png" alt="fitness tags" />
      </div>
    </div>
  );
};

export default Banner;
