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
import { EditProfileApp, EditProfileDisplay } from "./styled";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  
  useEffect(() => {
    (async () => {
      const user = localStorage.getItem("user")
      const res = await axios.get(`${URL}/profile`, {
        headers:{
          Auth: user
        }
      });

      if (res.status) {
        setName(res.data.user.name);
        setEmail(res.data.user.email);
        setCpf(res.data.user.cpf);
      } else {
        alert(res.message);
      }
    })();
  }, []);

  useProtectedPage()
  

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeCpf = (event) => {
    setCpf(event.target.value);
  };

  const history = useHistory();
  
  const address = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    const body = {
      name: name,
      email: email,
      cpf: cpf,
    };
    axios
      .put(`${URL}/profile`, body, {
        headers: {
          auth: user,
        },
      })
      .then((res) => {
        console.log(res)
        goToProfile(history);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  

  return (
    <EditProfileApp>
      <Header name="Editar"/>
      <div>
        {name ? (
        <EditProfileDisplay onSubmit={address}>
          <TextField
            label="Nome"
            variant="outlined"
            name="name"
            type="text"
            onChange={onChangeName}
            value={name}
            required={true}
            placeholder="Nome Completo"
          />
          <TextField
            label="Número"
            variant="outlined"
            name="email"
            type="email"
            onChange={onChangeEmail}
            value={email}
            required={true}
            placeholder="Numero"
          />
          <TextField
            label="CPF"
            variant="outlined"
            name="cpf"
            type="text"
            onChange={onChangeCpf}
            value={cpf}
            required={true}
            placeholder="000.000.000-00"
          />
          <Button type="submit" color="primary" variant="contained" >Salvar</Button>
        </EditProfileDisplay>
        ):
        (<Loading/>)
        }
      </div>
    </EditProfileApp>
  );
};

export default EditProfile;
