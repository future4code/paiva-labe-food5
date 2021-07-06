import React, { useContext } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Footer from '../../components/Footer/Footer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ProductCard from '../../components/ProductCard/ProductCard'
import useProtectedPage from '../../hooks/useProtectedPage';
import GlobalStateContext from '../../global/GlobalStateContext';

export default function RadioButtonsGroup() {
    useProtectedPage()
    const [value, setValue] = React.useState('Dinheiro');
    const { cart, setCart } = useContext(GlobalStateContext);
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const listaDetalhe = cart && cart.map((opcoes) => {
        return (
            <ProductCard opcoes={opcoes}
            />
        )
    })

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <h1>CARRINHO</h1>
                </Toolbar>
            </AppBar>
                {(cart.length===0)?<p>Carrinho Vazio!</p> : listaDetalhe}
            <FormControl component="fieldset">
                <FormLabel component="legend">Forma de Pagamento</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="Dinheiro" control={<Radio />} label="Dinheiro" />
                    <FormControlLabel value="Cartão de Credito" control={<Radio />} label="Cartão de Crédito" />
                    <Button size="small" color="primary">
                        Confirmar
                    </Button>
                </RadioGroup>
            </FormControl>
            <Footer />

            
        </>

    );
}