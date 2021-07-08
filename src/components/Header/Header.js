import React from "react";
import ButtonBack from "./ButtonBack";
import { HeaderStyle } from "./styled";

const pagesButtonBack = [
  "Busca",
  "Restaurante",
  "Editar",
  "Endereço",
  "Carrinho",
  "Cadastrar",
  "Perfil",
  ""
];

export default function Header(props) {
  const renderButton = (name) => {
    if (pagesButtonBack.includes(name))
      return <ButtonBack/>;
  };
  return (
    <>
      <HeaderStyle>
        {renderButton(props.name)}
        <p>{props.name}</p>
      </HeaderStyle>
    </>
  );
}
