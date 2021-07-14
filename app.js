
// pegar o input 

// Se for sim, mostra as categorias disponoveis, pergunta qual ela escolhe. 

// Se não, mostra todos os livros em ordem crescente pela quantidade de  páginas.

const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis:')
    console.log('Produtividade e estilo de vida', '/História brasileira', '/Américas', '/Tecnologia', '/Estilo de vida', '/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria você escolhe?')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else{
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Esses são todos os livros disponiveis:')
    console.table(livrosOrdenados)
}
