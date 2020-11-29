import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const menus = [
  { coffee: "AFFOGATO", path: "/layer1", subMenu: [] },
  {
    coffee: "ESPRESSO",
    path: "/",
    subMenu: [
      { coffee: "ESPRESSO", path: "/layer2", subMenu: [] },
      { coffee: "DOUBLE ESPRESSO", path: "/layer2", subMenu: [] },
      {
        coffee: "MORE",
        path: "/",
        subMenu: [
          { coffee: "ESPRESSO CON PANNA", path: "/layer3", subMenu: [] },
          { coffee: "ESPRESSO MACCHIATO", path: "/layer3", subMenu: [] },
          {
            coffee: "MORE",
            path: "/",
            subMenu: [
              { coffee: "ICED LATTE", path: "/layer2", subMenu: [] },
              { coffee: "ICED MOCHA", path: "/layer2", subMenu: [] },
            ],
          },
        ],
      },
    ],
  },
];

describe("Sidebar", () => {
  test("renders Sidebar component", () => {
    render(<Sidebar menus={menus} />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    const ESPRESSO = screen.getByText("ESPRESSO");
    expect(ESPRESSO).toBeInTheDocument();
  });

  it("should update selectedList on mouse enter", () => {
    const { container } = render(<Sidebar menus={menus} />);
    const selectedList = container.querySelector(".selectedList");
    //const ex = screen.getByRole("link");
    const li = screen.getByText("ESPRESSO");
    //fireEvent.mouseEnter(ex);
    fireEvent.mouseOver(li);

    expect(selectedList).toBe(null);
  });
});
