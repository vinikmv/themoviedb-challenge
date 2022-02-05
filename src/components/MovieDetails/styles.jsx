import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as CardStyles from '../Card/styles';

export const MovieSummary = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2d0c5e;
  height: auto;
  min-height: 600px;
  width: 100%;
  color: #ffffff;
  position: relative;

  ${media.lessThan('medium')`
    height: 100%;
    flex-direction: column;
    align-items: center;
  `}
`;

export const Poster = styled.img`
  ${({ src }) => css`
    background-image: url(${src});
  `}

  height: 574px;
  width: 383px;
  position: absolute;
  top: 72px;
  left: 112px;
  border-radius: 8px;

  ${media.lessThan('medium')`
    min-width: 186px;
    min-height: 279px;
    position: static;
    padding-top: 34px;

  `}
`;
export const MovieDetails = styled.section`
  padding-left: 528px;
  padding-top: 72px;
  height: auto;
  ${media.lessThan('medium')`
    padding-left: 16px;
  `}
`;
export const MovieTitle = styled.h1`
  padding-bottom: 8px;

  ${media.lessThan('medium')`
  padding-bottom: 3px;
  `}
`;
export const MovieInformation = styled.div`
  font-size: 18px;
  line-height: 24px;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    width: 328px;

    i {
      display: none;
    }:
  `}
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
  }

  ${media.lessThan('medium')`
    padding-right: 14px;
  `}
`;
export const MovieCrew = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 696px;
  flex-wrap: wrap;

  ${media.lessThan('medium')`
    padding-right: 14px;
  `}

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

export const OtherInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 112px;
  padding-right: 97px;

  ${media.lessThan('medium')`
    padding-left: 16px;
    padding-right: 0;

    h2 {
      padding-bottom: 10px;
    }
  `}

  h2 {
    padding-top: 74px;
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
  gap: 26px;

  ${CardStyles.Container} {
    min-width: 191px;
    min-height: 336px;
    gap: 16px;
    padding: 8px;

    border-radius: 4px;
    box-shadow: 0px 4px 4px 0px #00000040;

    &:first-child {
      margin-left: 5px;
    }
  }

  ${CardStyles.Image} {
    max-width: 175px;
    max-height: 222px;
  }

  ${CardStyles.Title} {
    max-width: 174px;
  }

  ${CardStyles.Subtitle} {
    font-size: 16px;
    font-weight: 400;
    max-width: 174px;
    height: 48px;
  }
`;

export const MovieTrailer = styled.video`
  max-width: 907px;
  max-height: 510px;
  width: auto;
  height: auto;
  /* background-color: grey; */

  ${media.lessThan('medium')`
      width: 324px;
      min-height: 182px;
  `}
`;

export const MovieRecommendations = styled.div`
  display: inline-flex;
  gap: 32px;
  justify-content: start;
  flex-wrap: wrap;

  ${CardStyles.Container} {
    min-width: 176px;
    min-height: 264px;
  }
  ${media.lessThan('medium')`
      gap: 16px;
      justify-content: center;
  `}
`;
