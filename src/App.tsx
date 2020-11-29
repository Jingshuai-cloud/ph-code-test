import React, { useEffect, useState } from "react";
import Title from "./components/Title/Title";
import { GlobalStyle, Wrapper } from "./GlobalStyle/GlobalStyle.style";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { fetchMenus } from "./API/API";
import { MenuObject } from "./components/Sidebar/components/SidebarItem";

const App = () => {
  const [data, setData] = useState<MenuObject[]>([
    {
      coffee: "loading...",
      path: "/",
      subMenu: [],
    },
  ]);

  useEffect(() => {
    const datadata = fetchMenus();
    datadata.then((result) => {
      setData(result);
    });
  }, []);

  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <Title />

        <div className="content">
          <Sidebar menus={data} />

          <BrowserRouter>
            <Switch>
              <Route path="/login" exact component={Login} />
            </Switch>
          </BrowserRouter>
        </div>
      </Wrapper>
    </>
  );
};

export default App;
