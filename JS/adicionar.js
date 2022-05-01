window.onload = function createLocalStorage () {
    let produtosCache = localStorage.getItem(`Produtos`)
    if (produtosCache == 0) {
        localStorage.setItem('Produtos', 0)
    }
}

function arrayProdutos () {
    
    let produtosCache = localStorage.getItem(`Produtos`)
  
    if (produtosCache != 0) {
            produtos.push(produtosCache)
            console.log(produtos)
    }
}
var id = 0;





function post () {
    
    let nomeProduto = document.getElementById("newProduct_name").value
    let descProduto = document.getElementById("newProduct_desc").value
    let preco = document.getElementById("newProduct_price").value
    
    if (nomeProduto != 0 && descProduto != 0 && preco != 0) {
        let produtoNovo = {
            id: 3,
            nomeProduto: `${nomeProduto}`,
            descricao: `${descProduto}`,
            valor: `${preco}`,
            url: false,
            status: true
        };
        
        produtos.push(produtoNovo);
        console.log(produtos)

        localStorage.setItem(`Produtos`, produtos)

        criarProduto(produtoNovo.id)
    } else {
        alert("insere valor válido, cabeção")
    }

}



function criarProduto (id) {
    const container = document.createElement("container");
    container.class = "page-footer"

    const h1 = document.createElement("h1")
    h1.textContent = produtos[id]

    const divItens = document.getElementById("itens")
    document.body.appendChild(container)
}