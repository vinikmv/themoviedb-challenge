import tmdbApi from 'api/tmdbApi';
import React, { useEffect, useState } from 'react';
import * as S from './styles';

const Video = ({ id }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const params = { language: 'pt-br' };
    const getMovieVideos = async () => {
      let response = await tmdbApi.getMovieVideos(id, { params });

      response = response.results.find(
        (result) =>
          result['name'].includes('Trailer Oficial') ||
          result['name'].includes('Trailer')
      );
      setVideo(response);
    };
    getMovieVideos();
  }, [id]);
  return (
    <>
      {video && (
        <>
          <h2>Trailer</h2>
          <S.YoutubeVideo
            videoId={video.key}
            title={video.name}
          ></S.YoutubeVideo>
        </>
      )}
    </>
  );
};

export default Video;
