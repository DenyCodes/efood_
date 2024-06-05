import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  laranja: '#E66767',
  amarelo: '#FFEBD9',
  branco: '#FFF8F2',
  branco2: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.branco};
    color: ${cores.laranja};
  }
  .container {
    width: 1024px;
    margin: auto;
  }
`
