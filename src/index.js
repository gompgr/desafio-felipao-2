let ranqueadas = batalhas(15, 5);

function batalhas(vitorias, derrotas) {
  let resultado = vitorias - derrotas;
  return resultado;
}

if (ranqueadas <= 10) {
  nivelAtual = "Ferro";
} else if (ranqueadas > 11 && ranqueadas < 20) {
  nivelAtual = "Bronze";
} else if (ranqueadas > 21 && ranqueadas < 50) {
  nivelAtual = "Prata";
} else if (ranqueadas > 51 && ranqueadas < 80) {
  nivelAtual = "Ouro";
} else if (ranqueadas > 81 && ranqueadas < 90) {
  nivelAtual = "Diamante";
} else if (ranqueadas > 91 && ranqueadas < 100) {
  nivelAtual = "Lendario";
} else {
  nivelAtual = "Imortal";
}

console.log(
  "O Herói tem de saldo de " + ranqueadas + " está no nível de " + nivelAtual
);
