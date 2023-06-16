import "./Mfeminina.css";
import BmodaFeminina from "./BModaFeminina/BMFeminina";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import BvoltaTop from "../VoltaInicio/BvoltaTopo";
import Footer from "../Footer/footer";
import Sep from "../Separador/Sep";
import { NavHeader } from "../Header/header";

interface CardFemininoProps {
   img: string;
  link?: string;
  title: string;
  description: string;
  stars?: number;
  hearts?: number;
  sales?: string; //número de vendas
  label?: string; //propriedade desconto
  className?: string; //Card especial p Destaque
  isSpecial?: boolean; //identificar o cartão especial
  style?: React.CSSProperties;
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
   const filledHearts = props.hearts ? Math.floor(props.hearts) : 0;
   const hearts = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      <FontAwesomeIcon
        icon={faHeart}
        color={i < filledHearts ? "#f00" : "#ddd"}
        size="1x"
        className="heart-animation"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    </span>
  ));
  /*Substring > contagem de palavras até 200 */
  let description = props.description;
    if (description.length > 150) {
      description = description.substring(0, 150) + "...";
}
  return (
    <div
      className={`card--master--Feminino ${props.isSpecial ? "special-card" : ""}`}
    >
      <div className="card__corpo__Feminino">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img
            src={props.img}
            className="card-imagem--Feminino"
            alt={props.title}
          />
        </a>
        <h2 className={`card__titulo__Feminino ${props.isSpecial ? "special-card" : ""}`}>
          {props.title}
        </h2>
        <p className={`card__descricao__Feminino ${props.isSpecial ? "special-card" : ""}`}>
          {description}
        </p>
      </div>

      <div className="card__stars__Feminino">
        <div className={`card__label__Feminino ${props.label ? "has-label" : ""}`}>
          <div className="label__content__Feminino">{props.label}</div>
        </div>
        {props.stars && <span>{stars}</span>}
        {props.hearts && <div className="card__hearts__Feminino">{hearts}</div>}
        {props.sales && <p>{props.sales}</p>}
      </div>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button className={`card__botao__Feminino ${props.isSpecial ? "special-card" : ""}`}>
              Adicionar ao carrinho
          </button>
        </a>
    </div>
  );
}

function BMFeminina() {
  return (
    <div className="grid--container--Feminino">
      <NavHeader />
      <BmodaFeminina />
      <Sep title="Roupas Femininas" />
      <div className="grid-container-Feminino">
        <div className="grid--item--Feminino item-1">
          <div className="wrapper__Feminino">
            <CardFeminino
              img="https://m.media-amazon.com/images/I/714onEOEW1L._AC_SR350,526_FMwebp_QL65_.jpg"
              title="Baked Cod with Vegetables"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics. Essa máscara de nutrição é ideal para cabelos ressecados e danificados, proporcionando suavidade, força e desembaraço. Perfeita para uso diário e após processos de coloração, a máscara vem em embalagens de 450g e possui um aroma delicioso. Encontre essa excelente opção de cuidados com os cabelos no site da Amazon. Aproveite essa oportunidade agora!"
              hearts={3}
              sales="+9431"
              label="-50%"
              isSpecial={true} // Cartão Especial
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://m.media-amazon.com/images/I/51eutIR62oL._AC_SR350,526_FMwebp_QL65_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={2}
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://m.media-amazon.com/images/I/61+L8l8iXbL._AC_SR350,526_FMwebp_QL65_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://m.media-amazon.com/images/I/61OAR0s1MVL._AC_SR350,526_FMwebp_QL65_.jpg"
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
              img="https://m.media-amazon.com/images/I/61BfvQ1w5KL._AC_SR350,526_FMwebp_QL65_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://m.media-amazon.com/images/I/61L8PFbZV5L._AC_SL1500_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://images-na.ssl-images-amazon.com/images/I/513EvPYTLDL._AC_SR308,462_.jpg"
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
