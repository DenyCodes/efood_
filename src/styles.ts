import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  laranja: '#E66767',
  amarelo: '#FFEBD9',
  branco: '#FFF8F2',
  branco2: '#FFFFFF'
}
export const BreakPoints = {
  desktop: '1024px',
  tablet: '768px;'
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
    @media (max-width: ${BreakPoints.desktop}) {
      max-width: 80%;
    }
  }
`
