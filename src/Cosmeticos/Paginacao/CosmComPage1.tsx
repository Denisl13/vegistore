import { useEffect } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Footer from "../../Footer/footer";
import { Cosmeticoimages } from "../BannerCosmeticos/SliderCosmeticos";
import Bcosmeticos from "../BannerCosmeticos/Bcosm";
import { NavHeader } from "../../Header/header";
import "./CosmPage1.css";
import Sep from "../../Separador/Sep";
import BvoltaTop from "../../VoltaInicio/BvoltaTopo";

// Interface para as propriedades do CardCosmPag1
interface CardCosmPag1Props {
  img: string;
  link?: string;
  title: string;
  description: string;
  stars?: number;
  sales?: string; //número de vendas
  label?: string; //propriedade desconto
  className?: string; //Card especial p Destaque
  isSpecial?: boolean; //identificar o cartão especial
}

// Estrelas
function CardCosmPag1(props: CardCosmPag1Props) {
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
      className={`card--master--ccPage1 ${
        props.isSpecial ? "special-card" : ""
      }`}
    >
      <div className="card__corpo__ccPage1">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img
            src={props.img}
            className="card-imagem--ccPage1"
            alt={props.title}
          />
        </a>

        <h2
          className={`card__titulo__ccPage1 ${
            props.isSpecial ? "special-card" : ""
          }`}
        >
          {props.title}
        </h2>
        <p
          className={`card__descricao__ccPage1 ${
            props.isSpecial ? "special-card" : ""
          }`}
        >
          {props.description}
        </p>
      </div>

      <div className="card__stars__ccPage1">
        <div
          className={`card__label__ccPage1 ${props.label ? "has-label" : ""}`}
        >
          <div className="label__content__ccPage1">{props.label}</div>
        </div>
        <span>{props.stars && stars}</span>
        {props.sales && <p>{props.sales} vendidos</p>}
      </div>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <button className="card__botao__ccPage1">View Recipe</button>
      </a>
    </div>
  );
}
// ScrollTop pagination
function CosmComPage1() {
  useEffect(() => {
    const handlePaginationClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const paginationLinks = document.querySelectorAll(".pagination a");
    paginationLinks.forEach((link) => {
      link.addEventListener("click", handlePaginationClick);
    });

    return () => {
      paginationLinks.forEach((link) => {
        link.removeEventListener("click", handlePaginationClick);
      });
    };
  }, []);
  //Carrega imagens do Banner por indice
  const imageIndex = 3;
  const imageUrl = Cosmeticoimages[imageIndex].image;

  return (
    <div>
      <div id="topo"></div>
      <NavHeader />
      <Bcosmeticos img={imageUrl} />
      <Sep title="Ácido Hialurônico" />
      <div className="grid-container-Cosmeticos">
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://m.media-amazon.com/images/I/51xYDrHoHbL._AC_SX466_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="+5199"
              label="-50%"
              isSpecial={true} // Cartão Especial
              link="https://amzn.to/3N2jO4q"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://m.media-amazon.com/images/I/711OtVgfhYL._AC_SY450_.jpg"
              title="Máscara de Hidratação Lola Cosmetics Morte Súbita 450g"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics. Essa máscara de nutrição é ideal para cabelos ressecados e danificados, proporcionando suavidade, força e desembaraço. Perfeita para uso diário e após processos de coloração, a máscara vem em embalagens de 450g e possui um aroma delicioso. Encontre essa excelente opção de cuidados com os cabelos no site da Amazon. Aproveite essa oportunidade agora!"
              stars={5}
              sales="+/- 6524"
              label="-70%"
              link="https://www.amazon.com.br/M%C3%A1scara-Hidratante-S%C3%BAbita-Lola-Cosmetics/dp/B074LTNQBP/ref=sr_1_8?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=cosmeticos&refinements=p_72%3A17833786011&rnid=5560472011&sr=8-8"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://m.media-amazon.com/images/I/81Ve6gN5waL._AC_SX522_.jpg"
              title="Lola Cosmetics Vintage Girls - Creme Alisante 100g BLZ"
              description="result: Cabelos disciplinados, alinhados e com brilho intenso."
              stars={5}
              sales="+30589"
              link="https://www.amazon.com.br/Creme-Alinsante-Vintage-Lola-Cosmetics/dp/B074LTRGN8/ref=sr_1_5?content-id=amzn1.sym.d7485298-0974-44ea-a5e5-22d8956c1761%3Aamzn1.sym.d7485298-0974-44ea-a5e5-22d8956c1761&keywords=cosmeticos+em+promo%C3%A7%C3%A3o&sr=8-5"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="5248"
            />
          </div>
        </div>
      </div>
      {/*Final Bloco */}
      <Sep title="Estojo de Maquiagem" />
      <div className="grid-container-Cosmeticos">
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="+5199"
              label="-50%"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="+/- 6524"
              label="-70%"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="+30589"
              isSpecial={true} // Adicione a propriedade isSpecial como true para o cartão desejado
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="5248"
            />
          </div>
        </div>
      </div>
      {/*Final Bloco */}

      <div className="pagination">
        <Link to="/cosmeticos">&laquo;</Link>
        <Link to="/cosmeticos/pagination=1?" className="active">
          1
        </Link>
        <Link to="/cosmeticos/pagination=2?">2</Link>
        {/*<Link to="/cosmeticos/pagination=3?">3</Link>*/}
        <Link to="/cosmeticos">&raquo;</Link>
      </div>
      <BvoltaTop />
      <Footer />
    </div>
  );
}

export default CosmComPage1;