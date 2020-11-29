import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

test("renders title orrectly", () => {
  render(<Title />);
  const title = screen.getByText("Predictive Hire");
  expect(title).toBeInTheDocument();
});
