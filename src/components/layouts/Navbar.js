import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../img/menu-superior/logo_atletica.png'

function Navbar() {

    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt="logo-atletica" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Início</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/'>Quem Somos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/'>Modalidades</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/'>Campeonatos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/'>Eventos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/'>Loja Virtual</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/'>Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/'>Cadastrar</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/'>Login</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar