import "./style.css";

function Cart({ currentSale, handleRemove, setCurrentSale }) {
  const itemCart = (item) => {
    return (
      <li key={item.id} className="Li-Name">
        <img src={item.img} alt={item.category} className="Img-Name"></img>
        <h3 className="h3-name">{item.name}</h3>
        <span className="span-name">{item.category}</span>
          <button onClick={() => handleRemove(item.id)} className="button-item-name" >
            Remover
          </button>
      </li>
    );
  };

  const totalPrice = currentSale.reduce(
    (acumulador, item) => Number(acumulador) + Number(item.price),
    0
  );

  return (
    <div>
      {currentSale.length === 0 ? (
        <div>
          <div className="Div-Ul-Father">Carrinho de compras</div>
          <div className="Div-No-Action">
            <span className="Span-No-Action-First">Sua escola está vazia</span>
            <span className="Span-No-Action-Second">Adicione Itens</span>
          </div>
        </div>
      ) : (
        <div>
          <div className="Div-Ul-Father">Carrinho de compras</div>
          <ul className="Ul-Cart">{currentSale.map(itemCart)}</ul>
          <div className="Div-Action">
            <span className="Span-First-Action"> Total
              <span className="Span-Second-Action">
                R${totalPrice.toFixed(2)}
              </span>
            </span>
            <button onClick={() => setCurrentSale([])} className="Border-Action">
              Remover Todos
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
