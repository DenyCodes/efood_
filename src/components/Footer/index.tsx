import { Div } from './styles'
import logo from '../../images/efood.svg'
import instagram from '../../images/instagram-round-svgrepo-com (1) 1.png'
import facebook from '../../images/facebook-round-svgrepo-com 1.png'
import twitter from '../../images/twitter-2-svgrepo-com 1.png'

const Footer = () => (
  <Div>
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="social-icons">
        <img src={instagram} alt="Instagram" />
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </Div>
)

export default Footer
