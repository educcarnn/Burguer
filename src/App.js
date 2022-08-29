import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductsList";
import "../src/components/FiltersItems/style.css"
import Cart from "./components/Cart";
import FilterItems from "./components/FiltersItems";

function App() {
  const [products, setProducts] = useState([]);
  const [valueFilter, setValueFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  const itemProduct = (item) => {
    const findId = currentSale.find((param) => param.id === item.id);

    if (findId) {
      return null;
    } else {
      setCurrentSale([...currentSale, {...item}]);
    }
  };

  const handleRemove = (id) => {
    const listProducts = currentSale.filter((item) => item.id !== id);

    setCurrentSale(listProducts);
  };

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, [products]);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setFilteredProducts(response))
      .catch((err) => console.log(err));
  }, [filteredProducts]);

  return (
    <>
      <Header
        valueFilter={valueFilter}
        setValueFilter={setValueFilter}
      ></Header>
      {valueFilter !== "" ?
      (
        <>
         <span className="SpanSearch">Resultados para:</span>
        <span className="ItemSearch">{valueFilter}</span>
        </>
      ) : (null)}
  

      {valueFilter === "" ? (
        <ProductList
          itemProduct={itemProduct}
          products={products}
          setCurrentSale={setCurrentSale}
        ></ProductList>
      ) : (
        <div>
          <FilterItems
            filteredProducts={filteredProducts}
            itemProduct={itemProduct}
            setFilteredProducts={setFilteredProducts}
            valueFilter={valueFilter}
          ></FilterItems>
        </div>
      )}
      <Cart
        itemProduct={itemProduct}
        currentSale={currentSale}
        handleRemove={handleRemove}
        setCurrentSale={setCurrentSale}
      ></Cart>
    </>
  );
}

export default App;
