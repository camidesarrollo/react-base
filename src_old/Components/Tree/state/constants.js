const createActionTypes = (name) => {
    return {
      CREATE: `${name}_CREATE`,
      EDIT: `${name}_EDIT`,
      DELETE: `${name}_DELETE`,
    };
  };
  
  const FILE = createActionTypes("FILE");
  const FOLDER = createActionTypes("FOLDER");
  const MENU = createActionTypes("MENU");
  const SUBMENU = createActionTypes("SUBMENU");
  
  export { FILE, FOLDER,MENU, SUBMENU };