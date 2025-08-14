import { useEffect, useState } from 'react'
import ProductsList from '../../RestaurantList'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string[]
  capa: string
  cardapio: [
    foto: string,
    preco: number,
    id: number,
    nome: string,
    descricao: string,
    porcao: string
  ]
}

const Home = () => {
  const [restaurant, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <ProductsList restaurants={restaurant} />
    </>
  )
}

export default Home
