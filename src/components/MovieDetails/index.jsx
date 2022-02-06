import apiConfig from 'api/config';
import tmdbApi from 'api/tmdbApi';
import Card from 'components/Card';
import Video from 'components/Video';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { formatDate, formatGenres, formatRunTime } from 'utils/formatFunctions';
import * as S from './styles';

const MovieDetails = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [certification, setCertification] = useState(null);
  const [credits, setCredits] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    const params = { language: 'pt-br' };
    const getMovieDetails = async () => {
      const response = await tmdbApi.getMovieDetails(id, { params });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getMovieDetails();
  }, [id]);

  useEffect(() => {
    const getMovieCertification = async () => {
      let response = await tmdbApi.getMovieReleaseDates(id);
      response = response.results.find(
        (result) =>
          result.iso_3166_1 === 'BR' &&
          result.release_dates.find((item) => item.certification !== '')
      );
      setCertification(response);
    };
    getMovieCertification();
  }, [id]);

  useEffect(() => {
    const getMovieCredits = async () => {
      const response = await tmdbApi.getMovieCredits(id);
      setCredits(response);
    };
    getMovieCredits();
  }, [id]);

  useEffect(() => {
    const params = { language: 'pt-br' };
    const getMovieRecommendations = async () => {
      const response = await tmdbApi.getMovieRecommendations(id, { params });
      setRecommendations(response);
    };
    getMovieRecommendations();
  }, [id]);

  const formatSummaryDate = (date) => {
    const dateAux = new Date(date);
    const day = dateAux.getUTCDate();
    const month = dateAux.getMonth() + 1;
    const year = dateAux.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <>
      {item && (
        <>
          <Helmet>
            <meta
              name="description"
              content={`Detalhes do filme ${item.title}`}
            />
            <title>TMDB - Detalhes do Filme</title>
          </Helmet>
          <S.MovieSummary>
            <S.Poster
              src={
                item.poster_path || item.backdrop_path
                  ? apiConfig.imagemOriginal(
                      item.poster_path || item.backdrop_path
                    )
                  : '/img/moviePosterNotFound.png'
              }
            ></S.Poster>
            <S.MovieDetails>
              <S.MovieTitle>
                {item.title} ({item.release_date.slice(0, 4)})
              </S.MovieTitle>
              <S.MovieInformation>
                {certification && (
                  <>
                    <span>
                      {certification.release_dates.find(
                        (item) => item.certification !== ''
                      ).certification === 'L'
                        ? 'Livre '
                        : certification.release_dates[0].certification +
                          ' anos'}
                    </span>
                    <i> • </i>

                    <span>
                      {item && formatSummaryDate(item.release_date)} (
                      {certification.iso_3166_1})
                    </span>
                    <i> • </i>
                  </>
                )}
                <span>{item.genres && formatGenres(item.genres)}</span>
                <i> • </i>
                <span>{formatRunTime(item.runtime)}</span>
              </S.MovieInformation>
              <S.Rating>
                <S.RatingCircleWrapper>
                  <S.RatingCircleFill ratingNumber={item.vote_average * 10}>
                    <S.RatingCircleText>
                      {item.vote_average * 10} %
                    </S.RatingCircleText>
                  </S.RatingCircleFill>
                </S.RatingCircleWrapper>
                <S.RatingText>
                  <span>Avaliação dos usuários</span>
                </S.RatingText>
              </S.Rating>
              <S.Overview>
                <h3>Sinopse</h3>
                <span>{item.overview}</span>
              </S.Overview>
              <S.MovieCrew>
                {credits &&
                  credits.crew.slice(0, 5).map((crew, index) => {
                    return (
                      <Card
                        key={index}
                        title={crew.name}
                        subtitle={crew.department}
                      />
                    );
                  })}
              </S.MovieCrew>
            </S.MovieDetails>
          </S.MovieSummary>
          <S.OtherInformation>
            <h2>Elenco Original</h2>
            <S.WrapperCast>
              {credits &&
                credits.cast.slice(0, 10).map((cast, index) => {
                  return (
                    <Card
                      key={index}
                      title={cast.name}
                      subtitle={cast.character}
                      src={
                        cast.profile_path
                          ? apiConfig.imagemOriginal(cast.profile_path)
                          : '/img/imageNotFound.jpg'
                      }
                    />
                  );
                })}
            </S.WrapperCast>
            <Video id={id} />
            <h2>Recomendações</h2>
            <S.MovieRecommendations>
              {recommendations &&
                recommendations.results.slice(0, 6).map((result, index) => {
                  return (
                    <Card
                      key={index}
                      title={result.title}
                      subtitle={formatDate(result.release_date)}
                      src={
                        result.poster_path || result.backdrop_path
                          ? apiConfig.imagemOriginal(
                              result.poster_path || result.backdrop_path
                            )
                          : '/img/moviePosterNotFound.png'
                      }
                      isMovie={true}
                      id={result.id}
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
