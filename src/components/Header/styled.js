import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  top: 0;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #b8b8b8;
  background-color: #ffffff;
  & > button {
    position: absolute;
    top: 32%;
    left: 0;
  }
`;

export const MainContainer = styled.div`
display: flex;
justify-content: space-between;
width: 320px;
height: 40px;
align-items: center;
padding: 5px;
box-sizing: border-box;
border-top: 1px solid;
padding-top:8px;
position: fixed;
margin: 1px auto;
`


