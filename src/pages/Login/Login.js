import axios from 'axios'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { URL } from '../../parameters/url'
import { useForm } from '../../hooks/useForm';
import { goToSignUp } from '../../routes/coordinator';

const initialForm = {email: "", password:""}

export function Login (){
    const [form, handleValue, resetForm] = useForm(initialForm)
    const history = useHistory()



    const login = (e) =>{
        e.preventDefault()
        const body ={
            email: form.email,
            password: form.password
        }
        axios
            .post(`${URL}/login`, body)
            .then((res) =>{
                localStorage.setItem("user" , JSON.stringify(res.data))
                if(res.data.user.hasAddress){
                    history.push('/')
                }else{
                    history.push('/signup/address')
                }
            })
            .catch((err) =>{
                console.log(err.message)
            })
    }


    return(
        <div>
            <h1> pagina de login</h1>
            <div>
                <form onSubmit={login}>
                <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        onChange={handleValue}
                        value={form.email}
                        required={true}
                        placeholder="nome@email.com"
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
                    <p>Não tenho conta <a href="/signup" onClick={()=> goToSignUp}>cadastre-se aqui</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login