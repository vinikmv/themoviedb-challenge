import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.header`
display: flex;
background-color: #5C16C5;
height: 56px;
width: 100%;
align-items: center;
padding-left: 112px;

${media.lessThan('medium')`
  justify-content: center;
  padding-left: 0;
`}
`