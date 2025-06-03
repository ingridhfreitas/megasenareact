import React from "react";
import { useState } from "react";
import "../App.css";

const Hookdamegasena = () => {
  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [listaDeSorteados, setListaDeSorteados] = useState([]);

  function sortearNumero() {
    if (listaDeSorteados.length >= 6) {
      alert("Já temos 6 números sorteados!");
      return; // Fix do bug
    }

    let sorteado = Math.floor(Math.random() * 60) + 1;
    setNumeroSorteado(sorteado);
    setListaDeSorteados([...listaDeSorteados, sorteado]);
  }

  return (
    <div className="sorteador-container">
      <h1>Sorteador da Mega Sena</h1>

      <div className="numero-atual">
        <p>
          Último sorteado:{" "}
          <span className="numero-destaque">{numeroSorteado || "---"}</span>
        </p>
      </div>

      <button className="btn-sortear" onClick={sortearNumero}>
        Sortear Número
      </button>

      <div className="lista-numeros">
        <p>Números sorteados ({listaDeSorteados.length}/6):</p>
        <p className="numeros-sorteados">
          {listaDeSorteados.length > 0
            ? listaDeSorteados.join(" - ")
            : "Nenhum número sorteado ainda"}
        </p>
      </div>
    </div>
  );
};

export default Hookdamegasena;
