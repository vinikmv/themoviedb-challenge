import React from 'react';
import * as S from './styles';
import { CloseCircle } from '@styled-icons/ionicons-sharp/CloseCircle';

const Button = ({ children }) => {
  return (
    <S.Wrapper>
      {!!children && <span>{children}</span>}
      <S.IconWrapper>
        <CloseCircle />
      </S.IconWrapper>
    </S.Wrapper>
  );
};

export default Button;
