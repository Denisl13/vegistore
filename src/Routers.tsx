import Home from "./Home/home";
import Game from "./Game/game";
import Casa from "./CasaDecoracao/Casa";
import Cosmeticos from "./Cosmeticos/Cosmeticos";
import Mfeminina from "./ModaFeminina/Mfeminina";
import CosmComPage1 from "./Cosmeticos/Paginacao/CosmComPage1";
import CosmComPage2 from "./Cosmeticos/Paginacao/CosmeticosPage2/CosmComPage2";
//import CosmComPage3 from "./Cosmeticos/Paginacao/CosmComPage3";
import PageNotFound from "./PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Routers() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casaedecoracao" element={<Casa />} />
        <Route path="/cosmeticos" element={<Cosmeticos />} />
        <Route path="/modafeminina" element={<Mfeminina />} />
        <Route path="/cosmeticos/pagination=1?" element={<CosmComPage1 />} />
        <Route path="/cosmeticos/pagination=2?" element={<CosmComPage2 />} />
        {/*<Route path="/cosmeticos/pagination=3?" element={<CosmComPage3 />} />*/}
        <Route path="/games" element={<Game />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
