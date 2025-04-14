const livros = require("./Livros.json");

function mostraLivros() {
    livros.forEach((livro) => {
        console.log(`${livro.titulo} - ${livro.autor} - Ano: ${livro.ano} - Páginas: ${livro.paginas} - Preço: R$ ${livro.preco.toFixed(2)}`);
    });
}

function addLivro(titulo, autor, editora, ano, sinopse, paginas, genero, preco) {
    livros.push({
        titulo: titulo,
        autor: autor,
        editora: editora,
        ano: ano,
        sinopse: sinopse,
        paginas: paginas,
        genero: genero,
        preco: preco
    });
    console.log("Livro adicionado com sucesso!!");
}


addLivro("Tigrinho", "Guilherme Rodrigues", "Luiz Coelho e CIA", 2020, "Um tigrinho que gosta de dinheiro", 1, ["Roubo", "Falsidade", "Mentira"], 600);

function criarArquivo() {
    const fs = require('fs');
    const livrosTexto = JSON.stringify(livros, null, 2); 
    fs.writeFileSync("Livros.json", livrosTexto);
}



mostraLivros();