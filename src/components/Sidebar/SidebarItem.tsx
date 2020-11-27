import React from "react";
import { ItemList, Item, ItemAnchor, ItemLabel } from "./Sidebar.styles";

export type MenuObject = {
  coffee: string;
  path: string;
  subMenu: Array<MenuObject>;
};

type Props = {
  menu: MenuObject;
  handleMenuSelection: any;
  selectedList: Array<string>;
  level: number;
};

const SidebarItem: React.FC<Props> = ({
  menu,
  handleMenuSelection,
  selectedList,
  level,
}) => {
  const { coffee, path, subMenu } = menu;
  return (
    <>
      {subMenu.length > 0 ? (
        <Item>
          <ItemLabel onMouseEnter={() => handleMenuSelection(coffee, level)}>
            {coffee}
          </ItemLabel>
          {selectedList[level] === coffee && (
            <ItemList>
              {subMenu.map((menu: MenuObject, i) => {
                const nextLevel = level + 1;
                return (
                  <SidebarItem
                    menu={menu}
                    handleMenuSelection={handleMenuSelection}
                    selectedList={selectedList}
                    level={nextLevel}
                    key={`child-${menu.coffee}-${i}`}
                  />
                );
              })}
            </ItemList>
          )}
        </Item>
      ) : (
        <Item>
          <ItemAnchor href={path}>{menu.coffee}</ItemAnchor>
        </Item>
      )}
    </>
  );
};

export default SidebarItem;
