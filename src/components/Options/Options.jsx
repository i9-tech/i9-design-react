import "./Options.css";
import { Link } from "react-router-dom";

export function Options({ atualizarCategoria }) {
  return (
    <>
      <span className="botoes">
        <nav className="botoes">
          <Link 
            to="/hovers" 
            onClick={() => atualizarCategoria("Hovers")}
          >
            Hovers
          </Link>
        </nav>
        <nav className="botoes">
          <Link 
            to="/botoes" 
            onClick={() => atualizarCategoria("Botões")}
          >
            Botões
          </Link>
        </nav>
        <nav className="botoes">
          <Link 
            to="/cards-e-modais" 
            onClick={() => atualizarCategoria("Modal/Cards")}
          >
            Modais/Cards
          </Link>
        </nav>
        <nav className="botoes">
          <Link 
            to="/listas" 
            onClick={() => atualizarCategoria("Listas")}
          >
            Listas
          </Link>
        </nav>
        <nav className="botoes">
          <Link 
            to="/menu" 
            onClick={() => atualizarCategoria("Menu")}
          >
            Menu
          </Link>
        </nav>
      </span>
    </>
  );
}
