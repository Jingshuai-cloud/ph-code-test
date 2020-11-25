import styled, { createGlobalStyle } from "styled-components";

import BGImage from "./images/coffee.jpg";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
    background-image:url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
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

  .login {
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
