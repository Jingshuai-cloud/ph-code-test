import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  max-width: 1100px;
  background: #f2f0ed;
  border-radius: 10px;
  border: 2px solid #5b4337;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 1rem;
  }

  .label {
    text-align: left;
    font-size: 20px;
    color: #777;
    display: block;
  }

  .input {
    margin: 10px 0px 20px 0px;
    border-radius: 4px;
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 14px;
  }
`;

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
