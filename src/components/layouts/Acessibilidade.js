import React from "react";      

function Acessibilidade () {
    return 
    
    <main class="acessibilidade">
        <ul class="acessibilidade__atalhos">
            <li><a href="#conteudo" accesskey="1" title="Ir diretamente para o conteúdo">Ir para o conteúdo [1]</a></li>
            <li><a href="#menu" accesskey="2" title="Ir diretamente para o menu">Ir para o menu [2]</a></li>
            <li><a href="#rodape" accesskey="3" title="Ir diretamente para o rodapé">Ir para o rodapé [3]</a></li>
        </ul>
        <ul class="acessibilidade__links">
            <li><a href="acessibilidade.html" title="Ir para a página de Acessibilidade">ACESSIBILIDADE</a></li>
            <li class="contraste"><a href="javascript:void(0);" id="contraste">CONTRASTE PRETO</a></li>
            <li class="contraste"><a href="javascript:void(0);" id="sem_contraste">SEM CONTRASTE</a></li>
            <li class="fonte"><a href="javascript:void(0);" id="aumentar">A+</a></li>
            <li class="fonte"><a href="javascript:void(0);" id="diminuir">A-</a></li>
        </ul>
    </main>
}

export default Acessibilidade



