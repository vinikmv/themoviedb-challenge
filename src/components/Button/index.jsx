import { CloseCircle } from '@styled-icons/ionicons-sharp/CloseCircle';
import React, { useContext } from 'react';
import { Context } from 'utils/GlobalStateProvider';
import * as S from './styles';

const getStatus = (genres, id) => {
  genres = genres.find((item) => item.genre === id);
  return genres ? genres.isActive : false;
};

const Button = ({ children, id }) => {
  const { genreState, genreDispatch } = useContext(Context);
  let isButtonActive = getStatus(genreState, id);
  return (
    <S.Wrapper
      isActive={isButtonActive}
      onClick={
        !isButtonActive
          ? () => genreDispatch({ type: 'addGenre', payload: id })
          : null
      }
    >
      {!!children && <span>{children}</span>}
      {isButtonActive && (
        <S.IconWrapper
          onClick={() => genreDispatch({ type: 'removeGenre', payload: id })}
        >
          <CloseCircle />
        </S.IconWrapper>
      )}
    </S.Wrapper>
  );
};

export default Button;
