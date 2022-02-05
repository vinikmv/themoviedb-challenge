import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 29px 112px;
  padding-bottom: 49px;
  gap: 32px;
  justify-content: center;

  ${media.lessThan('medium')`
    margin: 29px 16px;
    gap: 16px;
    padding-bottom: 75px;
`}
`;
