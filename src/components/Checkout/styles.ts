import styled from 'styled-components'

export const DeliveryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`
