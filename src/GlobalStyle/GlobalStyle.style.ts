import styled, { createGlobalStyle } from "styled-components";

import BGImage from "../images/coffee.jpg";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
  background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
}

* {
    box-sizing: border-box;
    font-family: sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
    font-size: larger;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    background-size: 100%;
    background-clip: text;
    font-size: 40px;
    font-weight: 400;
    text-align: center;
    margin: 50px;
  }

  .home-button {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #d2bbb0);
    border: 2px solid #5b4337;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    max-width: 200px;
  }
`;

export const CardWrapper = styled.div`
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
