import React from 'react'
import {
  CartContainer,
  Overlay,
  Sidebar,
  Image,
  LI,
  Button,
  Prices,
  ButtonX
} from './styles'
import image from '../../images/japo.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { add, close, removeItem } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const addToCart = (itemId: number) => {
    const item = items.find((item) => item.id === itemId)
    if (item) {
      dispatch(add(item))
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <LI key={item.id}>
              <Image src={item.foto || image} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>R$: {item.preco.toFixed(2)}</span>
                <ButtonX onClick={() => dispatch(removeItem(item.id))} />
              </div>
            </LI>
          ))}
        </ul>
        <Prices>
          <span>Valor Total :</span>
          <span>
            R$ {items.reduce((total, item) => total + item.preco, 0).toFixed(2)}
          </span>
        </Prices>
        <Button onClick={() => addToCart(1)}>continuar com a entrega</Button>{' '}
        {/* Passar o id correto do item */}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
