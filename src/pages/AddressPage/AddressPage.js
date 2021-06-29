import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { URL } from "../../parameters/url";
import { goToHome } from "../../routes/coordinator";

const initialForm = {
  street: "",
  number: "",
  neighbourhood: "",
  city: "",
  state: "",
  complement: "",
};
const AddressPage = () => {
  const [form, handleValue, resetForm] = useForm(initialForm);
  const history = useHistory();

  const address = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement,
    };
    axios
      .put(`${URL}/address`, body, {
        headers: {
          auth: user.token,
        },
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        goToHome(history);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <div>
      <h1> cadastro ou a edição de endereço</h1>
      <div>
        <form onSubmit={address}>
          <label>Logradouro</label>
          <input
            name="street"
            type="text"
            onChange={handleValue}
            value={form.street}
            required={true}
            placeholder="Rua/Av."
          />
          <label>Número</label>
          <input
            name="number"
            type="text"
            onChange={handleValue}
            value={form.number}
            required={true}
            placeholder="Numero"
          />
          <label>Complemento</label>
          <input
            name="complement"
            type="text"
            onChange={handleValue}
            value={form.complement}
            required={false}
            placeholder="Apto./ Bloco"
          />
          <label>Bairro</label>
          <input
            name="neighbourhood"
            type="text"
            onChange={handleValue}
            value={form.neighbourhood}
            required={true}
            placeholder="Bairro"
          />
          <label>Cidade</label>
          <input
            name="city"
            onChange={handleValue}
            value={form.city}
            required={true}
            type="text"
            placeholder="Cidade"
          />
          <label>Estado</label>
          <input
            name="state"
            type="text"
            onChange={handleValue}
            value={form.state}
            required={true}
            placeholder="Estado"
          />
          <button>Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default AddressPage;
