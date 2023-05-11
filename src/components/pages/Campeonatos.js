import React from 'react';
import styles from './Campeonatos.module.css'
import trofeus from '../../img/campeonatos/trofeus.png';
import calendario from '../../img/campeonatos/calendario.png';


function Campeonatos() {
    return (

        <main id="conteudo" className={styles.conteudo}>
            <section className={styles.banner}>
                <div className={styles.banner__imagem.campeonatosImagem}> </div>
                <h1 className={styles.banner__titulo.tituloAlternativo}>CAMPEONATOS</h1>
            </section>
            {/*Plugin VLibras*/}
            <div vw class="enabled">
                <div vw-access-button class="active"></div>
                <div vw-plugin-wrapper>
                    <div class="vw-plugin-top-wrapper"></div>
                </div>
            </div>
            <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
            <script>
                new window.VLibras.Widget('https://vlibras.gov.br/app');
            </script>

            {/*breadcrumb */}
            <ul className={styles.breadcrumb}>
                <li><a href="/">Início</a></li>
                <li>Campeonatos</li>
            </ul>
            {/*Campeonatos*/}
            <div className={styles.campeonatos}>
                <section className={styles.campeonatos__vigentes}>
                    <h2 className={styles.vigentes__titulo}>CAMPEONATOS ROLANDO</h2>
                    <ul className={styles.vigentes__lista}>
                        <li><a className={styles.vigentes__item} href="#">Campeonato de Volei Masculino</a></li>
                        <li><a className={styles.vigentes__item} href="#">Campeonato de Volei Feminino</a></li>
                        <li><a className={styles.vigentes__item} href="#">Campeonato de Futsal Masculino</a></li>
                        <li><a className={styles.vigentes__item} href="#">Campeonato de Futsal Feminino</a></li>
                        <li><a className={styles.vigentes__item} href="#">Campeonato de Xadrez</a></li>
                        <li><a className={styles.vigentes__item} href="#">Campeonato de Basquete Masculino</a></li>
                        <li><a className={styles.vigentes__item} href="#">Campeonato de Basquete Feminino</a></li>
                    </ul>
                </section>
                <section className={styles.campeonatos__galeria}>
                    <h2 className={styles.galeria__titulo}><a href="#" className={styles.galeria__link}>GALERIA DE TROFÉUS</a></h2>
                    <div className={styles.galeria__quadro}>
                        <a href="#" class={styles.galeria__link}><img className={styles.galeria__imagem} src={trofeus} alt="Imagem de três troféus, respectivamente na cores prata, dourado e bronze" /></a>
                        <p class={styles.galeria__descricao}>Viaje no tempo através da nossa galeria de troféus, reveja nossas conquistas durante todos estes anos! Veja a história da Fatec-ZL pela ótica do esporte e entretenimento.</p>
                    </div>
                </section>
                <section className={styles.campeonatos__inscricoes}>
                    <h2 className={styles.inscricoes__titulo}><a href="#" className={styles.inscricoes__link}>ACOMPANHE AS DATAS DAS INSCRIÇÕES</a></h2>
                    <div className={styles.inscricoes__quadro}>
                        <a className={styles.inscricoes__link} href="#"><img className={styles.inscricoes__imagem} src={calendario} alt="Imagem contendo uma ilustração de uma folha de calendário" /></a>
                        <p className={styles.inscricoes__descricao}>Acompanhe por aqui o status das inscrições - revise dados ou solicite o cancelamento e fique ligado nas datas e prazos para entrega de documentos solicitados.</p>
                    </div>
                </section>
            </div>
        </main>

    );
}

export default Campeonatos
