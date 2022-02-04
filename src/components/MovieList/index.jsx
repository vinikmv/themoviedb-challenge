import apiConfig from 'api/config';
import tmdbApi from 'api/tmdbApi';
import Card from 'components/Card';
import React, { useContext, useEffect, useState } from 'react';
import { formatDate } from 'utils/formatFunctions';
import { Context } from 'utils/GlobalStateProvider';
import * as S from './styles';

const MovieList = () => {
  const [itens, setItens] = useState([]);
  const { genreState } = useContext(Context);
  useEffect(() => {
    const params = { language: 'pt-br' };
    const getMovieList = async () => {
      let response = await tmdbApi.getPopularMovies({ params });
      setItens(response.results);
    };
    getMovieList();
  }, []);

  const genreList = genreState.map((item) => item.genre);
  return (
    <S.Container>
      {!!itens &&
        itens
          .filter((item) => {
            let filtered = genreList.every((value) => {
              return item.genre_ids.indexOf(value) !== -1;
            });
            return filtered;
          })
          .map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                isMovie={true}
                src={apiConfig.imagemOriginal(item.poster_path)}
                title={item.title}
                subtitle={formatDate(item.release_date)}
              />
            );
          })}
    </S.Container>
  );
};

export default MovieList;
