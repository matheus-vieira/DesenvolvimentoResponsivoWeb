Matheus
"Matheus"
'Matheus'
var nome = "Matheus";
nome
4+2
var resultado = 4+2;
resultado
resultado = "Matheus";
resultado
var obj = { "nome": "Matheus", cidade: "Curitiba", tempoNaCidade: 10 };
obj
obj.cidade
var obj = { "nome": "Matheus", cidade: "Curitiba", tempoNaCidade: 10, nome: "Fulano" };
obj.nome
var obj = { "nome": "Matheus", cidade: "Curitiba", tempoNaCidade: 10, nome: "Fulano", data: Date.now() };
obj
obj.getData = function () {
  return new Date(this.data);
};
obj.getData()
function Pessoa(nome, cidade, tempoNaCidade) {
    var pessoa = {
        "nome": nome,
        cidade: cidade,
        tempoNaCidade: tempoNaCidade,
        data: Date.now()
    };
    pessoa.getData = function () {
        return new Date(this.data);
    };
    return pessoa;  
}

var objMatheus = Pessoa("Matheus", "Curitiba", 10);
var objFulano = Pessoa("Fulano", "Curitiba", 50);
objMatheus
objFulano

function Pessoa(nome, cidade, tempoNaCidade, anoNascimento) {
    var pessoa = {
        "nome": nome, cidade: cidade, tempoNaCidade: tempoNaCidade,
        anoNascimento: anoNascimento,
        data: Date.now()
    };
    pessoa.getData = function () {
        return new Date(this.data);
    };
    pessoa.idade = function () {
        var dataAtual = new Date(Date.now());
        return dataAtual.getFullYear() - this.anoNascimento
    }
    return pessoa;  
}

var objMatheus = Pessoa("Matheus", "Curitiba", 10, 2000);
var objFulano = Pessoa("Fulano", "Curitiba", 50, 1959);

objFulano.idade();
objMatheus.idade();


function outraFuncao() {
    //corpo da função
    var a = "olá";
}
a

function outraFuncao() {
    //corpo da função
    var a = "olá";
}
function fnInteiro() {
    var a = 10;
}

var b = "Sou global";
function outraFuncao() {
    //corpo da função
    var a = "olá";
    console.log("Valor de a: ", a);
    console.log("Valor de b: ", b);
}
function fnInteiro() {
    var a = 10;
    console.log("Valor de a: ", a);
    console.log("Valor de b: ", b);
}
outraFuncao()
b
b = { nome: "Matheus" };
fnInteiro()
outraFuncao()

function idade() {
    var dataAtual = new Date(Date.now());
    return dataAtual.getFullYear() - this.anoNascimento
}

idade()

function idade() {
    console.log(this);
    var dataAtual = new Date(Date.now());
    return dataAtual.getFullYear() - this.anoNascimento
}
idade();

objMatheus.idade = idade

this

this.anoNascimento = 1992;

idade()
