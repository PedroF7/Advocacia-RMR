window.revelar = ScrollReveal({reset:true})

// .efeito-text
revelar.reveal('.efeito-text'),
{
    duration: 2000,
    distance: '90px',
    origin: 'top'
}

// . .efeito-btn-ajuda
revelar.reveal('.efeito-btn-ajuda'),
{
    duration: 2000,
    distance: '90px',
    delay:5000,
    origin: 'left'
}

//  .efeito-txt-topo-site
revelar.reveal('.efeito-txt-meio-site'),
{
    duration: 2000,
    distance: '90px',
    origin: 'bottom'
}

//  .efeito-img-topo
revelar.reveal('.efeito-img-meio'),
{
    duration: 2000,
    distance: '90px',
    delay: 500,
    origin: 'left'
}

//  .efeito-pessoas-bpc
revelar.reveal('.efeito-pessoas-bpc'),
{
    duration: 2000,
    distance: '90px',
    delay: 1000,
    origin: 'top'
}

document.addEventListener("DOMContentLoaded", function() {
    // Lista de links para o sorteio
    const links = [
        "https://api.whatsapp.com/send?phone=5521988604191",
        "https://api.whatsapp.com/send?phone=5521997401505",
        "https://api.whatsapp.com/send?phone=5521998705309",
    ];

    // Função para abrir um link aleatório
    function abrirLinkAleatorio() {
        const linkSorteado = links[Math.floor(Math.random() * links.length)];
        window.open(linkSorteado, "_blank");
    }

    // Adicionar evento de clique à classe "container"
    const containers = document.querySelectorAll(".container");
    containers.forEach(function(container) {
        container.addEventListener("click", abrirLinkAleatorio);
    });

    // Adicionar evento de clique à classe "whats"
    const whatsButtons = document.querySelectorAll(".whats");
    whatsButtons.forEach(function(whatsButton) {
        whatsButton.addEventListener("click", abrirLinkAleatorio);
    });
});