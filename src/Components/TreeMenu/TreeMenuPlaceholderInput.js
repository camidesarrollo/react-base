import React, { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import { AiOutlineFile } from "react-icons/ai";

import FILE_ICONS from "./FileIcons";
import { StyledSubMenu } from "./SubMenu/TreeSubMenu.style";
import { MenuName } from "./Menu/TreeMenu";
import { StyledMenu } from "./Menu/TreeMenu.style";

const SubMenuEdit = ({ ext, inputRef, updateExt, defaultValue, style }) => {
  const extension = FILE_ICONS[ext] ? FILE_ICONS[ext] : <AiOutlineFile />;

  return (
    <StyledSubMenu className="tree__submenu" style={style}>
      {extension}
      &nbsp;&nbsp;
      <input
        ref={inputRef}
        onChange={updateExt}
        defaultValue={defaultValue}
        className="tree__input"
      />
    </StyledSubMenu>
  );
};

const MenuEdit = ({ name, inputRef, defaultValue, style }) => {
  return (
    <StyledMenu id={v4()} name={name} style={style}>
      <MenuName
        isOpen={true}
        handleClick={() => {}}
        name={
          <input
            ref={inputRef}
            className="tree__input"
            defaultValue={defaultValue}
          />
        }
      />
    </StyledMenu>
  );
};

const PlaceholderMenuInput = ({
  type,
  name,
  onSubmit,
  onCancel,
  defaultValue,
  style,
}) => {
  const [ext, setExt] = useState("");
  const inputRef = useRef();

  const updateExt = (e) => {
    let splitted = e.target.value.split(".");
    let ext = splitted && splitted[splitted.length - 1];
    setExt(ext);
  };

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
    inputRef.current.addEventListener("keyup", (e) => {
      if (e.key === "Enter") onSubmit(e.target.value);
      if (e.key === "Escape") {
        onCancel && onCancel();
      }
    });
  }, [inputRef]);

  return type === "submenu" ? (
    <SubMenuEdit
      ext={ext}
      style={style}
      updateExt={updateExt}
      inputRef={inputRef}
      defaultValue={defaultValue}
    />
  ) : (
    <MenuEdit
      style={style}
      name={name}
      inputRef={inputRef}
      defaultValue={defaultValue}
    />
  );
};

export { PlaceholderMenuInput };
