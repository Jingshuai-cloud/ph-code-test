import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title and sidebar correctly", () => {
  render(<App />);
  const title = screen.getByText("Predictive Hire");
  const sidebar = screen.getByText("loading...");
  expect(title).toBeInTheDocument();
  expect(sidebar).toBeInTheDocument();
});

test("renders JSON menu correctly", async () => {
  render(<App />);

  expect(screen.queryByText(/ESPRESSO/)).toBeNull();
  // const coffee = await screen.getByText("Login");

  expect(screen.getByRole("list")).toBeInTheDocument();
  //await screen.debug();
});
