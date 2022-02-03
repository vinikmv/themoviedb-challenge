import styled from 'styled-components';
import media from 'styled-media-query';

import * as CardStyles from '../Card/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2d0c5e;
  height: 600px;
  width: 100%;
  color: #ffffff;
`;
export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Poster = styled.img`
  height: 574px;
  width: 383px;
  position: absolute;
  top: 72px;
  left: 112px;
  border-radius: 8px;
`;
export const MovieDetails = styled.section`
  padding-left: 528px;
  padding-top: 72px;
`;
export const MovieTitle = styled.h1`
  padding-bottom: 8px;
`;
export const MovieInformation = styled.span`
  font-size: 18px;
  line-height: 24px;
`;
export const Rating = styled.div`
  padding-bottom: 32px;

  span {
    font-size: 16px;
    line-height: 20px;
  }
`;
export const Overview = styled.div`
  max-width: 696px;
  padding-bottom: 24px;
  h3 {
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 8px;
  }

  span {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: -0, 5%;
  }
`;
export const MovieCrew = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 696px;
  flex-wrap: wrap;

  ${CardStyles.Container} {
    margin-right: 33px;
    padding-bottom: 24px;
  }

  ${CardStyles.Title} {
    color: #ffffff;
    max-width: 174px;
  }

  ${CardStyles.Subtitle} {
    color: #ffffff;
    font-weight: 400;
    max-width: 174px;
  }
`;

export const MovieCast = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 74px;
  padding-left: 112px;
  padding-right: 97px;

  
  h2 {
    font-size: 28px;
    line-height: 32px;
    padding-bottom: 24px;
  }

`;

export const WrapperCast = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  overflow: auto;
  padding-bottom: 26px;
  padding-right: 26px;
  
  ${CardStyles.Container} {
    min-width: 191px;
    min-height: 336px;
    margin-right: 16px;
    margin-left: 5px;
    padding: 8px;

    /* border: 1px solid #ccc; */
    border-radius: 4px;
    box-shadow: 0px 4px 4px 0px #00000040;
  }

  ${CardStyles.Image} {
    max-width: 175px;
    max-width: 222px;
  }

  ${CardStyles.Title} {
    max-width: 174px;
  }

  ${CardStyles.Subtitle} {
    font-weight: 400;
    max-width: 174px;
  }
`;
