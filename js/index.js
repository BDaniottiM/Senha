let tentativasParte1 = 3;
let tentativasParte2 = 3;
let parte1Correta = false;
let parte2Correta = false;

function verificarParte1() {
  const numero1 = document.getElementById("numero1").value;
  const numero2 = document.getElementById("numero2").value;

  if (numero1 === "62" && numero2 === "13") {
    document.getElementById("resultado").innerText = "";
    document.getElementById("numero1").style.display = "none";
    document.getElementById("numero2").style.display = "none";
    document.getElementById("button1").style.display = "none";
    document.getElementById("tentativasParte1").style.display = "none";
    parte1Correta = true;
    redirecionarSeCorreto();
  } else {
    tentativasParte1--;
    document.getElementById(
      "tentativasParte1"
    ).innerText = ` ${tentativasParte1} Tentativas restantes`;
    if (tentativasParte1 === 0) {
      bloquearTela();
    }
  }
}

function verificarParte2() {
  const numero3 = document.getElementById("numero3").value;
  const numero4 = document.getElementById("numero4").value;

  if (numero3 === "40" && numero4 === "52") {
    document.getElementById("resultado").innerText = "";
    document.getElementById("numero3").style.display = "none";
    document.getElementById("numero4").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("tentativasParte2").style.display = "none";
    parte2Correta = true;
    redirecionarSeCorreto();
  } else {
    tentativasParte2--;
    document.getElementById(
      "tentativasParte2"
    ).innerText = `${tentativasParte2} Tentativas restantes`;
    if (tentativasParte2 === 0) {
      bloquearTela();
    }
  }
}

function redirecionarSeCorreto() {
  if (parte1Correta && parte2Correta) {
    window.location.href = "senha.html"; // Substitua pelo caminho da sua página
  }
}

function bloquearTela() {
  document.body.style.backgroundColor = "red";
  document.body.innerHTML = ""; // Remove todos os elementos da tela
}
