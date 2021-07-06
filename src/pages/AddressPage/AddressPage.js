import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useForm } from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import { URL } from "../../parameters/url";
import { goToHome } from "../../routes/coordinator";
import { AddressApp, AddressDisplay } from "./styled";

const AddressPage = () => {
  const initialForm = {
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  };

  useProtectedPage()
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
          auth: user,
        },
      })
      .then((res) => {
        localStorage.setItem("userAddress", res.data.user.hasAddress);
        console.log(res)
        goToHome(history);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  

  return (
    <AddressApp>
      <Header name=""/>
      <div>
        <p>Meu endereço</p>
        <AddressDisplay onSubmit={address}>
          <TextField
            label="Logradouro"
            variant="outlined"
            name="street"
            type="text"
            onChange={handleValue}
            value={form.street}
            required={true}
            placeholder="Rua/Av."
          />
          <TextField
            label="Número"
            variant="outlined"
            name="number"
            type="text"
            onChange={handleValue}
            value={form.number}
            required={true}
            placeholder="Numero"
          />
          <TextField
            label="Complemento"
            variant="outlined"
            name="complement"
            type="text"
            onChange={handleValue}
            value={form.complement}
            required={false}
            placeholder="Apto./ Bloco"
          />
          <TextField
            label="Bairro"
            variant="outlined"
            name="neighbourhood"
            type="text"
            onChange={handleValue}
            value={form.neighbourhood}
            required={true}
            placeholder="Bairro"
          />
          <TextField
            label="Cidade"
            variant="outlined"
            name="city"
            onChange={handleValue}
            value={form.city}
            required={true}
            type="text"
            placeholder="Cidade"
          />
          <TextField
            label="Estado"
            variant="outlined"
            name="state"
            type="text"
            onChange={handleValue}
            value={form.state}
            required={true}
            placeholder="Estado"
          />
          <Button type="submit" color="primary" variant="contained" >Salvar</Button>
        </AddressDisplay>
      </div>
    </AddressApp>
  );
};

export default AddressPage;
