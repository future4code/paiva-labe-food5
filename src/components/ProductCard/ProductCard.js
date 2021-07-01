import React from 'react';
import { ContainerCard, Card, CardImagem, TituloProduto, DescricaoProduto, ContainerPreco, TextoPreco, ContainerQuantidade, TextoQtda, Button , ContainerDados} from './styled'

const ProductCard = (props) => {

    return (
        <ContainerCard>
            <Card >
                <CardImagem  style={{backgroundImage: 'url(' + props.opcoes.photoUrl + ')'}} />
                <ContainerDados>
                    <TituloProduto>
                        <p>{props.opcoes.name}</p>
                    </TituloProduto>
                    <DescricaoProduto>
                        <p>{props.opcoes.description}</p>
                    </DescricaoProduto>
                    <ContainerPreco>
                        <TextoPreco>R${props.opcoes.price}</TextoPreco>
                    </ContainerPreco>
                    <ContainerQuantidade>
                       <TextoQtda>2</TextoQtda> 
                    </ContainerQuantidade>
                    <Button>adicionar</Button>
                </ContainerDados>
            </Card>
        </ContainerCard>
    )
}

export default ProductCard;