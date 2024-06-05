import React, { useState } from 'react'
import {
  Botao,
  Card,
  Descricao,
  Div,
  Images,
  Titulo,
  ModalOverlay,
  ModalContent,
  ModalImage,
  ModalDetails,
  CloseButton
} from './styles'
import { useGetFeatureCardapioQuery } from '../../services/api'
import { useDispatch } from 'react-redux'
import { Cardapio } from '../pages/Product'
import { add, open } from '../../store/reducers/cart'

type Props = {
  cardapio: Cardapio
}

const GetDescricao = (descricao: string) => {
  if (descricao.length > 95) {
    return descricao.slice(0, 100) + '...'
  }
  return descricao
}
const Food = ({ cardapio }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => setModalOpen(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(cardapio))
    dispatch(open())
    handleCloseModal()
  }

  return (
    <Card>
      <div>
        <Images src={cardapio.foto} />
      </div>
      <Div>
        <Titulo>{cardapio.nome}</Titulo>
        <Descricao>{GetDescricao(cardapio.descricao)}</Descricao>
        <Botao onClick={handleOpenModal}>Adicionar ao carrinho</Botao>
      </Div>

      {isModalOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleCloseModal}>X</CloseButton>
            <ModalImage src={cardapio.foto} />
            <ModalDetails>
              <h2>{cardapio.nome}</h2>
              <p>{cardapio.descricao}</p>
              <Botao onClick={addToCart}>
                Adicionar ao Carrinho - R${cardapio.preco.toFixed(2)}
              </Botao>
            </ModalDetails>
          </ModalContent>
        </ModalOverlay>
      )}
    </Card>
  )
}

export default Food
