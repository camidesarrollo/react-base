import React from "react";

const defaultValue = {
  dispatch: null,
  state: null,
  isImparative: null,
  onNodeClick: () => {}
};
const TreeMenuContext = React.createContext(defaultValue);

const useTreeMenuContext = () => React.useContext(TreeMenuContext);

export { TreeMenuContext, useTreeMenuContext };
