import React from 'react';
import GenreBox from '../GenreBox';
import Header from '../Header';
import MovieList from '../MovieList';
import * as S from './styles';

const Home = () => {
  return (
    <>
    <Header />
    <GenreBox />
    <MovieList />
    </>
    )
};

export default Home;
