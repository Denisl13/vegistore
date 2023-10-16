import "./Bcasa.css";
import { casaimages } from "./Slidercasa";
import React, { useState, useEffect } from "react";

function Bcasa() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % casaimages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = casaimages[currentImageIndex];

  return (
    <section
      className="featured__casa"
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
              + Saiba mais...
            </button>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bcasa;
