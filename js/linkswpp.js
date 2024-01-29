document.addEventListener('DOMContentLoaded', function() {
    // Links a serem sorteados
    const links = [
      "https:wa.me/5521998705309/?text=Quero%20saber%20se%20tenho%20direito%20ao%20bpc-loas",
      "https:wa.me/5521997401505/?text=Quero%20saber%20se%20tenho%20direito%20ao%20bpc-loas",
      "https:wa.me/5521988604191/?text=Quero%20saber%20se%20tenho%20direito%20ao%20bpc-loas"
    ];

    

    // Variável para armazenar o link mais acessado
    let linkMaisAcessado = null;

    // Função para sortear um link
    function sortearLink() {
      const indexSorteado = Math.floor(Math.random() * links.length);
      return links[indexSorteado];
    }

    // Função para redirecionar para o link mais acessado
    function redirecionar() {
      if (linkMaisAcessado) {
        window.location.href = linkMaisAcessado;
      }
    }

    // Adiciona eventos de clique nas classes "container" e "whats"

    document.querySelector('.btn-ajuda').addEventListener('click', function() {
      const linkSorteado = sortearLink();
      linkMaisAcessado = linkSorteado;
      window.open(linkSorteado, '_blank');
    });

    document.querySelector('.whats').addEventListener('click', function() {
      const linkSorteado = sortearLink();
      linkMaisAcessado = linkSorteado;
      window.open(linkSorteado, '_blank');
    });

    document.querySelector('.btn-link').addEventListener('click', function() {
      const linkSorteado = sortearLink();
      linkMaisAcessado = linkSorteado;
      window.open(linkSorteado, '_blank');
    });

    document.querySelector('.btn-direito').addEventListener('click', function() {
      const linkSorteado = sortearLink();
      linkMaisAcessado = linkSorteado;
      window.open(linkSorteado, '_blank');
    });

    document.querySelector('.btn-bpc').addEventListener('click', function() {
      const linkSorteado = sortearLink();
      linkMaisAcessado = linkSorteado;
      window.open(linkSorteado, '_blank');
    });

    document.querySelector('.btn-bpc-ult').addEventListener('click', function() {
      const linkSorteado = sortearLink();
      linkMaisAcessado = linkSorteado;
      window.open(linkSorteado, '_blank');
    });

    document.querySelector('.btn-especialistas').addEventListener('click', function() {
      const linkSorteado = sortearLink();
      linkMaisAcessado = linkSorteado;
      window.open(linkSorteado, '_blank');
    });
    // Adiciona evento de redirecionamento quando a página for fechada
    window.addEventListener('beforeunload', redirecionar);
  });