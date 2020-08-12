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
    @keyframes popUp {
        0% {
            transform:translateY(100%);
        }
        20% {
            transform:translateY(-100%);
        }
        40% {
            transform:translateY(-100%);
        }
        45% {
            transform:matrix(1, 0.1, 0.2, 1, 0, -40);
        }
        51% {
            transform:matrix(1, -0.1, -0.2, 1, 0, -40);
        }
        55% {
            transform:translateY(-100%);
        }
        80% {
            transform:translateY(-100%);
        }
        100% {
            transform:translateY(100%);
        }
    }
    .message_container {
        position : fixed;
        width :30rem;
        bottom : 0;
        left : 0;
        z-index: 1000;
    }
    .message_wrap {
        padding : 0.5rem 2rem;
        background : black;
        position :absolute;
        bottom : 0;
        left : 2rem;
        animation-duration: 5s;
        animation-name: popUp;
        border-radius : 5px;
    }
    .message_text {
        color : white;
        text-align:center;
    }
`;
