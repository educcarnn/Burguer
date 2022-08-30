import "./style.css";
import BurguerKenzie from "../../Imgs/BurguerKenzie.svg";


function Header({setValueFilter}) {
  const filter = (event) => {
    setValueFilter(event.target.value)
  }

  return (
    <div className="Header">
      <img src={BurguerKenzie} alt="Imagem Logo" className="Img-Logo"></img>
     <>
     <input 
     placeholder="Digitar pesquisa"
     className="Input-Search"
     onChange={filter}
     >
      </input> 
      <button className="Button-Search">Pesquisar</button>
     </>

    </div>
  );
}

export default Header;
