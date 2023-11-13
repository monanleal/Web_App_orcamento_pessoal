class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
}


function cadastrarDespesa() {
    var ano = document.getElementById('ano');
    var mes = document.getElementById('mes');
    var dia = document.getElementById('dia')
    var tipo = document.getElementById('tipo');
    var descricao = document.getElementById('descricao');
    var valor = document.getElementById('valor');

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    console.log(despesa);
} 