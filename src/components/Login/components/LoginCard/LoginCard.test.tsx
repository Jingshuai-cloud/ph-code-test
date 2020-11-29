import React from "react";
import { shallow } from "enzyme";
import LoginCard from "./LoginCard";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { render, screen } from "@testing-library/react";

const goBack = jest.fn();
const submitLogin = jest.fn();
const inputUserName = jest.fn();
const inputPassword = jest.fn();
render(
  <LoginCard
    goBack={goBack}
    submitLogin={submitLogin}
    inputUserName={inputUserName}
    inputPassword={inputPassword}
  />
);

const wrapper = shallow(
  <LoginCard
    goBack={goBack}
    submitLogin={submitLogin}
    inputUserName={inputUserName}
    inputPassword={inputPassword}
  />
);

it("renders login card correctly", () => {
  const button = screen.getByText("Cancel");
  expect(button).toBeInTheDocument();
});

it("should cancel diplay login card when click cancel button", () => {
  wrapper.find("button.Cancel").simulate("click");
  expect(wrapper.find("button.Cancel")).toEqual({});
});

it("should match the snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});
