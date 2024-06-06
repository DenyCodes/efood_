import { styled } from 'styled-components'
import { cores } from '../../styles'
import fechar from '../../images/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.laranja};
  z-index: 1;
  color: #fff;
  padding: 40px 16px 0 16px;
`
export const Image = styled.img`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  object-fit: cover;
  margin-left: 10px;
`
export const LI = styled.li`
  margin-bottom: 10px;
  align-items: center;
  display: flex;
  color: #fff;
  width: 344px;
  height: 100px;
  background-color: ${cores.amarelo};
  h3 {
    top: -20px;
    position: relative;
    color: #e66767;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-left: 8px;
  }
  span {
    width: 67px;
    margin-left: 8px;
    color: #e66767;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
`
export const Button = styled.button`
  width: 344px;
  border: none;
  height: 24px;
  flex-shrink: 0;
  background-color: ${cores.amarelo};
  color: ${cores.laranja};
`
export const Prices = styled.div`
  color: #ffebd9;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 40px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const ButtonX = styled.button`
  cursor: pointer;
  background-image: url(${fechar});
  width: 16px;
  background-color: transparent;
  right: 20px;
  margin-top: 25px;
  position: absolute;
  height: 16px;
  flex-shrink: 0;
  border: none;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Input = styled.input`
  width: 344px;
  height: 32px;
  flex-shrink: 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const InlineInputs = styled.div`
  display: flex;
  gap: 10px;
`

export const SmallInput = styled(Input)`
  width: calc((344px - 10px) / 2);
`

export const CardNumberInput = styled(Input)`
  width: calc((344px * 2 / 3) - 5px);
`

export const CVVInput = styled(Input)`
  width: calc((344px / 3) - 5px);
`
export const Finish = styled.h1`
  color: #ffebd9;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const FinishP = styled.p`
  width: 344px;
  color: #ffebd9;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`
export const Title = styled.h2`
  margin-bottom: 20px;
`

export const Text = styled.p`
  margin-bottom: 30px;
  text-align: justify;
`
