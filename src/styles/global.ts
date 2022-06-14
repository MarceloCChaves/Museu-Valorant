import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --card: #FF4654;
        --red: #e52e4d;
        --blue: #1b77f3;
        --green: #33cc95;
        --black: #000000;
        --text-title: #ECE8E1;
        --text-body: #969cb3;
        --medium-grey: #a7a7a7;
        --deep-grey: #343434;
        --shape: #ffffff;
        --whitesmoke: #f9f9f9;
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
        background: var(--red);
        -webkit-font-smoothing: antialised;
    }
    body, input, textarea, button{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
    }
    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
`