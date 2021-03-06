import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar {
            width: .5rem
        }

        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
    }

    body {
        font-family: 'Lato', sans-serif;
    }

    h2 {
        font-size: 2.5rem;
        color: #ff7676;
        font-family: 'Indie Flower', cursive;
        /* font-family: 'Pacifico', cursive; */

        @media (max-width: 600px) {
            font-size: 2rem;
        }
    }

    h3 {
        font-size: 1.3rem;
        color: #333;
        padding: 1rem 0 ;
    }

    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    img {
        display: block;
    }
`

export default GlobalStyles