const createActionTypes = (name) => {
  return {
    CREATE: `${name}_CREATE`,
    EDIT: `${name}_EDIT`,
    DELETE: `${name}_DELETE`,
  };
};

const SUBMENU = createActionTypes("SUBMENU");
const MENU = createActionTypes("MENU");

export { SUBMENU, MENU };
