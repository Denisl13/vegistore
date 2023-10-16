import "./banner.css";
import { images } from "./SliderData";
import { useState, useEffect } from "react";

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Atualiza o índice da imagem a cada 5 segundos
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (currentIndex) => (currentIndex + 1) % images.length
      );
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  /*Substring > contagem de palavras até 200 */
  const currentImage = images[currentImageIndex];
  let description = currentImage.description;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${currentImage.image})`,
        transition: "background-image 0.5s ease",
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="conteudo__titulo__descricao">
            <div className="featured--name">{currentImage.title}</div>
            <div className="featured--description">{currentImage.description}</div>
            <div className="featured--buttons">
              <a
                href={currentImage.link}
                className="featured--button netflix-button">
                + Saiba mais...
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
