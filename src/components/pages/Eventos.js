import React from "react";
import styles from "./Eventos.module.css"
import eventos_Interfatec_atletica from '../../img/eventos/eventos_Interfatec_atletica.png'
import eventos_multirao_atletica from '../../img/eventos/eventos_multirao_atletica.jpg'
import eventos_trote_atletica from '../../img/eventos/eventos_trote_atletica.jpg'

function Eventos() {
    return (

        <main id="conteudo" className={styles.conteudo}>
            <section className={styles.banner}>
                <div className={styles.banner__imagem.eventosImagem}></div>
                <h1 className={styles.banner__imagem.eventosImagem}>EVENTOS</h1>
                <section>
                    {/*Plugin VLibras*/}
                    <div vw className={styles.enabled}>
                        <div vw-access-button className="active"></div>
                        <div vw-plugin-wrapper>
                            <div className={styles.vw - plugin - top - wrapper}></div>
                        </div>
                    </div>
                    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
                    <script>
                        new window.VLibras.Widget('https://vlibras.gov.br/app');
                    </script>
                    {/*breadcrumb*/}
                    <ul className={styles.breadcrumb}>
                        <li><a href="./">Início</a></li>
                        <li>Evento</li>
                    </ul>
                    {/*Eventos*/}
                    <div className={styles.eventos}>
                        <section className={styles.eventos__quadro}>
                            <section className={styles.evento}>
                                <img src={eventos_Interfatec_atletica} alt="Imagem de um banner contendo informações sobre o evento INTERFATEC exibindo os pacotes disponíveis para compra e os respectivos valores" className={styles.evento__imagem} />
                                <h2 className={styles.evento__titulo}>INTERFATEC</h2>
                                <p className={styles.evento__descricao}>Foi dada a largada. A INTER 2022 vem aí! Saíram os valores dos pacotes e as vendas já começaram.</p>
                            </section>
                            <section className={styles.evento}>
                                <img src={eventos_multirao_atletica} alt="Imagem contendo a frase mutirão fatec zl juntamente com a data de vinte e um de novembro" className={styles.evento__imagem} />
                                <h2 className={styles.evento__titulo}>MUTIRÃO DA LIMPEZA 2022</h2>
                                <p className={styles.evento__descricao}>O mutirão ocorrerá na quinta-feira, dia 21, a partir das 8h da manhã. Obrigado pela solidariedade e ajuda. E para quem não puder comparecer, ajude-nos na divulgação, para que assim mais pessoas sejam informadas.</p>
                            </section>
                            <section className={styles.evento}>
                                <img src={eventos_trote_atletica.jpg} alt="Imagem contendo o logo da Atletica e com a escrita trote primeiro semestre AFZL dois mil e vinte" className={styles.evento__imagem} />
                                <h2 className={styles.evento__titulo}>TROTE FATEC ZONA LESTE</h2>
                                <p clclassNameass={styles.evento__descricao}>Todos os bixos que participarem do trote, vão concorrer a uma CANECA com tirante!!! E aos 50 primeiros que comprarem seu ingresso para festa concorrem a uma COLLEGE da Atlética.</p>
                            </section>
                        </section>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Eventos