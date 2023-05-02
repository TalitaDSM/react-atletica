import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo_atletica from '../../img/menu-superior/logo_atletica.png'

function Navbar() {

    return (
        <div className={styles.navbar}>
            <Container>
                <div className={styles.logo_atletica}>
                <Link to='/'>
                    <img src={logo_atletica} alt="logo-atletica" />
                </Link>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Início</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/quemsomos">Quem Somos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/modalidades">Modalidades</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/campeonatos">Campeonatos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/eventos">Eventos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/lojavirtual">Loja Virtual</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/cadastro">Cadastrar</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/loginpage">Login</Link>
                    </li>
                </ul>
            </Container>
        </div>
    )
}

export default Navbar