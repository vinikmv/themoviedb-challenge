import React from 'react';
import Button from '../Button';
import * as S from './styles';

const GenreBox = () => {
  return (
    <S.Container>
      <S.Title>
        Milhões de filmes, séries e pessoas para descobrir. Explore já.
      </S.Title>
      <S.FilterText>Filtre por: </S.FilterText>
      <S.Genres>
        <Button>Ação</Button>
        <Button>Aventura</Button>
        <Button>Animação</Button>
        <Button>Comédia</Button>
        <Button>Crime</Button>
        <Button>Documentário</Button>
        <Button>Drama</Button>
        <Button>Família</Button>
        <Button>Fantasia</Button>
        <Button>História</Button>
        <Button>Terror</Button>
        
      </S.Genres>
    </S.Container>
  );
};

export default GenreBox;
