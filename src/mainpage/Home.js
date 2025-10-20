import React from "react";
import ImageSlider from "./ImageSlider";
import GachaSection from "./GachaSection";

import "./Home.css";

const Home = ({ randomPreview, onGenerateRandomMenu }) => {
  return (
    <div>
      <ImageSlider />
      <div className="rp">
        <GachaSection
          randomPreview={randomPreview}
          onGenerateRandomMenu={onGenerateRandomMenu}
        />
      </div>
    </div>
  );
};

export default Home;
