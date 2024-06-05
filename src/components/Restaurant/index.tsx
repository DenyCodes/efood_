import Tag from '../Tag'
import {
  Card,
  Descricao,
  Div,
  Images,
  Infos,
  Star,
  Tipo,
  Titulo
} from './styles'
import star from '../../images/estrela.png'
import { Nota, Saibamais } from '../Tag/styles'

type Props = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string[]
  capa: string
  cardapio: []
  RestaurantToLink: string
}

const Restaurant = ({
  id,
  titulo,
  avaliacao,
  descricao,
  capa,
  tipo
}: Props) => (
  <Card>
    <Tipo>{tipo}</Tipo>
    <Images src={capa} />
    <Div>
      <Star>
        <img src={star} />
      </Star>
      <Titulo>{titulo}</Titulo>
      <Saibamais>
        <a href={`/product/${id}`}>Saiba mais</a>
      </Saibamais>
      <Nota>{avaliacao}</Nota>
      <Descricao>{descricao}</Descricao>
    </Div>
  </Card>
)

export default Restaurant
