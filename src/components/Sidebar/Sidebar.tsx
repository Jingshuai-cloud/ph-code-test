import React, { useState } from "react";
import { NavWrapper } from "./Sidebar.styles";
import SidebarItem from "./components/SidebarItem";
import { MenuObject } from "./components/SidebarItem";

type Props = {
  menus: Array<MenuObject>;
};

const Sidebar: React.FC<Props> = ({ menus }) => {
  const [selectedList, setSelectedList] = useState<string[]>([]);

  const handleMenuSelection = (subMenu: string, level: number) => {
    setSelectedList((selectedList: string[]) => {
      const newSelectedList: string[] = [...selectedList];

      newSelectedList.length = level;
      if (subMenu !== "") {
        newSelectedList[level] = subMenu;
      }
      return newSelectedList;
    });

    console.log(selectedList);
  };

  return (
    <NavWrapper>
      <ul onMouseLeave={() => setSelectedList([])}>
        {menus.map((menu: MenuObject, i) => {
          return (
            <SidebarItem
              menu={menu}
              key={`child-${menu.coffee}-${i}`}
              handleMenuSelection={handleMenuSelection}
              selectedList={selectedList}
              level={0}
            />
          );
        })}
      </ul>
    </NavWrapper>
  );
};

export default Sidebar;
