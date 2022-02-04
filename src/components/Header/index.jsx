import Logo from 'components/Logo/index.';
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <Link to="/">
        <Logo />
      </Link>
    </S.Container>
  );
};

export default Header;
