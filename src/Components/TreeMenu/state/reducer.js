import _cloneDeep from "lodash.clonedeep";
import { searchDFSSUBMENU, createSubMenu, createMenu } from "../../utils";
import { SUBMENU, MENU } from "./constants";

const reducer = (state, action) => {
  
  let newState = _cloneDeep(state);
  let node = null;
  let parent = null;
  if (action.payload && action.payload.id) {


    let foundNode = searchDFSSUBMENU({
      data: newState,
      cond: (item) => {
        return item.id === action.payload.id;
      },
    });
    node = foundNode.item;
    parent = node.parentNode;
  }

  switch (action.type) {
    case "SET_DATA":
      return action.payload;

    case MENU.CREATE:
      node.files.push(createMenu({ name: action.payload.name }));
      return newState;

    case MENU.EDIT:

      node.name = action.payload.name;
      return newState;

    case MENU.DELETE:
      if (!parent || Array.isArray(parent)) {
        newState = newState.filter((file) => file.id !== action.payload.id);
        return newState;
      } else {
        parent.files = parent.files.filter(
          (file) => file.id !== action.payload.id
        );
      }
      return newState;

    default:
      return state;
  }
};

export { reducer };
