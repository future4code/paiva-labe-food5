import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { URL } from "../../parameters/url";
import { useForm } from "../../hooks/useForm";
import { goToSignUp } from "../../routes/coordinator";
import TextField from '@material-ui/core/TextField';
import { IconButton, InputAdornment, FormControl } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Button } from "@material-ui/core";
import { AppLogin, FormDisplay } from "./styled";
import SubHeader from "../../components/SubHeader/SubHeader";
const initialForm = { email: "", password: "" };

export function Login() {
  const [form, handleValue, resetForm] = useForm(initialForm);
  const [showPassword, setShowPassword] = React.useState(false)
  const history = useHistory();


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const login = (e) => {
    e.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(`${URL}/login`, body)
      .then((res) => {
        localStorage.setItem("userAddress", res.data.user.hasAddress);
        localStorage.setItem("user", res.data.token);
        if (res.data.user.hasAddress) {
          history.push("/");
        } else {
          history.push("/signup/address");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <AppLogin>
      <div>
        <SubHeader/>
        <p>Entrar</p>
        <FormDisplay autoComplete="off" onSubmit={login}>
          <TextField
            variant="outlined"
            id="outlined-basic"
            label="Email"
            name="email"
            type="email"
            onChange={handleValue}
            value={form.email}
            placeholder="nome@email.com"
          />
          <FormControl
            variant="outlined"
            style={{ margin: "8px 0" }}
          >

            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput

              label="Senha"
              value={form.password}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Insira a sua Senha"
              onChange={handleValue}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <Button type="submit" color="primary" variant="contained" >Entrar</Button>
          <p>
            Não tenho conta{" "}
            <a href="/signup" onClick={() => goToSignUp}>
              cadastre-se aqui
            </a>
          </p>
        </FormDisplay>
      </div>
    </AppLogin>
  );
}

export default Login;
