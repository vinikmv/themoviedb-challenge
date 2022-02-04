import tmdbApi from 'api/tmdbApi';
import Button from 'components/Button';
import React, { useEffect, useState } from 'react';
import * as S from './styles';

const GenreBox = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const params = { language: 'pt-br' };
    const genreList = async () => {
      let response = await tmdbApi.getMovieGenres({ params });
      setGenres(response.genres);
    };
    genreList();
  }, []);
  return (
    <S.Container>
      <S.Title>
        Milhões de filmes, séries e pessoas para descobrir. Explore já.
      </S.Title>
      <S.FilterText>Filtre por: </S.FilterText>
      <S.Genres>
        {!!genres &&
          genres.map((genre, index) => {
            return (
              <Button key={index} id={genre.id}>
                {genre.name}
              </Button>
            );
          })}
      </S.Genres>
    </S.Container>
  );
};

export default GenreBox;
