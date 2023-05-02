import React from 'react';
import styles from './Footer.module.css'
import facebook from '../../img/rodape/facebook_img_white.png'
import instagram from '../../img/rodape/instagram_img_white.png'
import logo_fatec_branco from '../../img/rodape/logo_fatec_branco.png'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.social_list}>
                <a href="http://www.fateczl.edu.br/inicio"><img src={logo_fatec_branco} alt="FatecZL" /></a>
                <a href="https://www.facebook.com/"><img src={facebook} alt="Facebook" /></a>
                <a href="https://www.instagram.com/"><img src={instagram} alt="Instagram" /></a>
            </div>
            <p className={styles.copy_right}>
                <span>Atletica Fatec Zona Leste</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer