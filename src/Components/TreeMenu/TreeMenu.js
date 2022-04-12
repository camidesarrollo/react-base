import React, { useReducer, useLayoutEffect } from "react";
import { v4 } from "uuid";
import { ThemeProvider } from "styled-components";

import { useDidMountEffect } from "../utils";
import { TreeMenuContext, reducer } from "./state/index";

import { StyledTree } from "./TreeMenu.style";
import { Menu } from "./Menu/TreeMenu";
import { SubMenu } from "./SubMenu/TreeSubMenu";

let funcionOnclick = "";

const Tree = ({ children, data, onNodeClick, onUpdate, handleMenuRename }) => {


  const [state, dispatch] = useReducer(reducer, data);

  useLayoutEffect(() => {
    dispatch({ type: "SET_DATA", payload: data });
  }, [data]);

  useDidMountEffect(() => {
    onUpdate && onUpdate(state);
  }, [state]);

  const isImparative = data && !children;
  return (
    <ThemeProvider theme={{ indent: 20 }}>
      <TreeMenuContext.Provider
        value={{
          isImparative,
          state,
          dispatch,
          onNodeClick: (node) => {
            onNodeClick && onNodeClick(node);
          }
        }}
      >
        <StyledTree>
          {isImparative ? (
            <TreeRecusive data={state} parentNode={state} handleMenuRename={handleMenuRename} />
          ) : (
            children
          )}
        </StyledTree>
      </TreeMenuContext.Provider>
    </ThemeProvider>
  );
};

const TreeRecusive = ({ data, parentNode, handleMenuRename }) => {

  if(data !== null){
    return data.map((item) => {
      item.parentNode = parentNode;
      if (!parentNode) {
        item.parentNode = data;
      }
      if (!item.menu_id) item.menu_id = v4();


      return (
        <Menu key={item.menu_id} id={item.menu_id} name={item.menu_title} node={item} handleMenuRename={handleMenuRename}>
          <TreeRecusive parentNode={item} data={item.submenu} />
        </Menu>
      );

      // if(item.submenu !== []){
      //     return (
      //       <Menu key={item.id} id={item.id} name={item.name} node={item}>
      //         <TreeRecusive parentNode={item} data={item.files} />
      //       </Menu>
      //     );
      // }else{
      //   return <SubMenu key={item.id} id={item.id} name={item.name} node={item} />;
      // }
    });
  }

};

Tree.SubMenu = SubMenu;
Tree.Menu = Menu;

export default Tree;


