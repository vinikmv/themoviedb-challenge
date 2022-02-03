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
    height: 100%;
    padding-bottom: 20px;
  `}
`;

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
    width:100%;
    padding-top: 40px;
    padding-left: 16px;
    padding-right: 60px
  `}
`;

export const FilterText = styled.h4`
  color: #ffffff;
  font-size: 14px;
  padding-bottom: 16px;
  text-transform: uppercase;

  ${media.lessThan('medium')`
    text-align: left;
    width: 60vh;
    padding-left: 16px
  `}
`;

export const Genres = styled.div`
  text-align: center;
  width: 100%;

  ${media.lessThan('medium')`
    margin: 0;
    text-align: left;
    padding-right: 16px
  `}
`;
