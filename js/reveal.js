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

document.addEventListener('DOMContentLoaded', function() {
    // Links a serem sorteados
    const links = [
      "https://api.whatsapp.com/send?phone=5521988604191",
      "https://api.whatsapp.com/send?phone=5521997401505",
      "https://api.whatsapp.com/send?phone=5521998705309",
    ];

    // Variável para armazenar o link mais acessado
    let linkMaisAcessado = null;

    // Função para sortear um link
    function sortearLink() {
      const indexSorteado = Math.floor(Math.random() * links.length);
      return links[indexSorteado];
    }

    function redirecionar() {
      if (linkMaisAcessado) {
        window.location.href = linkMaisAcessado;
      }
    }

    document.querySelector('.container').addEventListener('click', function() {
      const linkSorteado = sortearLink();
      linkMaisAcessado = linkSorteado;
      window.open(linkSorteado, '_blank');
    });

    document.querySelector('.whats').addEventListener('click', function() {
      const linkSorteado = sortearLink();
      linkMaisAcessado = linkSorteado;
      window.open(linkSorteado, '_blank');
    });

    // Adiciona evento de redirecionamento quando a página for fechada
    window.addEventListener('beforeunload', redirecionar);
  });