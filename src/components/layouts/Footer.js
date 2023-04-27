import { FaFacebook, FaInstagram } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
            </ul>
            <p>
                <span>Atletica Fatec Zona Leste</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer