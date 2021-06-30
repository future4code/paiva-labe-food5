import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 44px;
  max-width: 320px;
  width: 100%;
  display: flex;
  top: 0;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #b8b8b8;
  background-color: #ffffff;
  margin: 0 auto;
  & > button {
    position: absolute;
    top: 32%;
    left: 0;
  }
`;
