import "./Bgame.css";
import { Gameimages } from "./SliderBgame";
import React, { useState, useEffect } from "react";

function Bgame() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Gameimages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = Gameimages[currentImageIndex];

  
  return (
    <section
      className="featured__game"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${currentImage.image})`,
        transition: "background-image 0.5s ease",
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--buttons">
            {/*<button className="featured--button netflix-button">
              + Saiba Mais...
            </button>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bgame;
