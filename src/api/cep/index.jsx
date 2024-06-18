import React, { useState } from "react";
import axios from "axios";

export default function GetCep() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);

  async function handleAddress() {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Api busca CEP</h1>
      <input
        type="text"
        onChange={(e) => {
          setCep(e.target.value);
        }}
      />
      <button onClick={handleAddress}>Busque seu CEP!</button>
      {address && (
        <div>
          <p>Rua: {address.logradouro}</p>
          <p>Bairro: {address.bairro}</p>
          <p>Localidade: {address.localidade}</p>
          <p>DDD: {address.ddd}</p>
        </div>
      )}
    </div>
  );
}
