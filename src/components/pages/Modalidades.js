import React from "react";      

function Modalidades () {
    return 
    <main id="conteudo">
        <section class="banner">
            <div class="banner__imagem modalidadesImagem"> </div>
            <h1 class="banner__titulo tituloAlternativo">MODALIDADES</h1>
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
            <li>Modalidades</li>
        </ul>
        <!-- Modalidades -->
        <section class="modalidades">
            <div class="modalidades__quadro">
                <div class="modalidade">
                    <img class="modalidade__imagem" src="./assets/img/modalidades/futsal.png" alt="Imagem com um desenho representando um jogador de futsal na cor preta">
                    <h3 class="modalidade__titulo">FUTSAL</h3>
                </div>
                <div class="modalidade">
                    <img class="modalidade__imagem" src="assets\img\modalidades\volei.png" alt="Imagem com um desenho representando uma rede e uma bola de voleibol na cor preta">
                    <h3 class="modalidade__titulo">VOLEIBOL</h3>
                </div>
                <div class="modalidade">
                    <img class="modalidade__imagem" src="./assets/img/modalidades/basquete.png" alt="Imagem com um desenho representando uma cesta de basquetebol na cor preta">
                    <h3 class="modalidade__titulo">BASQUETEBOL</h3>
                </div>
                <div class="modalidade">
                    <img class="modalidade__imagem" src="./assets/img/modalidades/natacao.png" alt="Imagem com um desenho representando um competidor de natação na cor preta">
                    <h3 class="modalidade__titulo">NATAÇÃO</h3>
                </div>
                <div class="modalidade">
                    <img class="modalidade__imagem" src="./assets/img/modalidades/handbol.png" alt="Imagem com um desenho representando um jogador de handebol na cor preta">
                    <h3 class="modalidade__titulo">HANDEBOL</h3>
                </div>
                <div class="modalidade">
                    <img class="modalidade__imagem" src="./assets/img/modalidades/truco.png" alt="Imagem com um desenho representando cartas de baralho na cor preta">
                    <h3 class="modalidade__titulo">TRUCO</h3>
                </div>
                <div class="modalidade">
                    <img class="modalidade__imagem" src="./assets/img/modalidades/xadrez.png" alt="Imagem com um desenho representando uma peça de xadrez e um quadro de estratégia na cor preta">
                    <h3 class="modalidade__titulo">XADREZ</h3>
                </div>
                <div class="modalidade">
                    <img class="modalidade__imagem" src="./assets/img/modalidades/ping_pong.png" alt="Imagem com um desenho representando uma raquete e uma bola de tênis de mesa na cor preta">
                    <h3 class="modalidade__titulo">TÊNIS DE MESA</h3>
                </div>
            </div>
        </section>
        <p class="modalidades__descricao">Os horários e locais dos treinos são disponibilizados na página da Atlética no Facebook e nos grupos da Fatec ZL no WhatsApp. Fique ligado!</p>
    </main>
}

export default Modalidades