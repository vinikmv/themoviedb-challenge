import GenreBox from 'components/GenreBox';
import MovieList from 'components/MovieList';
import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStateProvider from 'utils/GlobalStateProvider';

const Home = () => {
  return (
    <GlobalStateProvider>
      <Helmet>
        <meta
          name="description"
          content="Listagem de filmes populares do The Movie Database API"
        />
        <title>TMDB</title>
      </Helmet>
      <GenreBox />
      <MovieList />
    </GlobalStateProvider>
  );
};

export default Home;
