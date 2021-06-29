import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { URL } from '../../parameters/url'

const initialForm = {name:"", cpf:"", email: "", password:""}

export function Signup (){
    const [form, handleValue, resetForm] = useForm(initialForm)
    const history = useHistory()


    const singup = (e) =>{
        e.preventDefault()
        const body ={
            name: form.name,
            email: form.email,
            password: form.password,
            cpf: form.cpf
        }
        axios
            .post(`${URL}/signup`, body)
            .then((res) =>{
                localStorage.setItem("user" , JSON.stringify(res.data))
                history.push('/signup/address')
            })
            .catch((err) =>{
                console.log(err.response.data.message)

            })
    }

    return(
        <div>
            <h1> pagina de cadastro</h1>
            <div>
                <form onSubmit={singup}>
                <label>Nome</label>
                    <input
                        name="name"
                        type="text"
                        onChange={handleValue}
                        value={form.name}
                        required={true}
                        placeholder="Nome completo"
                        />
                    <label>CPF</label>
                    <input
                        name="cpf"
                        type="text"
                        onChange={handleValue}
                        value={form.cpf}
                        required={true}
                        placeholder="000.000.000-00"
                        />
                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        onChange={handleValue}
                        value={form.email}
                        required={true}
                        placeholder="email@provedor.com"
                        />
                    <label>Senha</label>
                    <input
                        name="password"
                        onChange={handleValue}
                        value={form.password}
                        required={true}
                        type="password"
                        />
                    <button>login</button>
                </form>
            </div>
        </div>
    )
}

export default Signup