import React from 'react';
import * as S from './styles';

const Pagination = ({
  currentPage,
  goToFirstPage,
  goToLastPage,
  goToPreviousPage,
  goToNextPage,
  changePage,
  getPaginationGroup,
  pages,
  isMobile,
}) => {
  return (
    <S.Container>
      {currentPage !== 1 ? (
        <S.Button onClick={goToFirstPage}>
          <span>Primeira</span>
        </S.Button>
      ) : null}
      {currentPage === 1 ? null : (
        <S.Button onClick={goToPreviousPage}>
          <S.LeftArrow />
        </S.Button>
      )}
      <S.WrapperNumberButtons>
        {getPaginationGroup().map((item, index) => (
          <S.Button
            key={index}
            onClick={changePage}
            isActive={currentPage === item ? true : false}
          >
            <span>{item}</span>
          </S.Button>
        ))}
      </S.WrapperNumberButtons>
      {currentPage !== pages ? (
        <S.Button onClick={goToNextPage}>
          <S.RightArrow />
        </S.Button>
      ) : null}
      {currentPage === pages ? null : (
        <S.Button onClick={goToLastPage}>
          <span>Última</span>
        </S.Button>
      )}
    </S.Container>
  );
};

export default Pagination;
