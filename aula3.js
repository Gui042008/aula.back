let livros = [
    {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        autor: "J.R.R. Tolkien",
        editora: "HarperCollins",
        ano: 1954,
        sinopse: "Um hobbit chamado Frodo Bolseiro herda um anel mágico que deve ser destruído.",
        paginas: 423,
        genero: ["fantasia", "aventura"],
        preco: 59.90
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        editora: "Companhia das Letras",
        ano: 1949,
        sinopse: "Uma distopia sobre um regime totalitário que controla a vida das pessoas.",
        paginas: 368,
        genero: ["ficção científica", "distopia"],
        preco: 39.90
    },
    {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        editora: "Editora Nova Fronteira",
        ano: 1899,
        sinopse: "A história de Bentinho e sua obsessão por Capitu.",
        paginas: 320,
        genero: ["romance", "clássico"],
        preco: 29.90
    },
    {
        titulo: "A Revolução dos Bichos",
        autor: "George Orwell",
        editora: "Companhia das Letras",
        ano: 1945,
        sinopse: "Uma fábula sobre a revolução de animais em uma fazenda.",
        paginas: 152,
        genero: ["sátira", "política"],
        preco: 19.90
    },
    {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        editora: "Agir",
        ano: 1943,
        sinopse: "A história de um jovem príncipe que viaja por diferentes planetas.",
        paginas: 96,
        genero: ["infantil", "filosófico"],
        preco: 24.90
    }
];

function mostraLivros() {
    livros.forEach((livro) => {
        console.log(`${livro.titulo} - ${livro.autor} - Ano: ${livro.ano} - Páginas: ${livro.paginas} - Preço: R$ ${livro.preco.toFixed(2)}`);
    });
}

mostraLivros();