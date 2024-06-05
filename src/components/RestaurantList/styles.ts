import { styled } from 'styled-components'

export const Container = styled.section`
  padding: 32px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 2fr 2fr;
  column-gap: 60px;
  img {
    max-width: 472px;
    width: 100%;
  }
`
export const Destaque = styled.div`
  margin-left: 265px;
  margin-top: 93px;
  position: absolute;
  color: #ffebd9;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 121px;
  height: 30px;
  padding-top: 3px;
  z-index: 1;
  flex-shrink: 0;
  background: #e66767;
  a {
    text-decoration: none;
    color: #ffebd9;
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 6px;
  }
`
