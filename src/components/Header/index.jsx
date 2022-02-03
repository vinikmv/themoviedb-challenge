import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/index.';
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
