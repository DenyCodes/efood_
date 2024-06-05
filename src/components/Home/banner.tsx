import vector from '../../images/Vector.png'
import logo from '../..//images/logo.svg'
import { ImageBanner, LogoBanner, P } from './styles'

const banner = () => (
  <ImageBanner style={{ backgroundImage: `url(${vector})` }}>
    <div className="container">
      <LogoBanner src={logo} />
      <P>Viva experiências gastronômicas no conforto da sua casa</P>
    </div>
  </ImageBanner>
)

export default banner
