import styled from 'styled-components'

export const Banner = styled.div`
  top: -210px;

  position: relative;
  width: 100%;
  height: 280px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    content: '';
    opacity: 0.56;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  position: absolute;
  top: 0;
  z-index: 1;
  top: 84px;
  @media (min-width: 768px) {
    padding: 10px 50px;
  }

  @media (min-width: 1200px) {
    padding: 10px 100px;
  }
`

export const Restaurant = styled.div`
  color: #e66767;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;

  a {
    color: #e66767;
    text-decoration: none;
    display: flex;
  }
`

export const Carrinho = styled.a`
  display: flex;
  color: #e66767;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
`

export const TituloP = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 900;
  position: relative;
  z-index: 1;
  padding-top: 197px;
  margin-left: -74px;

  h1 {
    margin: 0;
  }
`
