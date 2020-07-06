import { createGlobalStyle } from 'styled-components';
import font from './font';
import palette from './palette';

export const GlobalStyle = createGlobalStyle`
    @import url('//fonts.googleapis.com/earlyaccess/notosanskr.css');
    @import url('//fonts.googleapis.com/css?family=Anton|Bangers|Bebas+Neue|IBM+Plex+Sans&display=swap');
    body {
        min-width : 850px;
        padding : 0;
        margin : 0 auto;
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    * {
        box-sizing : inherit;
        ${font.normalFont}
    }
    a {
        text-decoration : inherit;
        color: inherit
    }
    .scroll::-webkit-scrollbar {
        width: 10px;
    }
    .scroll::-webkit-scrollbar-thumb {
        background-color: ${palette.gray5};
        border-radius: 10px;
        background-clip: padding-box;
        border: 2px solid transparent;
    }
    .scroll::-webkit-scrollbar-track {
        display : none;
    }
`;
