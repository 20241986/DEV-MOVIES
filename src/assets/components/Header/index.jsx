
import {Container, Menu, Li} from './styled'
import Logo from '../../assets/logo.png'

import {Link} from 'react-router-dom'

function Header () {
    return (7
        
        <Container src={"logo"} alt="logo-dev-movies">
            <menu>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li>
                    <Link to="/series">Séries</Link>
                </Li>
            </menu>
        </Container>
    )
}

  export default Header