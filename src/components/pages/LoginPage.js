import React from "react";
import styles from './LoginPage.module.css'

function LoginPage() {
    return (

        <main id="conteudo" className={styles.conteudo}>
            <section className={styles.banner}>
                <div className={styles.banner__imagem.eventosImagem}> </div>
                <h1 className={styles.banner__titulo.tituloAlternativo}>EVENTOS</h1>
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
            {/*breadcrumb*/}
            <ul class="breadcrumb">
                <li><a href="index.html">Início</a></li>
                <li>Evento</li>
            </ul>
            {/*Login*/}
            <div className={styles.container}>
                <section className={styles.login}>
                    <form className={styles.login__form} action="login" method="POST">
                        <h1 className={styles.login__titulo}>Iniciar Sessão</h1>
                        <div className={styles.login__form - campo}>
                            <label className={styles.campo__label - email} for="email">E-mail:</label>
                            <input className={styles.campo__input - email} type="email" name="email" required placeholder="Digite aqui o seu e-mail" /><br />
                            <label className={styles.campo__label - senha} for="senha" >Senha:</label>
                            <input className={styles.campo__input - senha} type="password" name="senha" required placeholder="Digite aqui a sua senha" />
                        </div>
                        <div className={styles.login__form - botao}><br />
                            <input className={styles.botao__enviar} type="submit" value="Entrar" />
                        </div>
                        <div className={styles.login__form - link}><br />
                            <p><a className={styles.link__recuperarSenha} href="#">Esqueci minha senha</a></p>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
}

export default LoginPage