import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DeliveryContainer, Form, Input, Button } from './styles'

const Delivery = () => {
  const [form, setForm] = useState({
    recipient: '',
    address: '',
    city: '',
    zip: '',
    number: '',
    complement: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode despachar uma ação ou redirecionar para outra página
  }

  return (
    <DeliveryContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          name="recipient"
          placeholder="Nome do destinatário"
          value={form.recipient}
          onChange={handleChange}
        />
        <Input
          name="address"
          placeholder="Endereço"
          value={form.address}
          onChange={handleChange}
        />
        <Input
          name="city"
          placeholder="Cidade"
          value={form.city}
          onChange={handleChange}
        />
        <Input
          name="zip"
          placeholder="CEP"
          value={form.zip}
          onChange={handleChange}
        />
        <Input
          name="number"
          placeholder="Número"
          value={form.number}
          onChange={handleChange}
        />
        <Input
          name="complement"
          placeholder="Complemento"
          value={form.complement}
          onChange={handleChange}
        />
        <Button type="submit">Finalizar</Button>
      </Form>
    </DeliveryContainer>
  )
}

export default Delivery
