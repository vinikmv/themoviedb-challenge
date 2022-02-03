import React from 'react';
import * as S from './styles';

const Card = ({ src, title, subtitle }) => {
  return (
    <S.Container>
      <S.Image src={src}></S.Image>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
};

export default Card;
