import React from 'react';
import ConditionalLink from 'utils/ConditionalLink';
import * as S from './styles';

const Card = ({ src, title, subtitle, isMovie = false, id }) => {
  const link = `/movie/${id}`;
  return (
    <S.Container>
      <ConditionalLink to={link} isMovie={isMovie}>
        {!!src && <S.Image alt={title} src={src}></S.Image>}
        {!!title && <S.Title>{title}</S.Title>}
        {!!subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      </ConditionalLink>
    </S.Container>
  );
};

export default Card;
