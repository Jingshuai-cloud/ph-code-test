import React from "react";
import { shallow } from "enzyme";
import SidebarItem from "./SidebarItem";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const menu = {
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
};

let mockHandleMenuSeceltion = jest.fn();
let selectedList = ["ESPRESSO", "MORE", "MORE"];

let wrapper = shallow(
  <SidebarItem
    menu={menu}
    key={menu.coffee}
    handleMenuSelection={mockHandleMenuSeceltion}
    selectedList={selectedList}
    level={0}
  />
);

it("should match the snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});
