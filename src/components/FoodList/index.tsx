import Foods from '../Food'
import { Cardapio } from '../pages/Product'
import { Container, List } from './styles'

export type Props = {
  foods: Cardapio[]
}

const FoodList = ({ foods }: Props) => {
  if (foods.length === 0) {
    return <p>No foods available</p> // Verificação para quando não há dados
  }

  return (
    <Container>
      <div>
        <List className="container">
          {foods.map((food) => (
            <Foods
              key={food.id}
              cardapio={food} // Passando o objeto food completo
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default FoodList
