const arrayProdutos = [];

window.onload = function pushLocalStorage() {
    let cache = localStorage.getItem('Produtos');

    cache = JSON.parse(cache);
    cache.forEach(produto => {
        arrayProdutos.push(produto);
    });

    render();
}

function render() {
    const tabelaProdutos = document.getElementById('tabelaProdutos');

    arrayProdutos.forEach(produto => {
        const div = document.createElement("div");
        div.classList.add("produtosVenda");
        div.addEventListener('click', function () {
            alert('Desculpe, mas o produto está indisponível no momento.');
        });

        const title = document.createElement('h1');
        title.textContent = produto.titulo;
        div.appendChild(title);

        const image = document.createElement("img")
        image.src = produto.url;
        image.classList.add("camisas");
        div.appendChild(image);

        const preco = document.createElement('h3');
        preco.textContent = `R$${produto.preco},99`;
        div.appendChild(preco);

        const tecido = document.createElement('h5');
        tecido.textContent = `Feita de ${produto.tecido}`;
        div.appendChild(tecido);

        const desc = document.createElement('p');
        desc.textContent = produto.descricao;
        div.appendChild(desc);

        tabelaProdutos.appendChild(div);
    })
}