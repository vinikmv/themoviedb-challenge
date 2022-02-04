import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const wrapperModifiers = {
  isActive: () => css`
    background-color: rgba(209, 128, 0, 1);
  `,
};

export const Wrapper = styled.button`
  ${({ isActive }) => css`
    background-color: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border: 0;
    cursor: pointer;
    text-decoration: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;

    height: 40px;
    margin-left: 12px;
    margin-bottom: 20px;
    text-align: center;
    padding: 8px 16px;
    ${isActive && wrapperModifiers.isActive()}

    &:hover {
      background-color: rgba(209, 128, 0, 1);
    }

    ${media.lessThan('medium')`
  height: 32px;
  font-size: 14px;
  padding: 6px 20px;
  `}
  `}
`;

export const IconWrapper = styled.div`
  width: 16.67px;
  height: 16.67px;
  color: #ffffff;
  margin-left: 9.67px;
  margin-top: 2.5px;
  display: flex;
`;
