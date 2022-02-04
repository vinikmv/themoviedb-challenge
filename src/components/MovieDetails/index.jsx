import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Card from '../Card';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/config';
import Video from '../Video';

const MovieDetails = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [certification, setCertification] = useState(null);
  const [credits, setCredits] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    const params = { language: 'pt-br' };
    const getMovieDetails = async () => {
      let response = await tmdbApi.getMovieDetails(id, { params });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getMovieDetails();
  }, [id]);

  useEffect(() => {
    const getMovieCertification = async () => {
      let response = await tmdbApi.getMovieReleaseDates(id);
      response = response.results.find((result) => result.iso_3166_1 === 'BR');
      setCertification(response);
    };
    getMovieCertification();
  }, [id]);

  useEffect(() => {
    const getMovieCredits = async () => {
      let response = await tmdbApi.getMovieCredits(id);
      setCredits(response);
    };
    getMovieCredits();
  }, [id]);

  useEffect(() => {
    const params = { language: 'pt-br' };
    const getMovieRecommendations = async () => {
      let response = await tmdbApi.getMovieRecommendations(id, { params });
      setRecommendations(response);
    };
    getMovieRecommendations();
  }, [id]);

  const formatGenres = (genres) => {
    let auxArray = genres.map((genre) => genre.name);
    return auxArray.join(', ');
  };

  const formatRunTime = (runtime) => {
    return Math.floor(runtime / 60) + 'h ' + (runtime % 60) + 'min';
  };

  const formatDate = (date) => {
    let dateAux = new Date(date);
    return dateAux.toLocaleDateString('pt-br');
  };

  return (
    <>
      {item && (
        <>
          <S.MovieSummary>
            <S.Poster
              src={apiConfig.imagemOriginal(item.poster_path)}
            ></S.Poster>
            <S.MovieDetails>
              <S.MovieTitle>
                {item.title} ({item.release_date.slice(0, 4)})
              </S.MovieTitle>
              <S.MovieInformation>
                {certification && (
                  <>
                    <span>
                      {certification.release_dates[0].certification} anos
                    </span>
                    <span> • </span>
                    <span>
                      {formatDate(certification.release_dates[0].release_date)}{' '}
                      ({certification.iso_3166_1})
                    </span>
                  </>
                )}
                <span> • </span>
                <span>{item.genres && formatGenres(item.genres)}</span>
                <span> • </span>
                <span>{formatRunTime(item.runtime)}</span>
              </S.MovieInformation>
              <S.Rating>
                <span>Avaliação dos usuários</span>
              </S.Rating>
              <S.Overview>
                <h3>Sinopse</h3>
                <span>{item.overview}</span>
              </S.Overview>
              <S.MovieCrew>
                {credits &&
                  credits.crew.slice(0, 5).map((crew) => {
                    return (
                      <Card key={crew.id} title={crew.name} subtitle={crew.department} />
                    );
                  })}
              </S.MovieCrew>
            </S.MovieDetails>
          </S.MovieSummary>
          <S.OtherInformation>
            <h2>Elenco Original</h2>
            <S.WrapperCast>
              {credits &&
                credits.cast.slice(0, 10).map((cast) => {
                  return (
                    <Card
                      key={cast.id}
                      title={cast.name}
                      subtitle={cast.character}
                      src={apiConfig.imagemOriginal(cast.profile_path)}
                    />
                  );
                })}
            </S.WrapperCast>
            <Video id={id} />
            {/* {video && (
              <S.MovieTrailer>
                <iframe
                  title={video.name}
                  src={`https://youtube.com/embed/${video.key}`}
                />
              </S.MovieTrailer>
            )} */}

            <h2>Recomendações</h2>
            <S.MovieRecommendations>
              {recommendations &&
                recommendations.results.slice(0, 6).map((result) => {
                  return (
                    <Card
                      key={result.id}
                      title={result.title}
                      subtitle={result.release_date}
                      src={apiConfig.imagemOriginal(result.poster_path)}
                    />
                  );
                })}
            </S.MovieRecommendations>
          </S.OtherInformation>
        </>
      )}
    </>
  );
};

export default MovieDetails;
