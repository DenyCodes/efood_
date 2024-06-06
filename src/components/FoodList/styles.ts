import { styled } from 'styled-components'

export const Container = styled.section`
  padding: 32px;
  gap: 30px;
  position: relative;
  top: -105px;
  margin-right: 127px;
`

export const List = styled.ul`
  gap: 30px;
  width: 68%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  img {
    max-width: 304px;
    width: 100%;
  }
`
export const Destaque = styled.div`
  margin-left: 210px;
  margin-top: 86px;
  position: absolute;
  color: #ffebd9;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  display: none;
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
