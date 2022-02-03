import React from 'react';
import * as S from './styles';

const Card = ({ src, title, subtitle }) => {
  return (
    <S.Container>
      {!!src && <S.Image src={src}></S.Image>}
      {!!title && <S.Title>{title}</S.Title>}
      {!!subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    </S.Container>
  );
};

export default Card;
