import styled from 'styled-components'

export const ContainerCard = styled.div`
  display:flex;
  flex: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 360px;
  height: 120px;
`

export const Card = styled.div`
  display: flex;
  width: 328px;
  height: 112px;
  margin: 7px 0 0;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`

export const CardImagem = styled.div`
  width: 170px;
  height: 112px;
  object-fit: contain;
  border-radius: 8px 0  0  8px;
  background-size:cover;
  background-position: center;
`

export const ContainerDados = styled.div`
  position: relative;
`


export const TituloProduto = styled.div`
  width: 167px;
  height: 18px;
  margin: 18px 49px 8px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`
export const DescricaoProduto = styled.div`
  width: 200px;
  margin: 8px 16px 4px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`

export const ContainerPreco = styled.div`
  width: 118px;
  height: 19px;
  margin: 4px 8px 15px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`

export const TextoPreco = styled.p `
  width: 48px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: #5cb646;
`

export const ContainerQuantidade = styled.div`
  display:flex;
  text-align: center;
  justify-items:center;
  position: absolute;
  top: -1px;
  right: -1px;
  width: 30px;
  height: 35px;
  margin: 0;
  padding: 0px 5px;
  border-radius: 0 8px ;
  border: solid 1px #5cb646;
`

export const TextoQtda = styled.p `
  width: 9px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  margin:auto;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`

export const Button = styled.button `
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 100px;
  height: 30px;
  margin: 7px 0 0 8px;
  padding: 5px 24px 8px 20px;
  border-radius: 8px 0;
  border: solid 1px #5cb646;
  margin:auto;
  color:#5cb646;
  background-color: transparent;
  cursor:pointer;
`

