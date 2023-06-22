//Criação de um array "imoveis" e de uma variavel "opcao" que serao utilizadas quando implementarmos o switch case
//Sempre bom entender que implementamos do lado de fora para que as mesmas sejam de acesso e visibilidade global dentro do codigo
let imoveis = [];
let opcao = "";
//Criação da alma desta aplicação, aqui criamos um menu
do {
  //Criamos uma opção onde o usuario escolhe a opção que deseja fazer dentro do nosso projeto
  // Utilizando aquela mesma variavel "opção" que declaramos la no começo do codigo
  opcao = prompt(
    "Imóveis cadastrados:" +
      " " +
      imoveis.length +
      "\n" +
      "\nEscolha uma ação:\n1 - Cadastrar um imóvel\n2 - Mostrar imóveis salvos\n3 - Sair"
  ); // Usamos um ".length" para podermos pegar o valor que seja o tamanho correto do array "Imoveis" criado em nivel global
  switch (opcao) {
    //Iniciamos o nosso switch case
    case "1":
      //No primeiro caso, iriamos salvar um imovel, entao criamos um objeto "Imovel" com os seguintes atributos: proprietario, numero de quartos, numero de banheiros e se possui garagem
      const imovel = {};
      imovel.proprietario = prompt("Informe o nome do proprietario");
      imovel.qtdQuartos = prompt("Quantos quartos possui o imóvel?");
      imovel.banheiros = prompt("Quantos banheiros possui o imóvel?");
      imovel.garagem = prompt("Possui garagem? Sim/Não");
      //Aqui depois de salvarmos os atributos, criamos um "confirm" usado para confirmar um ação do usuario
      const confirmacao = confirm(
        "Cadastrar este imóvel?\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.qtdQuartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui garagem: " +
          imovel.garagem
      );
      // Caso o usuario confirme a sua ação de salvar um imovel, acontecerá uma mensagem de salvo com sucesso
      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel cadastrado com sucesso!!");
      } else {
        // Se o usuario cancelar a sua ação, caso tenha digitado algo errado, a aplicação mostrará uma mensagem de volta para o menu principal
        alert("Voltando para o menu...");
      }
      break;
    case "2":
      // Aqui nesse caso o objetivo é o usuario visualizar os imoveis salvos
      // Logo, o usuario podera iterar sobre os imoveis que ja foram cadastrados
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].qtdQuartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui garagem?: " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      // Aqui temos um caso onde o usuario opta por sair da aplicação, onde seré exibida uma mensagem de saida
      alert("Encerrando...");
      break;
    default:
      // Aqui apenas por procedimentos padrões, será exibida uma mensagem caso o usuario digite algo diferente das opções fornecidas
      alert("Opção inválida!");
      break;
  }
  // Esse menu ficaria rodando infinitamente enquanto o usuario não escolhesse a opção de sair
} while (opcao !== "3");
