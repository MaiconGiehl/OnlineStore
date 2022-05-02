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

        const title = document.createElement('h2');
        title.textContent = produto.titulo;
        div.appendChild(title);

        const image = document.createElement("img")
        if (produto.cor == "white") {
            image.src = "https://i.pinimg.com/originals/26/03/9d/26039dcaf78da4506811346aa4956685.png";
        } else if (produto.cor == "black") {
            image.src = "https://i.pinimg.com/originals/1d/43/2a/1d432ae58f1d67c07a72e6d33775b5af.png";
        } else {
            image.src = "https://purepng.com/public/uploads/large/purepng.com-red-t-shirtclothingred-t-shirtfashion-dress-shirt-cloth-tshirt-631522326799mcfdo.png";
        }
        image.classList.add("camisas");
        div.appendChild(image);

        const preco = document.createElement('h3');
        preco.textContent = `R$${produto.preco},00`;
        div.appendChild(preco);

        const tecido = document.createElement('p');
        tecido.textContent = `Feita de ${produto.tecido}`;
        div.appendChild(tecido);

        const desc = document.createElement('p');
        desc.textContent = produto.descricao;
        div.appendChild(desc);

        tabelaProdutos.appendChild(div);
    })
}