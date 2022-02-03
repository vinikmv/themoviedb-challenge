import React, { useState, useEffect } from 'react';
import Card from '../Card';
import * as S from './styles';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/config';

const MovieList = () => {
  const [itens, setItens] = useState([]);

  const formatDate = (data) => {
    const newDate = new Date(data)
    const month = newDate.toLocaleString('pt-br', {month: 'short'}).toUpperCase().replace('.', '')
    return `${newDate.getDay()} ${month} ${newDate.getFullYear()} `
  }

  useEffect(() => {
    const getMovieList = async () => {
      let response = await tmdbApi.getPopularMovies();
      setItens(response.results);
    };
    getMovieList();
  }, []);
  return (
    <S.Container>
      {!!itens &&
        itens.map((item) => {
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
