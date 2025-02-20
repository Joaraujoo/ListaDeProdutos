
//Modelo
class Produtos {
    constructor(nome, descricao, valor, opcao){
        this.nome = nome
        this.descricao = descricao
        this.valor = valor
        this.opcao = opcao
    }

    //verifica se os dados do input estão preenchidos 
    validarDados(){

        for(let i in this){
            if(this[i] === undefined || this[i] === '' || this[i] === null){
                return false
            }
        }
        return true
    }

}

let produtos = []

//Cadastrar os produtos
function Cadastrar(){

    //recupera o valor do input
    let nome = document.getElementById('nomeProduto')
    let descricao = document.getElementById('desProduto')
    let valor = document.getElementById('valorProduto')
    let opcao = document.querySelector('input[name="opcao"]:checked')

    //cria uma instância de Produtos
    let produto = new Produtos(
        nome.value,
        descricao.value,
        valor.value,
        opcao.value
    )

    //verifica os campos do input
    if(produto.validarDados()){

        produtos.push(produto)

        //limpa a tabela 
        let listaProdutos = document.getElementById('listaProdutos')
        listaProdutos.innerHTML = ''

        //ordena do menor valor ao maior
        produtos.sort((a, b) => a.valor - b.valor)

        //exibe os produtos na tabela
        produtos.forEach(produto => {
            let linha = listaProdutos.insertRow();
            linha.insertCell(0).innerHTML = produto.nome;
            linha.insertCell(1).innerHTML = produto.descricao;
            linha.insertCell(2).innerHTML = `R$ ${parseFloat(produto.valor).toFixed(2).replace('.', ',')}`
        });

        //altera o display de none para block
        let div = document.getElementById('listagem')
        div.style.display = 'block'

        // Limpa os campos após o cadastro
        nome.value = ''
        descricao.value = ''
        valor.value = ''

        let mensagemErro = document.getElementById("mensagemErro");

        mensagemErro.innerHTML = '';
        mensagemErro.className = "";

        
    } else {

        //mensagem de erro no cadastro
        let mensagemErro = document.getElementById("mensagemErro");

        mensagemErro.innerHTML = 'Erro ao cadastrar, verifique os dados!';
        mensagemErro.className = "alert alert-danger";
        
    }
    
}



