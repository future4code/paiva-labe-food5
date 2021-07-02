import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../../routes/coordinator'
import { IntroDisplay, LogoIntro } from './styled'
import logo1 from './../../assets/img/logo-future-eats@3x.png'

function Intro() {
    const history = useHistory()

    setTimeout(() =>{
        goToHome(history)
    }, 3000)

    return(
        <IntroDisplay>
            <LogoIntro src={logo1}/>
        </IntroDisplay>
    )
}

export default Intro