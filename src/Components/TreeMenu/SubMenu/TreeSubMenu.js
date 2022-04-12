import React, { useRef, useState } from "react";
import { AiOutlineFile, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import { StyledSubMenu } from "./TreeSubMenu.style";
import { useTreeMenuContext } from "../state/TreeMenuContext";
import { ActionsWrapper, StyledName } from "../TreeMenu.style";
import { PlaceholderMenuInput } from "../TreeMenuPlaceholderInput";

import { SUBMENU } from "../state/constants";
import FILE_ICONS from "../FileIcons";

const SubMenu = ({ name, id, node }) => {
  const { dispatch, isImparative, onNodeClick } = useTreeMenuContext();
  const [isEditing, setEditing] = useState(false);
  const ext = useRef("");

  let splitted = name?.split(".");
  ext.current = splitted[splitted.length - 1];

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
        <PlaceholderMenuInput
          type="submenu"
          style={{ paddingLeft: 0 }}
          defaultValue={name}
          onSubmit={commitEditing}
          onCancel={handleCancel}
        />
      ) : (
        <ActionsWrapper>
          <StyledName>
            {FILE_ICONS[ext.current] ? (
              FILE_ICONS[ext.current]
            ) : (
              <AiOutlineFile />
            )}
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
