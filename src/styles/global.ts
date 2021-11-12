import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: linear-gradient(to right, #cb2d3e, #ef473a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;
        --card: #FF4654;
        --red: #e52e4d;
        --green: #33cc95;

        --blue-light: #6933ff;

        --text-title: #ECE8E1;
        --text-body: #969cb3;

        --shape: #ffffff;
        --text: #000000;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialised;
    }
    body, input, textarea, button{
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }
    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`