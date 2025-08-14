import { useParams } from 'react-router-dom'
import Hero from '../../Hero'
import { useEffect, useState } from 'react'
import FoodList from '../../FoodList'

export type Cardapio = {
  nome: string
  foto: string
  preco: number
  id: number
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  capa: string
  cardapio: Cardapio[]
}

const Product = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        console.log('Data from API:', data) // Log para verificar a resposta da API
        const foundRestaurant = data.find((r: any) => r.id.toString() === id)
        if (foundRestaurant) {
          setRestaurant(foundRestaurant)
        }
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [id])

  if (!restaurant) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Hero titulo={restaurant.titulo} capa={restaurant.capa} />
      <FoodList foods={restaurant.cardapio} />
    </>
  )
}
export default Product
