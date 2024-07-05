import React, { useState } from "react";
import axios from "axios";

export default function GetPokemon() {
  const [pokemon, setPokemon] = useState("");
  const [poki, setPoki] = useState(null);

  async function handleSearch() {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      setPoki(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Digite o nome de um pokemon:</h1>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setPokemon(e.target.value);
          }}
        ></input>
        <button onClick={handleSearch}>Eu escolho você!</button>
      </div>
      {poki && (
        <div>
          <img src={poki.sprites.front_default} />
        </div>
      )}
    </div>
  );
}
