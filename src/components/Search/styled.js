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
  width: 280px;
  padding: 16px 0 16px 0;
  border-radius: 2px;
  border: none;
`

export const SearchI = styled(SearchIcon)`
  margin: auto;
  width: 17.5px;
  height: 17.5px;
  color: #b8b8b8;
`

