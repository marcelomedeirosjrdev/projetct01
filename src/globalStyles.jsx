import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `

*{

    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

#root{
    height: 100%;
    width: 100%
}

body{
    background-color: #fef7e6;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    font-family: Roboto, san-serif;
}

`

export default GlobalStyle 