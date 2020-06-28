import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('//fonts.googleapis.com/earlyaccess/notosanskr.css');
    @import url('//fonts.googleapis.com/css?family=Anton|Bangers|Bebas+Neue|IBM+Plex+Sans&display=swap');
    body {
        min-width : 375px;
        padding : 0;
        margin : 0;
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    * {
        box-sizing : inherit;
    }
    a {
        text-decoration : inherit;
        color: inherit
    }
`;
