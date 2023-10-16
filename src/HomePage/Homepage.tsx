import "./Homepage.css";
import { useState } from "react";
import Sep from "../Separador/Sep";
import Footer from "../Footer/footer";
import BvoltaTop from "../VoltaInicio/BvoltaTopo";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HomePageProps {
  img: string;
  link?: string;
  title: string;
  description: string;
  stars?: number; //strelas
  hearts?: number; //coração    
  sales?: string;        //número de vendas
  label?: string;       //propriedade desconto
  className?: string;  //Card especial p Destaque
  isSpecial?: boolean;//identificar o cartão especial
  style?: React.CSSProperties;
  isFeatured?: boolean; //verdadeiro ou false
  highlightText?: string; //mais vendido
  customTitle?: string; //vichky
}
/* Inicio isFeatured------------------------------------------------------ */
function CardHomepage(props: HomePageProps) {
  const [showName, setShowName] = useState(false);

  const handleMouseEnter = () => {
    setShowName(true);
  };

  const handleMouseLeave = () => {
    setShowName(false);
  };/* Fim isFeatured------------------------------------------------------ */

  const filledStars = props.stars ? Math.floor(props.stars) : 0;
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      <FontAwesomeIcon
        icon={faStar}
        color={i < filledStars ? "#f99304" : "#ddd"}
        className="star-icon"
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
  if (description.length > 85) {
    description = description.substring(0, 85) + "...";
  }
   let title = props.title;
  if (title.length > 65) {
    title = title.substring(0, 65) + "...";
  }
return (
  <div className={`card--master--Homepage ${props.isSpecial ? "special-card" : ""}`}>
    <div
      className={`card__corpo__Homepage ${showName ? "show-name" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.isFeatured && ( /*É verdade ? sim então mostre (booleano (v)(f)*/
        <div className="featured-label">
          {props.highlightText} {/*mais vendido */}
          <div className={`label-name ${showName ? 'show-name' : ''}`}>
            {props.customTitle} {/*vichky */}
          </div>
        </div>
      )}
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img
          src={props.img}
          className={`card-imagem--Homepage ${props.isFeatured ? "featured-card" : ""}`}
          alt={props.title}
        />
      </a>
      <h2 className={`card__titulo__Homepage ${props.isSpecial ? "special-card" : ""}`}>
        {(title)}
      </h2>
      <div className="card__stars__Homepage">
        <div className={`card__label__Homepage ${props.label ? "has-label" : ""}`}>
          <div className="label__content__Homepage">{props.label}</div>
        </div>
        {props.stars && <span>{stars}</span>}
        {props.hearts && <div className="card__hearts__Homepage">{hearts}</div>}
        {props.sales && <p>{props.sales}</p>}
      </div>
      <p className={`card__descricao__Homepage ${props.isSpecial ? "special-card" : ""}`}>
        {(description)}
      </p>
    </div>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <button className={`card__botao__Homepage ${props.isSpecial ? "special-card" : ""}`}>
        Adicionar ao carrinho
      </button>
    </a>
  </div>
  );
}
/*
1-A medida que os textos aumentam, o componente "Card" também aumenta.
2-Para ter um total de quatro cards, é necessário adicionar mais um card ao container.
*/
function Homepage() {
  return (
    <div className="grid--container--Homepage">
      <Sep title="Casa e Decoração" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage">
          <div className="wrapper__Homepage">
              <CardHomepage
                img="https://m.media-amazon.com/images/I/917VnDov-fL._AC_SY450_.jpg"
                title="Pillow Top 100% Algodão 200 Fios Extra Macio Casa Dona (Casal)"
                description="Cobertura removível, 100 algodão, 40 x 75 x 40 cm; 2,8 Quilogramas, Maciez, Elasticidade, Conforto"
                hearts={5}
                sales="+3780"
                link="https://amzn.to/3JJlWvY"
                isFeatured={true}//Sem isso não funciona
                highlightText="Mais vendido"
                customTitle="Pillow Top"
              />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/71vJtkqhn+L._AC_SX522_.jpg"
              title="Mesa de Escritório em L Estilo Industrial 1,50mX1,50m Kuadra, Trevalla, Preto Ônix/Est.Preta"
              description="Mesa em L Kuadra Diretor 150X150X75cm Amadeirado / Est.Preta Marca reconhecida. Feito com materiais de qualidade, Fabricado com muito cuidado e atenção aos detalhes"
              stars={5}
              sales="+3780"
              label="Exclusivo Prime"
              link="https://amzn.to/3D1B04A"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/81ewIKfY0pL._AC_SX522_.jpg"
              title="Kit Casa Eficiente Positivo Casa Inteligente, mais economia para sua casa conectada, contém 4 itens, Bivolt – Compatível com Alexa"
              description="Fácil instalação, sem técnicos ou furos na parede: faça você mesmo a instalação do seu kit casa eficiente; basta baixar o app da positivo casa inteligente, conectar ao Wi-Fi, e pronto!
Crie regras e cenas: agende horários para ligar ou desligar seus aparelhos eletrônicos ou acender a iluminação da sua casa; crie cenas para deixar sua casa ainda mais inteligente"
              stars={4}
              sales="+1055"
              link="https://amzn.to/3NG8iuF"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/51Fc5p3Y3aL._AC_SX425_.jpg"
              title="Pingoo.Casa, Ducha Chuveiro Com Desviador, Quadrado, Aço Inox 304, 20Cm, Mundaú, Prata"
              description="DURABILIDADE: A ducha chuveiro com desviador Mundaú é fabricada em aço inoxidável 304, mede 20 cm x 20 cm e braço 40 cm. Possui acabamento triplo de alta resistência à corrosão, conservando suas características originais e beleza por mais tempo."
              stars={4}
              sales="+19"
              link="https://amzn.to/3NLTFX4"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/61DdUXwOvZL._AC_SX425_.jpg"
              title="Nofaner Caixas de armazenamento com tampas,22,5L,grandes,plástico,empilháveis,dobráveis,organizador de armazenamento de guarda-roupa para cozinha (verde escuro)"
              description="Duas formas de abertura: a caixa de armazenamento pode ser aberta de duas maneiras. Você pode abrir a tampa na parte superior ou abri-la pela porta da frente para levar suas coisas. O painel lateral frontal possui uma aba de puxar para facilitar a abertura e o fechamento. E a porta da frente tem fivelas de bloqueio automático integradas, garantindo que as portas não se abram sozinhas durante a mudança"
              stars={5}
               link="https://amzn.to/3pQ5Gm3"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/61h1yreLpmL._AC_SX522_.jpg"
              title="AUNMAS Cesto de armazenamento dobrável com tampa de 55L, caixa de armazenamento de recipiente de polipropileno de grande capacidade"
              description="[Grande capacidade de armazenamento] Quando desdobrado, medindo 48 x 35,5 x 28 cm (C x L x A), uma capacidade de 52 litros. Pode ser dobrado até 48 x 35,5 x 8,9 cm (C x L x A) quando não estiver em uso. Vem com 4 rodas destacáveis para facilitar o transporte."
              stars={5}              
              label="-34%"
               link="https://amzn.to/3NQdf4h"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/41wz9LdLgHL._AC_.jpg"
              title="Kit Organizador Cozinha 1 Grande 4 Médios Prateleiras DiCarlo"
              description="Kit Organizador 1 Prateleira Grande + 4 Prateleiras Médias,100% Aço
              Design único e exclusivo"
              stars={4}
               link="https://amzn.to/3JQz1n9"
            />
          </div>
        </div>
         <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/81ok5PDYF8L._AC_SY450_.jpg"
              title="Kit Organizador Cozinha 1 Grande 4 Médios Prateleiras DiCarlo"
              description="Caixas de armazenamento dobráveis Caixas de armazenamento de plástico Caixas de utilidades dobráveis empilháveis para roupas"
               link="https://amzn.to/44EdRkn"
            />
          </div>
        </div>
      </div>
      <Sep title="Beleza e Cuidados Pessoais" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage item-1">
          <div className="wrapper__Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/418SDTNP7xL._AC_SY450_.jpg"
              title="L'Oréal Professionnel Óleo 10 em 1 Absolut Repair | Multi-benefícios para cabelos secos e danificados | Repara e Promove Brilho | Com Gold Quinoa e Proteínas | 90ml"
              description="1 ação 10 benefícios: 1. Nutre o cabelo. 2. Retoma a fibra instantaneamente. 3. Deixa os cabelos com um toque leve 4. Deixa os fios mais macios. 5. Desembaraça o cabelo. 6. Condi…"
              stars={5}
              label="1°mais vendido"
              sales="+3275"
              link="https://amzn.to/3XChK70"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/71q1Fjs5SaL._AC_SX679_.jpg"
              title="L'Oréal Professionnel Máscara Capilar Absolut Repair | Tratamento Capilar Proteico Para Nutrição Profunda | Hidrata, Repara Danos e Acrescenta Brilho | Para Cabelos Secos e Danificados | 500g"
              description="Vantagens do Produto: 77% menos danos*; 7x mais brilho**; Toque leve e macio."
              sales="+750"
              stars={4}
              label="Oferta"
              link="https://amzn.to/3PFE6Th"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/51KoGFYvmPL._AC_SX679_.jpg"
              title="ESCOVA SECADORA SOFT BEC07R BIV"
              sales="+2699"
              description="Este produto possui uma chave seletora de tensão (127V ou 220V), ou seja, dependendo da tensão de rede na região do consumidor, a chave seletora deve estar corretamente selecionada, sendo para 127V ou para 220V."
              isFeatured={true}//Sem isso não funciona
              highlightText="Mais vendido"
              customTitle="Escova Rotativa"
              stars={5}
              link="https://amzn.to/43bBzDo"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/61DXeeH5kPL._AC_SX679_.jpg"
              title="Taiff Modelador Curves 25 mm, Bivolt automático2, Preto"
              description="Bivolt automático
Tecnologia cerâmica
Led indicador de ligado
Cabo 3 metros, produto bivolt
Diâmetro do tubo do modelador: 25 milímetros"
              stars={5}
              label="1°mais vendido"
              sales="+8.563"
              link="https://amzn.to/3pu24pZ"
            />
          </div>
        </div>
      </div>
      <Sep title="Roupas Femininas" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage item-1">
          <div className="wrapper__Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/61m4aVc0j3L._AC_SX522_.jpg"
              title="Calça legging, Max, Lupo, Feminino"
              description="Encare seus treinos e corridas de uma forma leve e descontraída com a Calça Legging Lupo Sport Max Core. Elaborada tecido sem costuras, possui um ajuste suave valorizando a silhueta feminina."
              isFeatured={true}//Sem isso não funciona
              highlightText="Mais vendido"
              customTitle="Leggings esportiva "
              stars={5}
              sales="+1247"
              link="https://amzn.to/3O2pWdM"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/61cGvpngpIL._AC_SX522_.jpg"
              title="Kit 10 Calcinhas Femininas Cós Alto - Compressão para Barriga Cintura Alta, Calcinha Modeladora, Forro 100% Algodão - VIÉRE"
              description="【DESIGN APROVADO POR ESPECIALISTAS】 Com seu design exclusivo, esta calcinha cumpre todas os quesitos para quem deseja um controle de barriga resistente com elasticidade suficiente."
              stars={5}
              sales="+1.073"
              link="https://amzn.to/3rfc4Um"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/41FRD2q2ELL._AC_SX522_.jpg"
              title="Kit 12 Calcinhas AF Biquini, Trifil, Feminino"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={5}
              sales="+3.046"
              link="https://amzn.to/43iH96N"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/61qyWJ6kMwL._AC_SY500_.jpg"
              title="NEYOUQE Camiseta feminina Color Block solta manga longa/curta casual confortável"
              description="Material: As túnicas são feitas de material macio e confortável. Estas camisetas combinam bem com jeans, calças, leggings jeans skinny."
              stars={4}
              sales="+7.254"
            />
          </div>
        </div>
      </div>
      <Sep title="Games e Consoles" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage item-1">
          <div className="wrapper__Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/51+qnZm7V7L._AC_SX679_.jpg"
              title="Console PlayStation 5"
              description="Na velocidade da luz Aproveite o carregamento extremamente rápido com o SSD de altíssima velocidade"
              isFeatured={true}//Sem isso não funciona
              highlightText="Mais vendido"
              customTitle="1°mais vendido"
              stars={5}
              label="Menor preço dos últimos 30 dias"
              sales="+645"
              link="https://amzn.to/44xbhfT"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/61eYoSqkHnL._AC_SX679_.jpg"
              title="Console Xbox Series X"
              description="Console Xbox mais rápido e poderoso de todos os tempos. Saiba Mais..."
              stars={5}
              label="-6%"
              sales="+3.412"
              link="https://amzn.to/44rileB"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/41dxVVHRNWL._AC_SX679_.jpg"
              title="Controle DualSense - Branco"
              description="Descubra uma profunda e imersiva experiência de jogo com o inovador DualSense"
              stars={3}
              label="Economize R$20 na sua compra "
              sales="+8.432"
              link="https://amzn.to/43clkGb"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/610Nmqcs1sL._AC_SX679_.jpg"
              title="Volante Logitech G29 Driving Force para PS5, PS4, PS3 e PC"
              description="Projetado para compatibilidade com PS5, PS4, PS3 e PC. Adicione o Driving Force ao seu controle e você nunca mais vai querer correr com outro controle normal novamente. O G29 Driving Force também funciona em PC e jogos compatíveis."
              stars={5}
              sales="+5.489"
              link="https://amzn.to/3D0a9pn"
            />
          </div>
        </div>
      </div>
      <Sep title="Recomendados" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage item-1">
          <div className="wrapper__Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/51fAmmSJcUL._AC_SX569_.jpg"
              title="Celular Xiaomi Redmi Note 12 128GB / 6GB RAM/Dual Sim/TelaP e 13MP - Onyx Gray - Preto"
              description="Carregador Padrão Brasileiro ou EUA, enviado conforme disponibilidade."
              stars={5}
              label="1°mais vendido"
              sales="+3.710"
               link="https://amzn.to/3pzpp9w"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/41sXy3GyjAL._AC_SX569_.jpg"
              title="Copo térmico de cerveja com tampa Stanley|473ml"
              description="Preserva o estilo aventureiro, mas sem abrir mão da descontração? Parabéns, porque fizemos este Copo Térmico de Cerveja Stanley pensando em você! Resistente, durável e atemporal, com preservação térmica de até 4,5 horas"
              stars={5}
              isFeatured={true}//Sem isso não funciona
              highlightText="Mais vendido"
              customTitle="Stanley"
              label="-32%"
              sales="+14.352"
               link="https://amzn.to/43eFLCq"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/51tqdlQSgqL._AC_SX569_.jpg"
              title="Xiaomi POCO X5 5G Smartphone Dual Sim 256GB Memory 8GB RAM 6.67 AMOLED Display 5000mAh 48MP+13MP CAM (preto)"
              description="-6,67 AMOLED FHD+ DotDisplay for Outstanding Visuals: POCO X5 5G apresenta um display elegante AMOLED de 120Hz, destacando-se da concorrência. Desfrute de visuais ricos e desempenho com melhor consumo de energia."
              stars={5}
              label="-9%"
              sales="+1.615"
               link="https://amzn.to/3XL3c5e"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/41Q7Tt+mK2L._AC_SY450_.jpg"
              title="PHILIPS Fone de ouvido sem fio TWS bluetooth com microfone e energia para 18 horas totais na cor preto, padrão, TAT1235BK/97 "
              description="Controle sensível ao toque responsivo e fácil de usar
              Estojo de carregamento compacto para até 18 horas de tempo de reprodução
              Emparelhamento inteligente. Encontre um dispositivo Bluetooth automaticamente
              BLUETOOTH: Bluetooth 5.1 que oferece total mobilidade para curtir tudo o que quiser
              Resposta em frequência: 20 - 20.000 Hz"
              stars={5}
              label="-19%"
              sales="+10.334"
               link="https://amzn.to/44tQZ75"
            />
          </div>
        </div>
      </div>
      <BvoltaTop />
      <Footer />
    </div>
  );
}

export default Homepage;
