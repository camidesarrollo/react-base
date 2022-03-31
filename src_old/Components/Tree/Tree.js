import React, { useReducer, useLayoutEffect, useState } from "react";
import { v4 } from "uuid";
import { ThemeProvider } from "styled-components";

import { useDidMountEffect } from "../../utils/utils";
import { TreeContext, reducer } from "./state/index";

import { StyledTree } from "./Tree.style";
import { Folder } from "./Folder/TreeFolder";
import {Menu} from "./Menu/TreeMenu"
import {SubMenu} from "./SubMenu/TreeSubMenu"
import { File } from "./File/TreeFile";

const Tree = ({ children, data, onNodeClick, onUpdate,  handleMenuRename }) => {
  console.log(data);
  const [state, dispatch] = useReducer(reducer, data);

  useLayoutEffect(() => {
    dispatch({ type: "SET_DATA", payload: data });
  }, [data]);

  useDidMountEffect(() => {
    onUpdate && onUpdate(state);
  }, [state]);

  const isImparative = data && !children;


  const TreeRecusive = ({ data, parentNode }) => {

    return data.map((item) => {
      item.parentNode = parentNode;
      if (!parentNode) {
        item.parentNode = data;
      }
      if (!item.id) item.id = v4();
  
      if (item.type === "file") {
        return <File key={item.id} id={item.id} name={item.name} node={item} />;
      }
      if (item.type === "folder") {
        return (
          <Folder key={item.id} id={item.id} name={item.name} node={item}>
            <TreeRecusive parentNode={item} data={item.files} />
          </Folder>
        );
      }
      if(item.type === "menu"){
        return (
          <Menu key={item.menu_id} id={item.menu_id} name={item.menu_title} node={item} handleMenuRename={handleMenuRename}>
            <TreeRecusive parentNode={item} data={item.sub_menu} />
          </Menu>
        );
      }
  
      if(item.type === "submenu"){
        return <SubMenu key={item.id} id={item.id} name={item.title} node={item}/>;
      }
    });
  };

  

  return (
    
    <ThemeProvider theme={{ indent: 20 }}>
      <TreeContext.Provider
        value={{
          isImparative,
          state,
          dispatch,
          onNodeClick: (node) => {
            onNodeClick && onNodeClick(node);
          },
        }}
      >
        <StyledTree>
          {isImparative ? (
            <TreeRecusive data={state} parentNode={state} />
          ) : (
            children
          )}
        </StyledTree>
      </TreeContext.Provider>
    </ThemeProvider>
  );
};



Tree.File = File;
Tree.Folder = Folder;
Tree.Menu = Menu;
Tree.SubMenu = SubMenu;
export default Tree;
