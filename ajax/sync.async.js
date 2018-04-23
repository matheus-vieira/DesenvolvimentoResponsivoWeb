function local() {
    console.log("executando função local");
    retornaDados(executaRetorno);
    console.log("finalizando função local");
}

function retornaDados(callback) {
    var retorno = 1;
    console.log("executando função retornaDados");
    window.setTimeout(function () {
        console.log("chamando função de callback");
        callback(retorno++);
        console.log("finalizando função de callback");
    },0);
    console.log("finalizando função retornaDados");
}

function executaRetorno() {
    console.log("executando função executaRetorno");
    console.log("finalizando função executaRetorno");
}