import Cosmeticos from "../Cosmeticos";
import CosmComPage1 from "../Paginacao/CosmComPage1";
import CosmComPage2 from "../Paginacao/CosmeticosPage2/CosmComPage2";
//import CosmComPage3 from "../Paginacao/CosmComPage3";

function Pagination() {
  return (
    <div>
      <Cosmeticos />
      <CosmComPage1 />
      <CosmComPage2 />
      {/*<CosmComPage3 />*/}
    </div>
  );
}

export default Pagination;
