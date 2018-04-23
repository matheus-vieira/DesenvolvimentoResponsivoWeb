var id;
function retornaDados(callback) {
    var retorno = 1;
    console.log("executando função retornaDados");
    id = window.setInterval(function () {
        console.log("chamando função de callback");
        callback(retorno++);
        console.log("finalizando função de callback");
    },5000);
    console.log("finalizando função retornaDados");
}

function local() {
    console.log("executando função local");
    retornaDados(executaRetorno);
    console.log("finalizando função local");
}

function executaRetorno(retorno) {
    console.log("executando função executaRetorno");
    console.log("finalizando função executaRetorno");
    console.log
}