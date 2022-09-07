import "./style.css";
import BurguerKenzie from "../../Imgs/BurguerKenzie.svg";


function Header({ setValueFilter }) {

  const filter = (event) => {
    setValueFilter(event.target.value)
  }

  return (
    <div>
      <div className="Header">
        <img src={BurguerKenzie} alt="Imagem Logo" className="Img-Logo"></img>
        <>
          <input placeholder="Pesquise o tipo do seu lanche" className="Input-Search" onChange={filter}></input>
        </>
      </div>
    </div>


  );
}

export default Header;
