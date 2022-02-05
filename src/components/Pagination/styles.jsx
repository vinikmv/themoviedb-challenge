import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-left: 32px;
  }

  ${media.lessThan('medium')`
  button { 
    margin-left: 0;
  }
  button:first-child {
    margin-right: 20px;
  }

 
  button:last-child {
    margin-left: 20px;
  } 
`}
`;
const wrapperModifiers = {
  borderBottom: () => css`
    border-bottom: 3px solid #5c16c5;
  `,
};

export const WrapperNumberButtons = styled.div`
    display: inline-flex;
    gap: 40px;

    ${media.lessThan('medium')`
      gap: 20px;
      margin-left: 25px;
      margin-right: 25px;
`}
`;

export const Button = styled.button`
${({ isActive }) => css`
  border: none;
  background: #ffffff;
  cursor: pointer;
  height: 24px;

  span {
    color: #5c16c5;
    font-size: 16px;
    font-weight: 700;
    pointer-events: pointer;
    ${isActive && wrapperModifiers.borderBottom()}
  }
  `}
`;

export const RightArrow = styled.i`
  border: solid #5c16c5;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

export const LeftArrow = styled.i`
  border: solid #5c16c5;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;
