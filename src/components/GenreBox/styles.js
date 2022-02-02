import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  display: flex;
  background-color: #2d0c5e;
  flex-direction: column;
  width: 100%;
  height: 449px;

  ${media.greaterThan('medium')`
    align-items: center;
    justify-content: center;
  `}

  ${media.lessThan('medium')`
  height: 100vh;
  width: 100vh;
`}
`;

export const GenreContainer = styled.div`

`

export const Title = styled.h1`
  color: #ffffff;
  font-size: 48px;
  line-height: 56px;
  width: 781px;
  text-align: center;
  padding-bottom: 40px;

  ${media.lessThan('medium')`
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    width: 40vh;
    padding-top: 40px;
    padding-left: 16px
  `}
`;

export const FilterText = styled.h4`
  color: #ffffff;
  font-size: 14px;
  padding-bottom: 16px;
  text-transform: uppercase;

  ${media.lessThan('medium')`
    text-align: left;
    width: 40vh;
    padding-left: 16px
  `}
`;

export const Genres = styled.div`
  ${media.lessThan('medium')`
    text-align: left;
    width: 40vh;
    padding-left: 16px
  `}
`;
