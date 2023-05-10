import React from "react";      

function Eventos () {
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
        <!-- Eventos -->
        <div class="eventos">
            <section class="eventos__quadro">
                <section class="evento">
                    <img src="assets\img\eventos\eventos_Interfatec_atletica.png" alt="Imagem de um banner contendo informações sobre o evento INTERFATEC exibindo os pacotes disponíveis para compra e os respectivos valores" class="evento__imagem">
                    <h2 class="evento__titulo">INTERFATEC</h2>
                    <p class="evento__descricao">Foi dada a largada. A INTER 2022 vem aí! Saíram os valores dos pacotes e as vendas já começaram.</p>
                </section>
                <section class="evento">
                    <img src="assets\img\eventos\eventos_multirao_atletica.jpg" alt="Imagem contendo a frase mutirão fatec zl juntamente com a data de vinte e um de novembro" class="evento__imagem">
                    <h2 class="evento__titulo">MUTIRÃO DA LIMPEZA 2022</h2>
                    <p class="evento__descricao">O mutirão ocorrerá na quinta-feira, dia 21, a partir das 8h da manhã. Obrigado pela solidariedade e ajuda. E para quem não puder comparecer, ajude-nos na divulgação, para que assim mais pessoas sejam informadas.</p>
                </section>
                <section class="evento">
                    <img src="assets\img\eventos\eventos_trote_atletica.jpg" alt="Imagem contendo o logo da Atletica e com a escrita trote primeiro semestre AFZL dois mil e vinte" class="evento__imagem">
                    <h2 class="evento__titulo">TROTE FATEC ZONA LESTE</h2>
                    <p class="evento__descricao">Todos os bixos que participarem do trote, vão concorrer a uma CANECA com tirante!!! E aos 50 primeiros que comprarem seu ingresso para festa concorrem a uma COLLEGE da Atlética.</p>
                </section>
            </section>
        </div>
    </main>
}

export default Eventos