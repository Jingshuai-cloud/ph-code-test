import React from "react";
import { shallow } from "enzyme";
import QuestionCard from "./QuestionCard";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { render, screen } from "@testing-library/react";

const question = "question1";
const questionNr = 1;
const answers = ["answer"];
const userAnswer = undefined;
const callback = jest.fn();
render(
  <QuestionCard
    question={question}
    questionNr={questionNr}
    answers={answers}
    userAnswer={userAnswer}
    callback={callback}
  />
);

const wrapper = shallow(
  <QuestionCard
    question={question}
    questionNr={questionNr}
    answers={answers}
    userAnswer={userAnswer}
    callback={callback}
  />
);

it("renders question card correctly", () => {
  const button = screen.getByText("question1");
  expect(button).toBeInTheDocument();
});

it("should display  the button correctly", () => {
  expect(wrapper.find("button")).toHaveLength(1);
});

it("should match the snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});
