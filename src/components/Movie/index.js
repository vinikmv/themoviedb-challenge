import React from 'react';
import * as S from './styles';

const Movie = () => {
  return (
    <S.Container>
    <S.MovieImage src='https://www.themoviedb.org/t/p/w440_and_h660_face/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg'></S.MovieImage>
    <S.MovieTitle>Homem-Aranha: Sem Volta Para Casa</S.MovieTitle>
    <S.MovieReleaseDate>15 de dez de 2021</S.MovieReleaseDate>
    </S.Container>
  );
};

export default Movie;
