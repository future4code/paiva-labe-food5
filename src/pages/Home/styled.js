import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

export const ContainerInput = styled.div`
  display:flex;
  justify-content:center;
  justify-items: center;
  margin: 10px auto;
  width: 320px;
  border: solid 1px #b8b8b8;
`

export const Input = styled.input`
  width: 263px;
  padding: 16px 0 16px 0;
  border-radius: 2px;
  border: none;
  margin: auto;
`

export const SearchI = styled(SearchIcon)`
  margin: auto;
  width: 17.5px;
  height: 17.5px;
  color: #b8b8b8;
`

export const CardImagem = styled.div`
  object-fit: contain;
  border-radius: 8px  8px 0px 0  ;
  background-size: 70%, 100%;
  /* background-repeat: no-repeat; */
  background-position: center;
  width: 328px;
  height: 130px;
`
export const ContainerDados = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  justify-items: center;
  margin: 0px 24px;
`

export const ContainerTimeFrete = styled.div`
  display:flex;
  justify-content: space-between;
  color: #b8b8b8;
`


export const TituloProduto = styled.div`
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`

