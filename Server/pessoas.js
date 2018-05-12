const fs = require("fs");
let lista = [];
const colecao = "pessoas";
module.exports.colecao = colecao;
lista = JSON.parse(fs.readFileSync(colecao + ".json"));

module.exports.adiciona = (item) => {
    if (lista.length == 0) {
        item.id = 1;
    }
    else {
        item.id = lista[lista.length - 1].id + 1;
    }
    lista.push(item);
    fs.writeFileSync(colecao + ".json", JSON.stringify(lista));
    return item;
}

module.exports.lista = () => {
    return lista;
}

module.exports.porId = (id) => {
    let i = lista.find(item => item.id == id);
    if (i) {
        return i;
    }
    return {};
}


module.exports.altera = (item) => {
    let r = {};
    lista.forEach(it => {
        if (it.id == item.id) {
            console.log(it, item, it.id == item.id, it.id === item.id);
            it.nome = item.nome;
            it.idade = item.idade;
            r = it;
            fs.writeFileSync(colecao + ".json", JSON.stringify(lista));
        }
    })
    return r;
}

module.exports.remove = (id) => {
    let r = { id: id, nome: null };
    lista = lista.filter(it => it.id != id);
    fs.writeFileSync(colecao + ".json", JSON.stringify(lista));
    return r;
}