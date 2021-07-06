import React from 'react';
import { ContainerCard, Card, CardImagem, TituloProduto, DescricaoProduto, ContainerPreco, TextoPreco, ContainerQuantidade, TextoQtda, Button, ContainerDados } from './styled'

const ProductCard = (props) => {
    return (
        <ContainerCard>
            <Card >
                <CardImagem style={{ backgroundImage: 'url(' + props.opcoes.photoUrl + ')' }} />
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
                    {(props.opcoes.quantity) ? (<ContainerQuantidade>
                        <TextoQtda>{props.opcoes.quantity}</TextoQtda>
                    </ContainerQuantidade>) : (
                        <TextoQtda></TextoQtda>
                    )}
                    {(props.opcoes.quantity) ? (<Button onClick={() => props.addCart(props.opcoes)}>remover</Button>) : (<Button onClick={() => props.addCart(props.opcoes)}>adicionar</Button>)}
                </ContainerDados>
            </Card>
        </ContainerCard>
    )
}

export default ProductCard;