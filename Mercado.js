const mercado = {
  nome: "Mercado do Bairro",
  transacoes: [],
  saldo: 0,
};

function verificaTipo(tipo) {
  if (tipo !== "entrada" && tipo !== "saida") {
    return false;
  }
  return true;
}

function criaTransacao(transacao) {
  if (transacao.tipo === "entrada") {
    mercado.saldo += transacao.valor;
  } else if (transacao.tipo === "saida") {
    mercado.saldo -= transacao.valor;
  } else {
    console.log(`O tipo '${transacao.tipo}' não é válido`);
  }

  let tipoValido = verificaTipo(transacao.tipo);

  if (tipoValido) {
    mercado.transacoes.push(transacao);
  }
}

function buscaMaiorTransacaoPorTipo(tipo) {
  let tipoValido = verificaTipo(tipo);
  if (!tipoValido) {
    return `O tipo '${tipo}' não é válido!`;
  }

  let maiorTransacao = { tipo: tipo, valor: 0 };

  for (const transacao of mercado.transacoes) {
    if (transacao.tipo === tipo && transacao.valor > maiorTransacao.valor) {
      maiorTransacao = transacao;
    }
  }
  return maiorTransacao;
}

function buscarValorMedioTransacoes(medias) {
  let soma = 0;

  for (const transacao of mercado.transacoes) {
    soma += transacao.valor;
  }
  let media = soma / mercado.transacoes.length;

  return media;
}

function buscaContagensTransacoes() {
  let entrada = 0;
  let saida = 0;

  for (const transacao of mercado.transacoes) {
    if (transacao.tipo === "entrada") {
      entrada++;
    } else if (transacao.tipo === "saida") {
      saida++;
    }
  }

  return { entrada, saida };
}

criaTransacao({ tipo: "entrada", valor: 165 });
criaTransacao({ tipo: "entrada", valor: 265 });
criaTransacao({ tipo: "saida", valor: 25 });
criaTransacao({ tipo: "saida", valor: 78 });
criaTransacao({ tipo: "entrada", valor: 45 });

console.log(mercado.saldo);

console.log(buscaMaiorTransacaoPorTipo("entrada"));

console.log(buscaMaiorTransacaoPorTipo("saida"));

console.log(
  `O valor medio das transações é de R$${buscarValorMedioTransacoes().toFixed(
    2
  )}`
);

console.log(buscaContagensTransacoes());
