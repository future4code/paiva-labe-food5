import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../../routes/coordinator'
import { IntroDisplay } from './styled'

function Intro() {
    const history = useHistory()

    setTimeout(() =>{
        goToHome(history)
    }, 3000)

    return(
        <IntroDisplay>
            <h1>LOGO FUTUREATS</h1>
        </IntroDisplay>
    )
}

export default Intro