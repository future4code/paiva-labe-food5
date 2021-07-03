import styled from 'styled-components';

export const ContainerRestaurant = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  justify-items: center;
  margin: auto;
  width: 360px;
`

export const CardImagem = styled.div`
  object-fit: contain;
  border-radius: 8px  8px 0px 0  ;
  background-size: 60%, 100%;
  /* background-repeat: no-repeat; */
  background-position: center;
  width: 328px;
  height: 120px;
  margin: 7px 24px;
`

export const ContainerDados = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  justify-items: center;
  margin: 0px 24px;
`


export const TituloProduto = styled.div`
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
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
  padding-top:5px;
`

export const ContainerTimeFrete = styled.div`
  display:flex;
  padding-top:5px;
  padding-right: 50px;
  justify-content: space-between;
`






