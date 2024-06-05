import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.laranja};
  color: ${cores.branco};
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 8px 16px;
  width: 113px;
  display: inline-block;
`
export const Nota = styled.div`
  color: #e66767;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 400px;
  top: 310px;
  position: absolute;
`
export const Saibamais = styled.div`
  color: #ffebd9;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  margin-top: 120px;
  background: #e66767;
  width: 90px;
  height: 30px;
  padding-top: 4px;
  a {
    text-decoration: none;
    color: #fff;
  }
`
