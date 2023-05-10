import React from "react";      

function LoginPage () {
    return 

    <main id="conteudo">
        <section class="banner">
            <div class="banner__imagem eventosImagem"> </div>
            <h1 class="banner__titulo tituloAlternativo">EVENTOS</h1>
        </section>
        <!--Plugin VLibras-->   
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
        <!-- breadcrumb -->
        <ul class="breadcrumb">
            <li><a href="index.html">Início</a></li>
            <li>Evento</li>
        </ul>
        <!-- Login -->
        <div class="container">
            <section class="login">       
                <form  class="login__form" action="login" method="POST">
                    <h1 class="login__titulo">Iniciar Sessão</h1>
                    <div class="login__form-campo">
                        <label class="campo__label-email" for="email">E-mail:</label>
                        <input class="campo__input-email" type="email" name="email"  required placeholder="Digite aqui o seu e-mail"><br>
                        <label class="campo__label-senha" for="senha" >Senha:</label>
                        <input class="campo__input-senha" type="password" name="senha"  required placeholder="Digite aqui a sua senha">                     
                    </div>
                    <div class="login__form-botao"><br>
                        <input class="botao__enviar" type="submit" value= "Entrar" >
                    </div>
                    <div class="login__form-link"><br>
                        <p><a class="link__recuperarSenha" href="#">Esqueci minha senha</a></p>
                    </div>
                </form>
            </section>
        </div>

    </main>
}

export default LoginPage