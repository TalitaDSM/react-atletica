import React from 'react'
import styles from './Modalidades.module.css'
import futsal from '../../img/modalidades/futsal.png'
import volei from '../../img/modalidades/volei.png'
import basquete from '../../img/modalidades/basquete.png'
import natacao from '../../img/modalidades/natacao.png'
import handbol from '../../img/modalidades/handbol.png'
import truco from '../../img/modalidades/truco.png'
import xadrez from '../../img/modalidades/xadrez.png'
import ping_pong from '../../img/modalidades/ping_pong.png'

function Modalidades() {
    return (
        <main id="conteudo" className={styles.conteudo}>
            <section className={styles.banner}>
                <div className={styles.banner__imagem.modalidadesImagem}> </div>
                <h1 className={styles.banner__titulo.tituloAlternativo}>MODALIDADES</h1>
            </section>
            {/*Plugin VLibras*/}
            <div vw class="enabled">
                <div vw-access-button className={styles.active}></div>
                <div vw-plugin-wrapper>
                    <div class="vw-plugin-top-wrapper"></div>
                </div>
            </div>
            <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
            <script>
                new window.VLibras.Widget('https://vlibras.gov.br/app');
            </script>
            {/*breadcrumb*/}
            <ul class="breadcrumb">
                <li><a href="./">Início</a></li>
                <li>Modalidades</li>
            </ul>
            {/*Modalidades*/}
            <section className={styles.modalidades}>
                <div className={styles.modalidades__quadro}>
                    <div className={styles.modalidade}>
                        <img className={styles.modalidade__imagem} src={futsal} alt="Imagem com um desenho representando um jogador de futsal na cor preta" />
                        <h3 className={styles.modalidade__titulo}>FUTSAL</h3>
                    </div>
                    <div className={styles.modalidade}>
                        <img className={styles.modalidade__imagem} src={volei} alt="Imagem com um desenho representando uma rede e uma bola de voleibol na cor preta" />
                        <h3 className={styles.modalidade__titulo}>VOLEIBOL</h3>
                    </div>
                    <div className={styles.modalidade}>
                        <img className={styles.modalidade__imagem} src={basquete} alt="Imagem com um desenho representando uma cesta de basquetebol na cor preta" />
                        <h3 className={styles.modalidade__titulo}>BASQUETEBOL</h3>
                    </div>
                    <div className={styles.modalidade}>
                        <img className={styles.modalidade__imagem} src={natacao} alt="Imagem com um desenho representando um competidor de natação na cor preta" />
                        <h3 className={styles.modalidade__titulo}>NATAÇÃO</h3>
                    </div>
                    <div className={styles.modalidade}>
                        <img className={styles.modalidade__imagem} src={handbol} alt="Imagem com um desenho representando um jogador de handebol na cor preta" />
                        <h3 className={styles.modalidade__titulo}>HANDEBOL</h3>
                    </div>
                    <div className={styles.modalidade}>
                        <img className={styles.modalidade__imagem} src={truco} alt="Imagem com um desenho representando cartas de baralho na cor preta" />
                        <h3 className={styles.modalidade__titulo}>TRUCO</h3>
                    </div>
                    <div className={styles.modalidade}>
                        <img className={styles.modalidade__imagem} src={xadrez} alt="Imagem com um desenho representando uma peça de xadrez e um quadro de estratégia na cor preta" />
                        <h3 className={styles.modalidade__titulo}>XADREZ</h3>
                    </div>
                    <div className={styles.modalidade}>
                        <img className={styles.modalidade__imagem} src={ping_pong} alt="Imagem com um desenho representando uma raquete e uma bola de tênis de mesa na cor preta" />
                        <h3 className={styles.modalidade__titulo}>TÊNIS DE MESA</h3>
                    </div>
                </div>
            </section>
            <p className={styles.modalidades__descricao}>Os horários e locais dos treinos são disponibilizados na página da Atlética no Facebook e nos grupos da Fatec ZL no WhatsApp. Fique ligado!</p>
        </main>
    );
}

export default Modalidades