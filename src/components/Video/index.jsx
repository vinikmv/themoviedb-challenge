import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import tmdbApi from '../../api/tmdbApi';
import YouTube from 'react-youtube';

const Video = ({ id }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const params = { language: 'pt-br' };
    const getMovieVideos = async () => {
      let response = await tmdbApi.getMovieVideos(id, { params });
      response = response.results.find((result) =>
        result['name'].includes('Trailer Oficial')
      );
      setVideo(response);
    };
    getMovieVideos();
  }, [id]);
  return (
    <>
      <h2>Trailer</h2>
      {video && (
        <S.YoutubeVideo videoId={video.key} title={video.name}></S.YoutubeVideo>
      )}
    </>
  );
};

export default Video;
