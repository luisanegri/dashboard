import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        height: 100%
    } 

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Barlow', sans-serif;
    }

    button {
        cursor: pointer
    }

    h1 {
        font-weight: 500;
        font-size: 16px;
    }

    h3 {
        font-size: 15px;
    }

    p, span, a {
        font-size: 14px;
    }

`;
