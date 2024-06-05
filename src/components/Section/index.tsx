import image from '../../images/image 3.png'
import { Bottom, Card, Descricao, Titulo } from './styles'
const Section = () => (
  <>
    <Card className="container">
      <div>
        <img src={image} />
      </div>
      <div>
        <Titulo>Pizza Marguerita</Titulo>
        <Descricao>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          inventore. Officia nihil quia optio maiores iste incidunt laudantium,
          sint reprehenderit assumenda velit possimus consequatur labore nemo
          totam commodi tempora repellat.
        </Descricao>
        <Bottom>Adicionar ao carrinho</Bottom>
      </div>
    </Card>
    <Card className="container">
      <div>
        <img src={image} />
      </div>
      <div>
        <Titulo>Pizza Marguerita</Titulo>
        <Descricao>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          inventore. Officia nihil quia optio maiores iste incidunt laudantium,
          sint reprehenderit assumenda velit possimus consequatur labore nemo
          totam commodi tempora repellat.
        </Descricao>
        <Bottom>Adicionar ao carrinho</Bottom>
      </div>
    </Card>
  </>
)

export default Section
