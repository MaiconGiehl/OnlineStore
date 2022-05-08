const arrayProdutos = [];

window.onload = function pushLocalStorage() {
    let cache = localStorage.getItem('Produtos');
    cache = JSON.parse(cache);

    cache.forEach(produto => {
        arrayProdutos.push(produto);
    });
};

function post() {

    let tituloProduto = document.getElementById("newProduct_title").value;
    let imgProduto = document.getElementById("newProduct_img").value;
    let descProduto = document.getElementById("newProduct_desc").value;
    let precoProduto = document.getElementById("newProduct_price").value;
    let tecidoProduto = document.getElementById("newProduct_tissue").value;

    if (tituloProduto != 0 && descProduto != 0 && precoProduto != 0 && imgProduto != 0 && tecidoProduto != 0) {
        let produto = {
            id: arrayProdutos.length,
            titulo: tituloProduto,
            descricao: descProduto,
            preco: precoProduto,
            tecido: tecidoProduto,
            url: imgProduto,
        };

        arrayProdutos.push(produto);
        saveAtLocalStorage()
        alert("Produto adicionado com sucesso!")

    } else {
        alert("Preencha todos os campos.")

    }
}

function saveAtLocalStorage() {
    produtos = JSON.stringify(arrayProdutos);
    localStorage.setItem('Produtos', produtos);
}