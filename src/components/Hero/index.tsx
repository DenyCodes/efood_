import React from 'react'
import Tag from '../Tag'
import { Banner, Header, Carrinho, Restaurant, TituloP } from './styles'
import cart, { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type HeroProps = {
  titulo: string
  capa: string
}

const Hero = ({ titulo, capa }: HeroProps) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <Header>
        <Restaurant>
          <a href="/">Restaurantes</a>
        </Restaurant>
        <Carrinho onClick={openCart}>
          {items.length}Produtos no carrinho
        </Carrinho>
      </Header>
      <Banner style={{ backgroundImage: `url(${capa})` }}>
        <div className="container">
          <TituloP>
            <h1>{titulo}</h1>
          </TituloP>
        </div>
      </Banner>
    </>
  )
}

export default Hero
