// importação dos objetos
const objetos = require("./objetos.js");

//Criar produto (create)
function criaProduto(nome, valor, estoque) {
    const obj = {nome: nome, valor: valor, estoque: estoque};
    objetos.produtos.push(obj);
}

//Ver Produtos (read)
function verProdutos() {
    console.log(objetos.produtos);
    return objetos.produtos;
}


//Atualizar produtos(update)
function atualizaProduto(nome, novoValor, novoEstoque) {
    const index = objetos.produtos.findIndex(item => item.nome == nome);

    if(novoValor) {
        objetos.produtos[index].valor = novoValor;
    }
    if(novoEstoque) {
        objetos.produtos[index].estoque = novoEstoque;
    }
}

//Excluir produtos(delete)
function excluirProduto(nome) {
    const index = objetos.produtos.findIndex(item => item.nome == nome);
    objetos.produtos.splice(index, 1);
}

//COMPRAR PRODUTOS
function comprarProduto(nomeProduto, nomeCliente, quantidade) {
    const produtoIndex = objetos.produtos.findIndex(item => item.nome == nomeProduto);
    const clienteIndex = objetos.clientes.findIndex(item => item.nome == nomeCliente);
    const valorDaCompra = objetos.produtos[produtoIndex].valor * quantidade;

    if(objetos.clientes[clienteIndex].saldo >= valorDaCompra) {
        objetos.clientes[clienteIndex].saldo = objetos.clientes[clienteIndex].saldo - valorDaCompra;
        objetos.produtos[produtoIndex].estoque = objetos.produtos[produtoIndex].estoque - quantidade;
        let i = 1;
        while(i <= quantidade) {
            i++;
            objetos.clientes[clienteIndex].produtos.push(nomeProduto);
        }
        console.log(objetos.clientes[clienteIndex]);
        console.log(objetos.produtos[produtoIndex]);
    } else {
        console.log('Saldo insuficiente');
    }

}



// criaProduto('Monitor', 500, 1000);
// atualizaProduto('Teclado', null, 20);
// excluirProduto('Mouse');
comprarProduto('Teclado', 'Kelwin', 3)
// verProdutos();
