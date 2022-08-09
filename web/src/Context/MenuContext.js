import React, { createContext, useReducer } from 'react';
import { reducerLibrary } from './reducerLibrary';

const MenuContext = createContext();

const MenuContextProvider = (props) => {
  const [menuInfo, dispatch] = useReducer(reducerLibrary, {
    isMenuOpen: false,
  });

  const { isMenuOpen } = menuInfo;

  return (
    <MenuContext.Provider value={{ isMenuOpen, dispatch }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuContextProvider };
