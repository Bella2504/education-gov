import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  background-color: #0052A5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  a {
    display: flex;
    align-items: center;
    color: white;
  }

  button {
    color: white;
    height: 30px;
    border: 1px solid white;
    padding: 0 10px;
  }

  h3 {
    color: white;
  }
`;
