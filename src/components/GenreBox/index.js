import React from 'react';
import * as S from './styles';

const GenreBox = () => {
  return (
    <S.Container>
      <S.Title>
        Milhões de filmes, séries e pessoas para descobrir. Explore já.
      </S.Title>
      <S.FilterText>Filtre por: </S.FilterText>
      <S.Genres>
        <button>Teste</button>
        <button>Teste</button>
      </S.Genres>
    </S.Container>
  );
};

export default GenreBox;
