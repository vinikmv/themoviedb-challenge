import React, { useState, useEffect, useContext } from 'react';
import Card from '../Card';
import * as S from './styles';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/config';
import { Context } from '../../utils/GlobalStateProvider';

const MovieList = () => {
  const [itens, setItens] = useState([]);
  const { genreState } = useContext(Context);
    useEffect(() => {
      const params = { language: 'pt-br' };
      const getMovieList = async () => {
        let response = await tmdbApi.getPopularMovies({params});
        setItens(response.results);
      };
      getMovieList();
    }, []);

  const formatDate = (data) => {
    const newDate = new Date(data)
    const month = newDate.toLocaleString('pt-br', {month: 'short'}).toUpperCase().replace('.', '')
    return `${newDate.getDay()} ${month} ${newDate.getFullYear()} `
  }

  const genreList = genreState.map(item => item.genre)
  return (
    <S.Container>
      {!!itens &&
        itens
        .filter((item) => {
          let filtered = genreList.every((value) => {
            return item.genre_ids.indexOf(value) !== -1
          })
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
