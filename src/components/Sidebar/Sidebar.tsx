import React, { useState } from "react";
import { Wrapper } from "./Sidebar.styles";
import SidebarItem from "./SidebarItem";
import { MenuObject } from "./SidebarItem";

type Props = {
  menus: Array<MenuObject>;
};

const Sidebar: React.FC<Props> = ({ menus }) => {
  const [selectedList, setSelectedList] = useState<string[]>([]);

  const handleMenuSelection = (subMenu: string, level: number) => {
    setSelectedList((selectedList: string[]) => {
      const newSelectedList: string[] = [...selectedList];
      // trim any menus after the depth
      newSelectedList.length = level;
      if (subMenu !== "") {
        newSelectedList[level] = subMenu;
      }
      return newSelectedList;
    });
    console.log(selectedList);
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Sidebar;
