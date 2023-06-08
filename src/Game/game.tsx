import "./game.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavHeader } from "../Header/header";
import BvoltaTop from "../VoltaInicio/BvoltaTopo";
import Footer from "../Footer/footer";
import Bgame from "./Bgame/Bgame";
import Sep from "../Separador/Sep";

interface CardGameProps {
  img: string;
  title: string;
  description: string;
  stars?: number; //stars
  sales?: string; //número de vendas
  label?: string; //propriedade desconto
  className?: string; //Card especial p Destaque
  isSpecial?: boolean; //identificar o cartão especial
}
function CardGame(props: CardGameProps) {
  const filledStars = props.stars ? Math.floor(props.stars) : 0;
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      <FontAwesomeIcon
        icon={faStar}
        color={i < filledStars ? "#f99304" : "#ddd"}
        size="1x"
      />
    </span>
  ));
  return (
    <div
      className={`card--master--Game ${
        props.isSpecial ? "special-card" : ""}`}
    >
      <div className="card__corpo">
        <img
          src={props.img}
          className="card-imagem--Game"
          alt={props.title}
        />
        <h2 className="card__titulo__Game">{props.title}</h2>
        <p className="card__descricao__Game">{props.description}</p>
      </div>
      <div className="card__stars__Game">
        <div
          className={`card__label__Game ${props.label ? "has-label" : ""}`}
        >
          <div className="label__content__Game">{props.label}</div>
        </div>
        <span>{props.stars && stars}</span>
        {props.sales && <p>{props.sales} vendidos</p>}
      </div>
      <button className="card__botao__Game">Saiba Mais...</button>
    </div>
  );
}

function Game() {
  return (
    <div className="grid--container--Game">
      <NavHeader />
      <Bgame />
      <Sep title="Game" />
      <div className="grid-container-Game">
        <div className="grid--item--Game item-1">
          <div className="wrapper__Game">
            <CardGame
              img="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://media.kingston.com/kingston/articles/ktc-articles-blog-gaming-tips-choosing-gaming-laptop-md.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={2}
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
              sales="+7431"
              label="-50%"
              isSpecial={true} // Cartão Especial
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
      </div>
      <div className="grid-container-Game">
        <div className="grid--item--Game item1">
          <div className="wrapper__Game">
            <CardGame
              img="https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://images.unsplash.com/photo-1581351123004-757df051db8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://plus.unsplash.com/premium_photo-1668046107746-ffcc1ca3498b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={1}
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={4}
            />
          </div>
        </div>
      </div>
      <BvoltaTop />
      <Footer />
    </div>
  );
}

export default Game;
