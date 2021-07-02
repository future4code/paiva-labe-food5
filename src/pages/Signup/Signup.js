import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { URL } from '../../parameters/url'
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { IconButton, InputAdornment, FormControl } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Header from '../../components/Header/Header'
import { RegistrationDisplay } from './styled'
import SubHeader from '../../components/SubHeader/SubHeader'
const initialForm = { name: "", cpf: "", email: "", password: "" }

export function Signup() {
  const [form, handleValue, resetForm] = useForm(initialForm)
  const history = useHistory()
  const [showPassword, setShowPassword] = React.useState(false)
  const [doubleCheck, setDoubleCheck] = useState("")

  const confirm = (event) => {
    setDoubleCheck(event.target.value)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const checkError = () => {
    if (doubleCheck === form.password) {
      return false
    } else {
      return true
    }
  }


  const signUp = (e) => {
    if (doubleCheck === form.password) {
      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
        cpf: form.cpf
      }
      axios
        .post(`${URL}/signup`, body)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data.token))
          history.push('/signup/address')
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    } else {
      console.log("Senhas diferente da confirmação")
      setDoubleCheck("")
    }
  }


  const submitSignup = (e) => {
    e.preventDefault()
    signUp()
  }

  return (
    <div>
      <Header name=""/>
      <div>
        <SubHeader/>
        <p>Cadastrar</p>
        <RegistrationDisplay onSubmit={submitSignup}>
          <TextField
            label="Nome"
            variant="outlined"
            name="name"
            type="text"
            onChange={handleValue}
            value={form.name}
            required
            placeholder="Nome completo"
          />
          <TextField
            label="CPF"
            variant="outlined"
            name="cpf"
            type="text"
            onChange={handleValue}
            value={form.cpf}
            required
            inputProps={{ pattern: "[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" }}
            placeholder="000.000.000-00"
          />
          <TextField
            label="E-mail"
            variant="outlined"
            name="email"
            type="email"
            onChange={handleValue}
            value={form.email}
            required
            placeholder="email@email.com"
          />
          <FormControl
            variant="outlined"
            style={{ margin: "8px 0" }}
            required
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
          <FormControl
            variant="outlined"
            style={{ margin: "8px 0" }}
            required
          >

            <InputLabel htmlFor="outlined-adornment-password">Confirmar Senha</InputLabel>
            <OutlinedInput
              label="Confirme a senha"
              error={checkError()}
              value={doubleCheck}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Insira a sua Senha"
              onChange={confirm}
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
          <Button type="submit" color="primary" variant="contained" >Criar</Button>
        </RegistrationDisplay>
      </div>
    </div>
  )
}

export default Signup