
import "./style.css";
import ButtonAdd from "../../Imgs/ButtonAdd.svg";

function FilterItems({ filteredProducts, itemProduct, valueFilter }) {
  return (
    <>
      <ul className="Ul-Father">

        {filteredProducts.filter((searchValue) => {
            if (valueFilter === "") {
              return null;
            } else if (searchValue.category.toLowerCase().includes(valueFilter.toString().toLowerCase())) {
              return searchValue;
            }
            else{
              return false
            }
          }).map((filteredProducts) => (
            <li
              key={filteredProducts.id}
              className="Li-Item"
              itemProduct={itemProduct}
            >
              <img
                src={filteredProducts.img}
                Alt="Imagem Item"
                className="Img-Item"
              ></img>
              <div className="Div-Information">
                <h3>{filteredProducts.name}</h3>
                <span>{filteredProducts.category}</span>
                <span className="Space-Span">{filteredProducts.price}</span>
                <button
                  className="Button-Add"
                  onClick={() => itemProduct(filteredProducts)}
                >
                  <img
                    src={ButtonAdd}
                    alt="Button para adicionar"
                    className="Img-Add"
                  ></img>
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default FilterItems;
