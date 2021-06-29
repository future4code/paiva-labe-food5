import React from "react";
import ButtonBack from "./ButtonBack";
import { HeaderContainer, MainContainer } from "./styled";


export default function Header(props) {
    const renderButton = (name) => {
      if (
        //   passar os nomes por props nas páginas em que o header for importado
        name === "Busca" ||
        name === "Restaurante" ||
        name === "Editar" ||
        name === "Endereço" ||
        name === "Carrinho" ||
        name === "Cadastrar" ||
        name === ""
      )
        return <ButtonBack />;
    };
    return (
      <>
        <MainContainer>
          <HeaderContainer>
            {renderButton(props.name)}
            <p>{props.name}</p>
          </HeaderContainer>
        </MainContainer>
      </>
    );
  }
