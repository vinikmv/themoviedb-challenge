import React from 'react';
import * as S from './styles';

const Card = ({src, title, subtitle}) => {
  return (
    <S.Container>
    <S.Image src='https://www.thedb.org/t/p/w440_and_h660_face/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg'></S.Image>
    <S.Title>Homem-Aranha: Sem Volta Para Casa</S.Title>
    <S.Subtitle>15 de dez de 2021</S.Subtitle>
    </S.Container>
  );
};

export default Card;
