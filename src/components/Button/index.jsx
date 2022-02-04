import React, { useReducer } from 'react';
import * as S from './styles';
import { CloseCircle } from '@styled-icons/ionicons-sharp/CloseCircle';

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
      return {
        isActive: true,
      };
    }
    case 'removeGenre': {
      genresArray = genresArray.filter((item) => item.genre !== action.payload);
      localStorage.setItem('genres', JSON.stringify(genresArray));
      return {
        isActive: false,
      };
    }
    default:
      return state;
  }
};

const getStatus = (id) => {
  if (localStorage.hasOwnProperty('genres')) {
    let genres = JSON.parse(localStorage.getItem('genres'))
    genres = genres.find((item) => item.genre === id)
    return genres ? genres.isActive : false;
  } else return false;
}

const Button = ({ children, id }) => {
  const initialState = {
    genres: id,
    isActive: getStatus(id),
  };


  const [state, dispatch] = useReducer(genreReducer, initialState);
  return (
    <S.Wrapper
      isActive={state.isActive}
      onClick={
        !state.isActive
          ? () => dispatch({ type: 'addGenre', payload: id })
          : null
      }
    >
      {!!children && <span>{children}</span>}
      {state.isActive && (
        <S.IconWrapper
          onClick={() => dispatch({ type: 'removeGenre', payload: id })}
        >
          <CloseCircle />
        </S.IconWrapper>
      )}
    </S.Wrapper>
  );
};

export default Button;
