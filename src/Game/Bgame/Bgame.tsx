import "./Bgame.css";

function Bgame() {
  return (
    <section
      className="featured__game"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://images.pexels.com/photos/1346154/pexels-photo-1346154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
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
