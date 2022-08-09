import React, { createContext, useReducer } from 'react';
import { reducerLibrary } from './reducerLibrary';

const MusicContext = createContext();

const MusicContextProvider = (props) => {
  const [musicCardInfo, dispatch] = useReducer(reducerLibrary, {
    activeProject: 'Albums',
    flippedState: [],
  });

  const { activeProject, flippedState } = musicCardInfo;

  return (
    <MusicContext.Provider value={{ activeProject, flippedState, dispatch }}>
      {props.children}
    </MusicContext.Provider>
  );
};

export { MusicContext, MusicContextProvider };
