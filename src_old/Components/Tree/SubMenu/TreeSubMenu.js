import React, { useRef, useState } from "react";
import { AiOutlineFile, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import { StyledSubMenu } from "../SubMenu/TreeSubMenu.style";
import { useTreeContext } from "../state/TreeContext";
import { ActionsWrapper, StyledName } from "../Tree.style";
import { PlaceholderInput } from "../TreePlaceholderInput";

import { SUBMENU } from "../state/constants";
import Icon from "../../Form/Icon";


const SubMenu = ({ name, id, node, icon, tipo }) => {
  const { dispatch, isImparative, onNodeClick } = useTreeContext();
  const [isEditing, setEditing] = useState(false);
  
  const toggleEditing = () => setEditing(!isEditing);
  const commitEditing = (name) => {
    dispatch({ type: SUBMENU.EDIT, payload: { id, name } });
    setEditing(false);
  };
  const commitDelete = () => {
    dispatch({ type: SUBMENU.DELETE, payload: { id } });
  };
  const handleNodeClick = React.useCallback(
    (e) => {
      e.stopPropagation();
      onNodeClick({ node });
    },
    [node]
  );
  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <StyledSubMenu onClick={handleNodeClick} className="tree__submenu">
      {isEditing ? (
        <PlaceholderInput
          type="submenu"
          style={{ paddingLeft: 0 }}
          defaultValue={name}
          onSubmit={commitEditing}
          onCancel={handleCancel}
        />
      ) : (
        <ActionsWrapper>
          <StyledName>
            <Icon iconName={icon} size={30} color="orange" tipo={tipo}  />
            &nbsp;&nbsp;{name} 
          </StyledName>
          {isImparative && (
            <div className="actions">
              <AiOutlineEdit onClick={toggleEditing} />
              <AiOutlineDelete onClick={commitDelete} />
            </div>
          )}
        </ActionsWrapper>
      )}
    </StyledSubMenu>
  );
};

export { SubMenu };
