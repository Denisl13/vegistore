import "./Mfeminina.css";
import BmodaFeminina from "./BModaFeminina/BMFeminina";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import BvoltaTop from "../VoltaInicio/BvoltaTopo";
import Footer from "../Footer/footer";
import Sep from "../Separador/Sep";
import { NavHeader } from "../Header/header";

interface CardFemininoProps {
  img: string;
  title: string;
  description: string;
  stars?: number; //stars
  sales?: string; //número de vendas
  label?: string; //propriedade desconto
  className?: string; //Card especial p Destaque
  isSpecial?: boolean; //identificar o cartão especial
}
function CardFeminino(props: CardFemininoProps) {
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
      className={`card--master--Feminino ${
        props.isSpecial ? "special-card" : ""}`}
    >
      <div className="card__corpo__Feminino">
        <img
          src={props.img}
          className="card-imagem--Feminino"
          alt={props.title}
        />
        <h2 className="card__titulo__Feminino">{props.title}</h2>
        <p className="card__descricao__Feminino">{props.description}</p>
      </div>
      <div className="card__stars__Feminino">
        <div
          className={`card__label__Feminino ${props.label ? "has-label" : ""}`}
        >
          <div className="label__content__Feminino">{props.label}</div>
        </div>
        <span>{props.stars && stars}</span>
        {props.sales && <p>{props.sales} vendidos</p>}
      </div>
      <button className="card__botao__Feminino">Saiba Mais...</button>
    </div>
  );
}

function BMFeminina() {
  return (
    <div className="grid--container--Feminino">
      <NavHeader />
      <BmodaFeminina />
      <Sep title="Moda Feminina" />
      <div className="grid-container-Feminino">
        <div className="grid--item--Feminino item-1">
          <div className="wrapper__Feminino">
            <CardFeminino
              img="https://images.unsplash.com/photo-1651489337165-f0f62bc3fc9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="+9431"
              label="-50%"
              isSpecial={true} // Cartão Especial
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://images.unsplash.com/photo-1634926692450-8c4ebd134c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={2}
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://images.unsplash.com/photo-1636576506547-583b77aea68a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://plus.unsplash.com/premium_photo-1672243273029-2006ea0e0c41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
      </div>
      <div className="grid-container-Feminino">
        <div className="grid--item--Feminino item1">
          <div className="wrapper__Feminino">
            <CardFeminino
              img="https://images.unsplash.com/photo-1552256028-71eb9a7ff27d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://images.unsplash.com/photo-1637171349105-dbdc3beeec87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://plus.unsplash.com/premium_photo-1673367751802-ed858d3950d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={1}
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://images.unsplash.com/photo-1639680774410-ced42af91b80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
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

export default BMFeminina;
