#  <center> Realização de testes utilizando Mocha e Chai

## <center> Objetivo
O seguinte repositório tem como objetivo definir o que são e apresentar a realização de testes utilizando os frameworks para JavaScript denominados Mocha e Chai. A partir dessa premissa, está documentação irá auxiliar aqueles que desejam reproduzir taís testes em sua máquina, podendo implementar novos testes e aprimorar aqueles já existentes.

Solicito, caso seja utilizado, a presença de créditos pelo meu desenvolvimento.

## <center> Definição: Mocha & Chai

Mocha e Chai são duas bibliotecas para realização de testes em JavaScript, sendo usadas em conjunto para escrever principalmente testes unitários e de integração. São amplamente adotadas pela comunidade de desenvolvimento de software, oferecendo uma maneira robusta e flexível de garantir a qualidade do código por meio de testes automatizados.

Além disso, elas contém recursos como relatórios de teste, suporte a assincronismo e suporte a diferentes estilos de escrita de testes (como TDD - Test Driven Development e BDD - Behavior Driven Development).


| Framework | <center> Utilizade | Documentação |
|-----------|-----------|--------------|
| __Mocha__ | Framework de testes que permite execução tanto por ambientes de execução Node quanto no navegador. | https://mochajs.org |
| __Chai__ | É uma biblioteca de asserção (ou "assertion library") que pode ser usada em conjunto com o Mocha fornecendo uma série de métodos e estilos de asserção que facilitam a escrita e a leitura dos testes. | https://www.chaijs.com |

##  <center> Pré-requisitos

- Um editor de código-fonte;
- Instalação do Node.js;

###  <center>  Software recomendado

| Software | Versão | Download |
|----------|--------|----------|
| Visual Studio Code| 1.79.2 | https://code.visualstudio.com/download |

## <center> Instalação

Para a execução dos testes, será necessário a realização dos seguintes passos:

1. Abra seu editor de código-fonte;
2. Crie um projeto em Node.js;
2. Crie uma pasta __test__ e um documento denominado __sample.spec.js__;
3. Inicie o Propt de comando ou Windows PowerShell de sua máquina (Para VSCode, inicialize utilizando o atalho Ctrl + Shift + ');
4. Com o Propt aberto, insira o seguinte comando:
`npm i -D Mocha Chai`

A partir dessa execução básica, iremos organizar nosso ambiente de testes.

5. __Fora do arquivo test__, elabore um arquivo json chamado __package.json__;
6. Insira o seguinte código:

![](https://media.discordapp.net/attachments/1027385935333171220/1125497339432423534/image.png?width=351&height=525)

7. Salve e elabore uma pasta __src__ para armazenar o documento que deseja testar, o projeto ficará com a seguinte estrutura:

![](https://media.discordapp.net/attachments/1027385935333171220/1125491626551296000/image.png?width=217&height=206)

## <center> Criando os testes
Para a criação dos testes, será utilizado o framework previamente instalado chamado __Mocha__, com ele, será possível gerar scripts de testes para verificar possíveis casos de testes.

- Antes de realizar, é importante adicionar o import referente ao documento que deseja testar, e também do framework auxiliar __Chai__, pelo qual irá complementar a utilização do Mocha.

Estrutura do código:

    
    import Arquivo_teste from '../src/Arquivo_teste.js'
    import chai from 'chai'
    const expect = chai.expect

    describe('Conjunto de testes', () => {
    
    it('Verificar X coisa', () => {
        //código
    });

_Para a elaboração dos testes, será necessária a consulta das documentações de ambos os framewoks._

## <center> Executando os testes

Como executar:
1. Salve a documentação de testes;
2. Inicie o Console de sua preferência (Para VSCode, inicialize utilizando o atalho Ctrl + Shift + ');
3. Insira o seguinte comando: `npm test`;

O resultado esperado será a validação dos testes programados, demonstrando se eles foram ou não falhos.

![](https://media.discordapp.net/attachments/1027385935333171220/1125496009666084915/image.png?width=603&height=202)

## Colaboradores
- @NimsayS - Yasmin Lima
## Licença
- [Licença do Arquivo]([https://gitlab.com/compass_anniely/project_moca_chai/-/blob/main/LICENSE](https://github.com/annielymariah/project_mocha_chai/blob/main/LICENSE)https://github.com/annielymariah/project_mocha_chai/blob/main/LICENSE)
