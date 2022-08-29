import "./style.css";
import ButtonAdd from "../../Imgs/ButtonAdd.svg";

function ProductList({ products, itemProduct}) {
  const mapItem = (products) => {
    return (
      <li key={`item ${products.id}`} className="Li-Item" itemProduct={itemProduct}>
        <img src={products.img} Alt="Imagem Item" className="Img-Item"></img>
        <div className="Div-Information">
          <h3>{products.name}</h3>
          <span>{products.category}</span>
          <span className="Space-Span">{products.price}</span>
          <button 
          className="Button-Add"
          onClick={() => itemProduct(products)}
          >
            <img
              src={ButtonAdd}
              alt="Button para adicionar"
              className="Img-Add"
            ></img>
          </button>
        </div>
      </li>
    );
  };

  return (
    <>
      <ul className="Ul-Father" >
        {products?.map(mapItem)}</ul>
    </>
  );
}

export default ProductList;
