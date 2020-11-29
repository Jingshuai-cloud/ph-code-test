import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .Login,
  .Cancel {
    cursor: pointer;
    background: white;
    color: #000;
    height: 40px;
    margin: 20px 0;
    padding: 0 30px;
    border-radius: 10px;
  }

  .Login {
    background: #b99d5d;
  }
`;
