import apiConfig from 'api/config';
import tmdbApi from 'api/tmdbApi';
import Card from 'components/Card';
import Pagination from 'components/Pagination';
import React, { useContext, useEffect, useState } from 'react';
import { formatDate } from 'utils/formatFunctions';
import { Context } from 'utils/GlobalStateProvider';
import { useCurrentWindowSize } from 'utils/hooks/useCurrentWindowSize';
import * as S from './styles';

const MovieList = () => {
  const [itens, setItens] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const { genreState } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useCurrentWindowSize();
  const maxPages = 500; // Limite da API
  
  useEffect(() => {
    setIsLoading(true)
    const params = { language: 'pt-br', page: currentPage };
    const getMovieList = async () => {
      let response = await tmdbApi.getPopularMovies({ params });
      setItens(response.results);
      setTimeout(() => {
        setIsLoading(false)
      }, 300);
      
    };
    getMovieList();
  }, [currentPage]);

  function goToLastPage() {
    setCurrentPage(maxPages);
  }

  function goToFirstPage() {
    setCurrentPage(1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / 5) * 5;

    // Paginação Mobile
    if (isMobile) {
      start = Math.floor((currentPage - 1) / 3) * 3;
      if (currentPage <= maxPages && currentPage > maxPages - 3) {
        return new Array(3).fill().map((_, idx) => maxPages - 3 + idx + 1);
      } else return new Array(3).fill().map((_, idx) => start + idx + 1);
    }   
    
    if (currentPage <= maxPages && currentPage > maxPages - 5) {
      return new Array(5).fill().map((_, idx) => maxPages - 5 + idx + 1);
    } else return new Array(5).fill().map((_, idx) => start + idx + 1);
  };

  const genreList = genreState.map((item) => item.genre);
  return (
    <>
      <S.Container>
        {!isLoading &&
          itens
            .filter((item) => {
              let filtered = genreList.every((value) => {
                return item.genre_ids.indexOf(value) !== -1;
              });
              return filtered;
            })
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  id={item.id}
                  isMovie={true}
                  src={apiConfig.imagemOriginal(item.poster_path)}
                  title={item.title}
                  subtitle={formatDate(item.release_date)}
                />
              );
            })}
      </S.Container>
      <Pagination
        currentPage={currentPage}
        goToFirstPage={goToFirstPage}
        goToLastPage={goToLastPage}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        changePage={changePage}
        getPaginationGroup={getPaginationGroup}
        pages={maxPages}
      />
    </>
  );
};

export default MovieList;
