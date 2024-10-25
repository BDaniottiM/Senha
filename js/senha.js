let tentativas = 3;

function verificarPalavra() {
  // Coleta o valor de cada input e une em uma string
  const palavra = (
    document.getElementById("letra1").value +
    document.getElementById("letra2").value +
    document.getElementById("letra3").value +
    document.getElementById("letra4").value +
    document.getElementById("letra5").value +
    document.getElementById("letra6").value +
    document.getElementById("letra7").value +
    document.getElementById("letra8").value
  ).toLowerCase(); // Converte tudo para minúsculo

  // Verifica se a palavra formada é "presente"
  if (palavra === "presente") {
    document.body.style.backgroundColor = "green"; // Muda o fundo para verde
    esconderConteudo(); // Esconde o conteúdo
  } else {
    tentativas--;
    document.getElementById("tentativas").innerText =
      tentativas + " tentativas restantes";

    if (tentativas === 0) {
      document.body.style.backgroundColor = "red"; // Muda o fundo para vermelho
      esconderConteudo(); // Esconde o conteúdo
    } else {
      document.getElementById("resultado").innerText = "";
    }
  }
}

// Função para esconder os inputs e o botão
function esconderConteudo() {
  const container = document.getElementById("container");
  container.style.display = "none"; // Esconde o container
}
