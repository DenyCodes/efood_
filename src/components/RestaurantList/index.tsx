import Restaurants from '../Restaurant'
import { Restaurant } from '../pages/Home'
import { Container, Destaque, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <div>
      <List className="container">
        <Destaque>
          {' '}
          <a href=""> Destaque da semana</a>
        </Destaque>
        {restaurants.map((restaurants) => (
          <Restaurants
            key={restaurants.id}
            capa={restaurants.capa}
            titulo={restaurants.titulo}
            descricao={restaurants.descricao}
            id={restaurants.id}
            tipo={restaurants.tipo}
            avaliacao={restaurants.avaliacao}
            cardapio={[]}
            RestaurantToLink={`/restaurant/${restaurants.id}`}
          />
        ))}{' '}
      </List>
    </div>
  </Container>
)

export default RestaurantList
