import React, { createContext, useReducer } from 'react';

export const Context = createContext();

const GlobalStateProvider = ({ children }) => {
  const genreReducer = (state, action) => {
    let genresArray = JSON.parse(localStorage.getItem('genres')) || [];
    
    switch (action.type) {
      case 'addGenre': {
        if (!genresArray.some((item) => item.genre === action.payload)) {
          genresArray = [
            ...genresArray,
            { genre: action.payload, isActive: true },
          ];
        }
        localStorage.setItem('genres', JSON.stringify(genresArray));
        return genresArray;
      }
      case 'removeGenre': {
        genresArray = genresArray.filter(
          (item) => item.genre !== action.payload
        );
        localStorage.setItem('genres', JSON.stringify(genresArray));
        return genresArray;
      }
      default:
        return state;
    }
  };

  const initialState = JSON.parse(localStorage.getItem('genres')) || [];
  const [state, dispatch] = useReducer(genreReducer, initialState);

  return (
    <Context.Provider value={{ genreState: state, genreDispatch: dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default GlobalStateProvider;
