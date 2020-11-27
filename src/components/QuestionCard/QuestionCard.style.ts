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
`;

type BottonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<BottonWrapperProps>`
  transition: all 0.5s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg,#49c381,#0e7d40)"
        : !correct && userClicked
        ? "linear-gradient(90deg,#9a6c6cad,#d06b6b)"
        : "linear-gradient(90deg,#b99d5d,#d2bbb0)"};
    border: 1.5px solid #4e311a;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #000;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
