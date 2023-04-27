import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../img/'

function Navbar() {

    return (
        <div>
            <Link to='/'>Início</Link>
            <Link to='/'>Quem Somos</Link>
            <Link to='/'>Modalidades</Link>
            <Link to='/'>Campeonatos</Link>
            <Link to='/'>Eventos</Link>
            <Link to='/'>Loja Virtual</Link>
            <Link to='/'>Contato</Link>
            <Link to='/'>Cadastrar</Link>
            <Link to='/'>Login</Link>
        </div>
    )
}

export default Navbar