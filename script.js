
// Captura das iformações para testes e validações

const form = document.querySelector("#form");
const InputPlaca = document.querySelector("#PlacaVeiculo");
const InputProprietario = document.querySelector("#NomeProprietario");
const InputNumeroAP = document.querySelector("#NumeroAP");
const InputBlocoAP = document.querySelector("#BlocoAP");
const InputModeloVeiculo = document.querySelector("#ModeloVeiculo");
const InputCorVeiculo = document.querySelector("#CorVeiculo");
const InputNumeroVagaEstacionamento = document.querySelector("#NumeroVagaEstacionamento");


// Verifica o momento que o botao Enviar é acionado.

form.addEventListener("submit", (event) => {
    event.preventDefault();

// Verifica de a Placa do veiculo esta em branco.

if (InputPlaca.value === ""){

    alert("Não é possivel deixar a placa do veiculo em branco!");
    return;
}

// Verifica se o nome do proprietario do veiculo esta em branco.

if (InputProprietario.value === ""){

    alert("Não é possivel deixar o nome do Proprietario do veiculo em branco!");
    return;
}


// Verifica se o numero do apartamento esta em branco

if (InputNumeroAP.value === ""){

    alert("Não é possivel deixar o numero do apartamento em branco!");
    return;
}


// Verifica se o bloco do apartamento esta em branco

if (InputBlocoAP.value === ""){

    alert("Não é possivel deixar o bloco do apartamento em branco!");
    return;
}

// Verifica se o modelo do veiculo esta em branco

if (InputModeloVeiculo.value === ""){

    alert("Não é possivel deixar o modelo do veiculo em branco!");
    return;
}

// Verifica se a cor do veiculo esta em branco

if (InputCorVeiculo.value === ""){

    alert("Não é possivel deixar a cor do veiculo em branco!");
    return;
}


// Verifica se o numero da vaga do estacionamento esta em branco

if (InputNumeroVagaEstacionamento.value === ""){

    alert("Não é possivel deixar o numero da vaga do estacionamento em branco!");
    return;
}

// Realiza o envio das informações e envia uma mensagem que as iformações foram enviadas com sucesso

    form.submit();
    alert("Informações enviadas com sucesso!");


    
});


// Realiza o processo de exclusão das vagas cadastradas

function myFunction()
{
var x;

var vagaExcluir=prompt("Digite a Vaga que deseja excluir:");

if (vagaExcluir!=null)
  {
  x="Vacê removeu o usuario da vaga: " + vagaExcluir;
  document.getElementById("usuarioExcluido").innerHTML=x;
  }
}


