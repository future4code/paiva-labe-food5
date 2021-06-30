import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import { goToLastPage } from "../../routes/coordinator";


const ButtonBack = (props) => {
const history = useHistory();

return (
    <ArrowBackIosIcon
    onClick={() => goToLastPage(history)}
    />
)
}

export default ButtonBack;
