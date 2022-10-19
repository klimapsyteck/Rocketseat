const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    }
];

// • Contar o número de categorias e o número de livros em cada categorias

const totalCategory = booksByCategory.length

console.log("Total de Categorias: " + totalCategory)

for(let category of booksByCategory){
    console.log("Total de livros da categoria, " + category.category)
    console.log(category.books.length)
}

function countAuthor(){
    let authors = [];

    for(let category of  booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log("Quantidade de autores", authors.length)
}

countAuthor()


function booksByAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`
        Livros do autor ${author}: ${books.join(", ")}
    `)
}

booksByAuthor('Augusto Cury')