import GenreBox from 'components/GenreBox';
import MovieList from 'components/MovieList';
import React from 'react';
import GlobalStateProvider from 'utils/GlobalStateProvider';

const Home = () => {
  return (
    <GlobalStateProvider>
      <GenreBox />
      <MovieList />
    </GlobalStateProvider>
  );
};

export default Home;
