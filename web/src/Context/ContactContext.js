import React, { createContext, useReducer } from 'react';
import { reducerLibrary } from './reducerLibrary';

const ContactContext = createContext();

const ContactContextProvider = (props) => {
  const [contactFormInfo, dispatch] = useReducer(reducerLibrary, {
    isFormVisible: false,
  });

  const { isFormVisible, isErrors, isData } = contactFormInfo;

  return (
    <ContactContext.Provider
      value={{ isFormVisible, isErrors, isData, dispatch }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactContextProvider };
