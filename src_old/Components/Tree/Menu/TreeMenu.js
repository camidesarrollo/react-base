import React, { useState, useEffect } from "react";
import {
  AiOutlineFolderAdd,
  AiOutlineFileAdd,
  AiOutlineFolder,
  AiOutlineFolderOpen,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";

import {
  ActionsWrapper,
  Collapse,
  StyledName,
  VerticalLine,
} from "../Tree.style";
import { StyledMenu } from "./TreeMenu.style";

import { SUBMENU, MENU } from "../state/constants";
import { useTreeContext } from "../state/TreeContext";
import { PlaceholderInput } from "../TreePlaceholderInput";
import Icon from "../../Form/Icon";


const MenuName = ({ isOpen, name, handleClick, icon, tipo,  }) => {
    return (
      <StyledName onClick={handleClick}>
        {/* <Icon iconName={icon} size={30} color="orange" tipo={tipo}  /> */}
        &nbsp;&nbsp;{name}
      </StyledName>
    );
}

const Menu = ({ id, name, children, node, handleMenuRename }) => {
    const { dispatch, isImparative, onNodeClick } = useTreeContext();
    const [isEditing, setEditing] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [childs, setChilds] = useState([]);

    useEffect(() => {
        setChilds([children]);
    }, [children]);

    const commitMenuCreation = (name) => {
        dispatch({ type: MENU.CREATE, payload: { id, name } });
    };

    const commitSubMenuCreation = (name) => {
        dispatch({ type: SUBMENU.CREATE, payload: { id, name } });
    };

    const commitDeleteMenu = () => {
        dispatch({ type: MENU.DELETE, payload: { id } });
    };
    
    const commitMenuEdit = (name) => {
        dispatch({ type: MENU.EDIT, payload: { id, name } });
        setEditing(false);
    };

    const handleCancel = () => {
        setEditing(false);
        setChilds([children]);
      };
    
      const handleNodeClick = React.useCallback(
        (event) => {
          event.stopPropagation();
          onNodeClick({ node });
        },
        [node]
      );
    
      const handleSubMenuCreation = (event) => {
        event.stopPropagation();
        setIsOpen(true);
        setChilds([
          ...childs,
          <PlaceholderInput
            type="submenu"
            onSubmit={commitSubMenuCreation}
            onCancel={handleCancel}
          />,
        ]);
      };
    
      const handleMenuCreation = (event) => {
        event.stopPropagation();
        setIsOpen(true);
        setChilds([
          ...childs,
          <PlaceholderInput
            type="menu"
            onSubmit={commitMenuCreation}
            onCancel={handleCancel}
          />,
        ]);
      };

    // const handleMenuRename = () => {
    //   console.log("Editar TreeMenu");
    //   // setIsOpen(true);
    //   // setEditing(true); 

    // };

    return (
        <StyledMenu id={id} onClick={handleNodeClick} className="tree__menu">
          <VerticalLine>
            <ActionsWrapper>
              {isEditing ? (
                <PlaceholderInput
                  type="menu"
                  style={{ paddingLeft: 0 }}
                  defaultValue={name}
                  onCancel={handleCancel}
                  onSubmit={commitMenuEdit}
                />
              ) : (
                <MenuName
                  name={name}
                  isOpen={isOpen}
                  handleClick={() => setIsOpen(!isOpen)}
                />
              )}
    
              {isImparative && (
                <div className="actions">
                  <AiOutlineEdit onClick={()=> handleMenuRename(id, "menu")} />
                  <AiOutlineFileAdd onClick={handleSubMenuCreation} />
                  <AiOutlineFolderAdd onClick={handleMenuCreation} />
                  <AiOutlineDelete onClick={commitDeleteMenu} />
                </div>
              )}
            </ActionsWrapper>
            <Collapse className="tree__folder--collapsible" isOpen={isOpen}> 
              {childs}
            </Collapse>
          </VerticalLine>
        </StyledMenu>
      );
    };
    
export { Menu, MenuName };


/**Ver si el tree__folder funciona */