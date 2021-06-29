import React from 'react';
import Burger from '../../assets/img/95588246-1173-4513-89DA-A6107AFECF60.png';
import { ContainerCard, Card, Imagem, TituloProduto, DescricaoProduto, ContainerPreco, TextoPreco, ContainerQuantidade, TextoQtda, Button , Div} from './styled'

const ProductCard = () => {

    return (
        <ContainerCard>
            <Card>
                <Imagem src={Burger} />
                <Div>
                    <TituloProduto>
                        <p>Bullguer</p>
                    </TituloProduto>
                    <DescricaoProduto>
                        <p>Pão, carne, queijo, cebola roxa, tomate, alface e molho.</p>
                    </DescricaoProduto>
                    <ContainerPreco>
                        <TextoPreco>R$23,00</TextoPreco>
                    </ContainerPreco>
                    <ContainerQuantidade>
                       <TextoQtda>2</TextoQtda> 
                    </ContainerQuantidade>
                    <Button>adicionar</Button>
                </Div>

            </Card>
        </ContainerCard>
    )
}

export default ProductCard;