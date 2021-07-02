import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import useProtectedPage from "../../hooks/useProtectedPage";
import { URL } from "../../parameters/url";
import { goToProfile } from "../../routes/coordinator";
import { EditAddressApp, EditAddressDisplay } from "./styled";

const EditAddress = () => {
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  
  useEffect(() => {
    (async () => {
      const user = localStorage.getItem("user")
      const res = await axios.get(`${URL}/profile/address`, {
        headers:{
          Auth: user
        }
      });

      if (res.status) {
        setStreet(res.data.address.street);
        setNumber(res.data.address.number);
        setComplement(res.data.address.complement);
        setCity(res.data.address.city);
        setNeighbourhood(res.data.address.neighbourhood);
        setState(res.data.address.state);
      } else {
        console.log(res.message);
      }
    })();
  }, []);

  useProtectedPage()
  

  const onChangeStreet = (event) => {
    setStreet(event.target.value);
  };

  const onChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  const onChangeComplement = (event) => {
    setComplement(event.target.value);
  };

  const onChangeCity = (event) => {
    setCity(event.target.value);
  };
  const onChangeNeighbourhood = (event) => {
    setNeighbourhood(event.target.value);
  };
  const onChangeState = (event) => {
    setState(event.target.value);
  };
  const history = useHistory();
  
  const address = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    const body = {
      street: street,
      number: number,
      neighbourhood: neighbourhood,
      city: city,
      state: state,
      complement: complement,
    };
    axios
      .put(`${URL}/address`, body, {
        headers: {
          auth: user,
        },
      })
      .then((res) => {
        console.log(res)
        goToProfile(history);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  

  return (
    <EditAddressApp>
      <Header name="Endereço"/>
      <div>
        {state ? (
        <EditAddressDisplay onSubmit={address}>
          <TextField
            label="Logradouro"
            variant="outlined"
            name="street"
            type="text"
            onChange={onChangeStreet}
            value={street}
            required={true}
            placeholder="Rua/Av."
          />
          <TextField
            label="Número"
            variant="outlined"
            name="number"
            type="text"
            onChange={onChangeNumber}
            value={number}
            required={true}
            placeholder="Numero"
          />
          <TextField
            label="Complemento"
            variant="outlined"
            name="complement"
            type="text"
            onChange={onChangeComplement}
            value={complement}
            required={false}
            placeholder="Apto./ Bloco"
          />
          <TextField
            label="Bairro"
            variant="outlined"
            name="neighbourhood"
            type="text"
            onChange={onChangeNeighbourhood}
            value={neighbourhood}
            required={true}
            placeholder="Bairro"
          />
          <TextField
            label="Cidade"
            variant="outlined"
            name="city"
            onChange={onChangeCity}
            value={city}
            required={true}
            type="text"
            placeholder="Cidade"
          />
          <TextField
            label="Estado"
            variant="outlined"
            name="state"
            type="text"
            onChange={onChangeState}
            value={state}
            required={true}
            placeholder="Estado"
          />
          <Button type="submit" color="primary" variant="contained" >Salvar</Button>
        </EditAddressDisplay>
        ):
        (<Loading/>)
        }
      </div>
    </EditAddressApp>
  );
};

export default EditAddress;
