import React, { useState } from 'react'
import {
  CartContainer,
  Overlay,
  Sidebar,
  Image,
  LI,
  Button,
  ButtonX,
  Prices,
  Input,
  Label,
  InlineInputs,
  Form,
  CardNumberInput,
  CVVInput,
  SmallInput,
  Finish,
  FinishP,
  Title,
  Text
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [step, setStep] = useState(1)
  const [deliveryData, setDeliveryData] = useState({
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: ''
  })
  const [paymentData, setPaymentData] = useState({
    nomeCartao: '',
    numeroCartao: '',
    cvv: '',
    mesVencimento: '',
    anoVencimento: ''
  })

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeFromCart = (itemId: number) => {
    dispatch(remove(itemId))
  }

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePreviousStep = () => {
    setStep(step - 1)
  }

  const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDeliveryData({ ...deliveryData, [name]: value })
  }

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentData({ ...paymentData, [name]: value })
  }

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target
    value = value.replace(/\D/g, '')
    if (value.length > 8) value = value.slice(0, 8)
    setDeliveryData({ ...deliveryData, cep: value })
  }

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleNextStep()
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica para finalizar pedido
    console.log('Delivery data:', deliveryData)
    console.log('Payment data:', paymentData)
  }

  const totalAmount = items
    .reduce((acc, item) => acc + item.preco, 0)
    .toFixed(2)

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {step === 1 && (
          <>
            <ul>
              {items.map((item) => (
                <LI key={item.id}>
                  <Image src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>R$: {item.preco.toFixed(2)}</span>
                    <ButtonX onClick={() => removeFromCart(item.id)} />
                  </div>
                </LI>
              ))}
            </ul>
            <Prices>
              <span>Valor Total :</span>
              <span>{totalAmount} Reais</span>
            </Prices>
            <Button onClick={handleNextStep}>Continuar com a entrega</Button>
          </>
        )}
        {step === 2 && (
          <Form onSubmit={handleDeliverySubmit}>
            <h3>Informações de Entrega</h3>
            <Label>
              Nome:
              <Input
                type="text"
                name="nome"
                value={deliveryData.nome}
                onChange={handleDeliveryChange}
                required
              />
            </Label>
            <Label>
              Endereço:
              <Input
                type="text"
                name="endereco"
                value={deliveryData.endereco}
                onChange={handleDeliveryChange}
                required
              />
            </Label>
            <Label>
              Cidade:
              <Input
                type="text"
                name="cidade"
                value={deliveryData.cidade}
                onChange={handleDeliveryChange}
                required
              />
            </Label>
            <InlineInputs>
              <Label>
                CEP:
                <SmallInput
                  type="text"
                  name="cep"
                  value={deliveryData.cep}
                  onChange={handleCEPChange}
                  required
                />
              </Label>
              <Label>
                Número:
                <SmallInput
                  type="text"
                  name="numero"
                  value={deliveryData.numero}
                  onChange={handleDeliveryChange}
                  required
                />
              </Label>
            </InlineInputs>
            <Label>
              Complemento:
              <Input
                type="text"
                name="complemento"
                value={deliveryData.complemento}
                onChange={handleDeliveryChange}
              />
            </Label>
            <Button type="submit">Continuar para Pagamento</Button>
            <Button type="button" onClick={handlePreviousStep}>
              Voltar ao Carrinho
            </Button>
          </Form>
        )}
        {step === 3 && (
          <Form onSubmit={handlePaymentSubmit}>
            <h3>Pagamento - Valor a pagar: R$ {totalAmount}</h3>
            <Label>
              Nome no Cartão:
              <Input
                type="text"
                name="nomeCartao"
                value={paymentData.nomeCartao}
                onChange={handlePaymentChange}
                required
              />
            </Label>
            <InlineInputs>
              <Label>
                Número do Cartão:
                <CardNumberInput
                  type="text"
                  name="numeroCartao"
                  value={paymentData.numeroCartao}
                  onChange={handlePaymentChange}
                  required
                />
              </Label>
              <Label>
                CVV:
                <CVVInput
                  type="text"
                  name="cvv"
                  value={paymentData.cvv}
                  onChange={handlePaymentChange}
                  required
                />
              </Label>
            </InlineInputs>
            <InlineInputs>
              <Label>
                Mês de Vencimento:
                <SmallInput
                  type="text"
                  name="mesVencimento"
                  value={paymentData.mesVencimento}
                  onChange={handlePaymentChange}
                  required
                />
              </Label>
              <Label>
                Ano de Vencimento:
                <SmallInput
                  type="text"
                  name="anoVencimento"
                  value={paymentData.anoVencimento}
                  onChange={handlePaymentChange}
                  required
                />
              </Label>
            </InlineInputs>
            <Button type="button" onClick={handlePreviousStep}>
              Voltar para Entrega
            </Button>
            <Button onClick={handleNextStep}>Finalizar Pedido</Button>
          </Form>
        )}
        {step === 4 && (
          <div>
            <FinishP>
              <Title>Pedido realizado </Title>
              <Text>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </Text>
              <Text>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </Text>
              <Text>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </Text>
              <Text>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </Text>
            </FinishP>
            <Button onClick={closeCart}>Concluir</Button>
          </div>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
