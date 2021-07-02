import { LogoDisplay, LogoLogin } from "./styled";
import logo1 from './../../assets/img/logo-future-eats-invert@3x.png'

const SubHeader = ()=>{
    
    return(
        <LogoDisplay>
            <LogoLogin src={logo1}/>
        </LogoDisplay>
    )
}

export default SubHeader