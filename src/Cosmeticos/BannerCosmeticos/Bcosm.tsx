import "./Bcosm.css";

interface BcosmeticosProps {
  img: string;
}

function Bcosmeticos(props: BcosmeticosProps) {
  return (
    <section
      className="featured__cosmetico"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${props.img})`,
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

export default Bcosmeticos;
