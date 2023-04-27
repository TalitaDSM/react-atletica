import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../img/menu-superior/logo_atletica.png'

function Navbar() {

    return (
        <nav>
            <Container>
                <Link to='/'>
                    <img src={logo} alt="logo-atletica"/>
                </Link>
                <ul>
                    <li>
                        <Link to='/'>Início</Link>
                    </li>
                    <li>
                        <Link to='/'>Quem Somos</Link>
                    </li>
                    <li>
                        <Link to='/'>Modalidades</Link>
                    </li>
                    <li>
                        <Link to='/'>Campeonatos</Link>
                    </li>
                    <li>
                        <Link to='/'>Eventos</Link>
                    </li>
                    <li>
                        <Link to='/'>Loja Virtual</Link>
                    </li>
                    <li>
                        <Link to='/'>Contato</Link>
                    </li>
                    <li>
                        <Link to='/'>Cadastrar</Link>
                    </li>
                    <li>
                        <Link to='/'>Login</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar