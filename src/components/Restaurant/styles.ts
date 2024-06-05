import { styled } from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 472px;
  padding-top: 80px;
  position: relative;
  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 200px;
  margin-bottom: 16px;
`
export const Descricao = styled.p`
  color: #e66767;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  width: 456px;
  background-color: ${cores.branco2};
`
export const Infos = styled.div`
  position: absolute;
  top: 86px;
  right: 16px;
`
export const Images = styled.img`
  width: 472px;
  height: 217px;
  flex-shrink: 0;
  margin: 0;
`
export const Div = styled.div`
  width: 472px;
  height: 230px;
  flex-shrink: 0;
  border-right: 1px solid #e66767;
  border-bottom: 1px solid #e66767;
  border-left: 1px solid #e66767;
  background: #fff;
  padding: 8px 7px;
`
export const Star = styled.div`
  width: 21px;
  height: 21px;
  flex-shrink: 0;
  margin-left: 435px;
  position: absolute;
`
export const Tipo = styled.div`
  width: 61px;
  height: 31px;
  flex-shrink: 0;
  background: #e66767;
  color: #ffebd9;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  margin-left: 400px;
  margin-top: 13px;
  padding-top: 9px;
`
