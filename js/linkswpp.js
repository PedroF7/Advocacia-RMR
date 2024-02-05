document.addEventListener('DOMContentLoaded', function() {
  // Links a serem sorteados
  const links = [
    "https://api.whatsapp.com/send/?phone=5521998705309&text=Quero+saber+se+tenho+direito+ao+bpc-loas&type=phone_number&app_absent=0",
    "https://api.whatsapp.com/send/?phone=5521997401505&text=Quero+saber+se+tenho+direito+ao+bpc-loas&type=phone_number&app_absent=0",
    "https://api.whatsapp.com/send/?phone=5521988604191&text=Quero+saber+se+tenho+direito+ao+bpc-loas&type=phone_number&app_absent=0"
  ];

  // Variável para armazenar o índice do link atual
  let indiceAtual = -1;

  // Função para sortear um link que não seja igual ao link atual
  function sortearLinkDiferente() {
    let novoIndice;
    do {
      novoIndice = Math.floor(Math.random() * links.length);
    } while (novoIndice === indiceAtual);
    indiceAtual = novoIndice;
    return links[indiceAtual];
  }

  // Função para abrir o link no mesmo navegador
  function abrirLink() {
    const linkSorteado = sortearLinkDiferente();
    window.open(linkSorteado, '_blank');
  }

  // Adicionando evento de clique aos botões
  const botoes = document.querySelectorAll('.btn-ajuda, .whats, .btn-link, .btn-direito, .btn-bpc, .btn-bpc-ult, .btn-especialistas');
  botoes.forEach(function(botao) {
    botao.addEventListener('click', abrirLink);
  });

  // Função para redirecionar quando a página é fechada
  function redirecionar() {
    if (indiceAtual !== -1) {
      window.location.href = links[indiceAtual];
    }
  }

  window.addEventListener('beforeunload', redirecionar);
});
