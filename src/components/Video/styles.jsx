import YouTube from 'react-youtube';
import styled from 'styled-components';
import media from 'styled-media-query';

export const YoutubeVideo = styled(YouTube)`
max-width: 907px;
height: 510px;
object-fit: cover;
width: 100%;


${media.lessThan('medium')`
    min-width: 324px;
    min-height: 182px;
    height: auto;
    width: 90%;

`}
`
