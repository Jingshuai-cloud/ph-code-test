import React from "react";
import { ButtonWrapper } from "./LoginCard.style";
import { CardWrapper } from "../../../../GlobalStyle/GlobalStyle.style";

type Props = {
  goBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
  submitLogin: (e: React.MouseEvent<HTMLButtonElement>) => void;
  inputUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginCard: React.FC<Props> = ({
  goBack,
  submitLogin,
  inputUserName,
  inputPassword,
}) => (
  <form>
    <CardWrapper>
      <h2 className="title"> Log in</h2>
      <label className="label">user name</label>
      <input
        className="input"
        type="text"
        placeholder="Enter your user name"
        onChange={inputUserName}
      ></input>
      <label className="label">passward</label>
      <input
        className="input"
        type="password"
        placeholder="Enter your password"
        onChange={inputPassword}
      ></input>
      <ButtonWrapper>
        <button className="Cancel" onClick={goBack}>
          Cancel
        </button>
        <button className="Login" onClick={submitLogin}>
          Login
        </button>
      </ButtonWrapper>
    </CardWrapper>
  </form>
);

export default LoginCard;
