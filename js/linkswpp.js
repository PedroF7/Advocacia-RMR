document.addEventListener('DOMContentLoaded', function() {
  // Links a serem sorteados
  const links = [
    "https://api.whatsapp.com/send/?phone=5521998705309&text=Quero+saber+se+tenho+direito+ao+bpc-loas&type=phone_number&app_absent=0",

    "https://api.whatsapp.com/send/?phone=5521997401505&text=Quero+saber+se+tenho+direito+ao+bpc-loas&type=phone_number&app_absent=0",

    "https://api.whatsapp.com/send/?phone=5521988604191&text=Quero+saber+se+tenho+direito+ao+bpc-loas&type=phone_number&app_absent=0"
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
  window.addEventListener('beforeunload', redirecionar);
});
