import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { render, screen } from "@testing-library/react";

it("renders title and sidebar correctly", () => {
  render(<Login />);
  const button = screen.getByText("Login");
  expect(button).toBeInTheDocument();
});

it("should display LoginCard on click of button Login", () => {
  const wrapper = shallow(<Login />);
  wrapper.find("button").simulate("click");
  expect(wrapper.text()).toMatch("<LoginCard />");
});

it("should match the snapshot", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});
