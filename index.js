function mudarImagem() {
    let imagem = document.getElementById("mostrador");
    let src = imagem.src;
    let novaSrc = imagem.src.includes('inova-fortes.png') ? 
                  'imagens/inova-fortes-2.png' : 
                  'imagens/inova-fortes.png';
    let link = document.getElementById('link');
    let novoLink = link.href.includes('https://fortes.ind.br/fortes-e-destaque-no-oiweek/') ?
                    'https://fortes.ind.br/fortes-inicia-parceria-com-a-znit/' :
                    'https://fortes.ind.br/fortes-e-destaque-no-oiweek/';
    // Fade-out
    imagem.style.opacity = 0;
    
    // Trocar imagem após o fade-out
    setTimeout(() => {
        link.href = novoLink;
        imagem.src = novaSrc;
        imagem.style.opacity = 1; // Fade-in
    }, 750); // O tempo deve corresponder ao tempo de transição de fade-out
}