import { styled } from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  flex-shrink: 0;
  background-color: #e66767;
  position: relative;
  left: 50px;
  padding: 8px;
`

export const Titulo = styled.h3`
  color: #ffebd9;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`
export const Descricao = styled.p`
  color: #ffebd9;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  width: 304px;
  margin-top: 8px;
  line-height: 22px; /* 157.143% */
`
export const Infos = styled.div`
  position: absolute;
  top: 86px;
  right: 16px;
`
export const Images = styled.img`
  width: 280px;
  height: 167px;
  flex-shrink: 0;
  margin: 0;
`
export const Div = styled.div`
  margin-top: 8px;
  width: 304px;
  height: 181px;
  flex-shrink: 0;
`
export const Star = styled.div`
  width: 21px;
  height: 21px;
  flex-shrink: 0;
  margin-left: 435px;
  position: absolute;
`
export const Botao = styled.div`
  cursor: pointer;
  margin-top: 20px;
  width: 304px;
  height: 24px;
  flex-shrink: 0;
  background: #ffebd9;
  color: #e66767;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 2px;

  a {
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  width: 1052px;
  height: 370px;
  flex-shrink: 0;
  color: white;
  background: #e66767;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1001;
  display: flex;
  align-items: center;
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-right: 20px;
`

export const ModalDetails = styled.div`
  display: flex;
  gap: 20px;
  display: flex;
  flex-direction: column;
  top: -54px;
  position: relative;
  flex-direction: column;
  p {
    color: #fff;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`
