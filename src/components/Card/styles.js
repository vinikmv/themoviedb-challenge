import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 176px;
  height: 100%;
  ${media.lessThan('medium')`
    width: 156px;
    padding-bottom: 20px;
`}
`;

export const Image = styled.img`
  border-radius: 4px;
  width: 100%;

  ${media.lessThan('medium')`
    width: 156px;
    height: 232px;
`}
`;

export const Title = styled.h3`
padding-top: 10px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const Subtitle = styled.h4`
  font-size: 14px;
  line-height: 24px;
  color: #646464;
`;
