import React, { useState } from "react";
import { GlobalStyle, Wrapper } from "./App.styles";
import LoginCard from "./components/LoginCard/LoginCard";

const App = () => {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLogin(false);
    console.log(username);
    console.log(password);
  };
  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(username);
  };
  const startLogin = () => {
    setLogin(true);
  };

  const inputUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <h1>Predictive Hire</h1>
        {!login && (
          <button className="login" onClick={startLogin}>
            Login
          </button>
        )}

        {login && (
          <LoginCard
            goBack={goBack}
            submitLogin={submit}
            inputUserName={inputUserName}
            inputPassword={inputPassword}
          />
        )}
      </Wrapper>
    </>
  );
};

export default App;
