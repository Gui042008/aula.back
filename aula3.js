const livros = require ("./livrosTexto")
function mostraLivros() {
    livros.forEach((livro) => {
        console.log(`${livro.titulo} - ${livro.autor} - Ano: ${livro.ano} - Páginas: ${livro.paginas} - Preço: R$ ${livro.preco.toFixed(2)}`);
    });
}

//Gera um arquivo JSON dos livros
function criarArquivo(){
    let livrosTexto = JSON.stringify(livros);
    const fs = require ('fs');
    fs.writeFileSync("Livros.json", livrosTexto)



}

//criarArquivo();

mostraLivros();