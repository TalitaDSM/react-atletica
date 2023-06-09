import React from "react";
import modalidades_mural from '../../img/mural/modalidades_mural.PNG'
import eventos_multirao_atletica from '../../img/mural/eventos_multirao_atletica.jpg'
import college_vermelha from '../../img/mural/college_vermelha.webp'


function Inicio() {
    return (
        <main >
            <section >
                <div ></div>
                <h1 >ATLÉTICA FATEC ZONA LESTE</h1>
            </section>
            {/* <div vw >
                <div vw-access-button class={styles.active}></div>
                <div vw-plugin-wrapper>
                    <div ></div>
                </div>
            </div> */}
            <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
            <script>
                new window.VLibras.Widget('https://vlibras.gov.br/app');
            </script>
            {/*  <section className={styles.mural}>
                <h2 className={styles.mural__titulo}>Fique por dentro do que acontece na Atlética Fatec ZL</h2>
                <div className={styles.noticias}>
                    <div className={styles.noticia}>
                        <img className={styles.noticia__imagem} src={modalidades_mural} alt="Imagem contendo a equipe de futsal feminino da Fatec" />
                        <div className={styles.noticia__conteudo}>
                            <h3 className={styles.noticia__titulo}>Modalidades Esportivas</h3>
                            <p className={styles.noticia__descricao}>Conheça e participe das modalidades esportivas da nossa Atlética.</p>
                        </div>
                    </div>
                    <div className={styles.noticia}>
                        <img className={styles.noticia__imagem} src={eventos_multirao_atletica} alt="Imagem contendo a frase mutirão fatec zl juntamente com a data de vinte e um de novembro" />
                        <div className={styles.noticia__conteudo}>
                            <h3 className={styles.noticia__titulo}>Multirão de Limpeza</h3>
                            <p className={styles.noticia__descricao}>Participe do Multirão de Limpeza 2022.</p>
                        </div>
                    </div>
                    <div className={styles.noticia}>
                        <img className={styles.noticia__imagem} src={college_vermelha} alt="Imagem contendo a frase mutirão fatec zl juntamente com a data de vinte e um de novembro" />
                        <div className={styles.noticia__conteudo}>
                            <h3 className={styles.noticia__titulo}>Lojinha da Atlética</h3>
                            <p className={styles.noticia__descricao}>Conheça os novos produtos da lojinha da Atlética.</p>
                        </div>
                    </div>
                    <div className={styles.noticia}>
                        <img className={styles.noticia__imagem} src={modalidades_mural} alt="Imagem contendo a equipe de futsal feminino da Fatec" />
                        <div className={styles.noticia__conteudo}>
                            <h3 className={styles.noticia__titulo}>Modalidades Esportivas</h3>
                            <p className={styles.noticia__descricao}>Conheça e participe das modalidades esportivas da nossa Atlética.</p>
                        </div>
                    </div>
                    <div className={styles.noticia}>
                        <img className={styles.noticia__imagem} src={eventos_multirao_atletica} alt="Imagem contendo a frase mutirão fatec zl juntamente com a data de vinte e um de novembro" />
                        <div className={styles.noticia__conteudo}>
                            <h3 className={styles.noticia__titulo}>Multirão de Limpeza</h3>
                            <p className={styles.noticia__descricao}>Participe do Multirão de Limpeza 2022.</p>
                        </div>
                    </div>
                    <div className={styles.noticia}>
                        <img className={styles.noticia__imagem} src={college_vermelha} alt="Imagem contendo a frase mutirão fatec zl juntamente com a data de vinte e um de novembro" />
                        <div className={styles.noticia__conteudo}>
                            <h3 className={styles.noticia__titulo}>Lojinha da Atlética</h3>
                            <p className={styles.noticia__descricao}>Conheça os novos produtos da lojinha da Atlética.</p>
                        </div>
                    </div>
                    <div className={styles.noticia}>
                        <img className={styles.noticia__imagem} src={modalidades_mural} alt="Imagem contendo a equipe de futsal feminino da Fatec" />
                        <div className={styles.noticia__conteudo}>
                            <h3 className={styles.noticia__titulo}>Modalidades Esportivas</h3>
                            <p className={styles.noticia__descricao}>Conheça e participe das modalidades esportivas da nossa Atlética.</p>
                        </div>
                    </div>
                    <div className={styles.noticia}>
                        <img className={styles.noticia__imagem} src={eventos_multirao_atletica} alt="Imagem contendo a frase mutirão fatec zl juntamente com a data de vinte e um de novembro" />
                        <div className={styles.noticia__conteudo}>
                            <h3 className={styles.noticia__titulo}>Multirão de Limpeza</h3>
                            <p className={styles.noticia__descricao}>Participe do Multirão de Limpeza 2022.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.mapa}>
                <h3 className={styles.mapa__titulo}>LOCALIZAÇÃO</h3>
                <p className={styles.mapa__descricao}>A FATEC ZL está localizada no coração da Zona Leste de São Paulo.</p>
                <div className={styles.mapa__iframe}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3097954317063!2d-46.47770326835123!3d-23.521357523908254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce61270808f47f%3A0xddc2deca4778eb69!2sFATEC%20Zona%20Leste%20%2F%20Vila%20Uni%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1637589573056!5m2!1spt-BR!2sbr" width="90%" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </section> */}
        </main>
    );
}

export default Inicio