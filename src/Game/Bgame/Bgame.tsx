import "./Bgame.css";

function Bgame() {
  return (
    <section
      className="featured__game"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/dfeb61af-3e68-4288-9480-74b6e75fde76._CR0%2C0%2C3000%2C600_SX1500_.png)`,
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
