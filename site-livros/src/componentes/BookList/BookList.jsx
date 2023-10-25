/* eslint-disable react/prop-types */
/* eslint-disable indent */

import Book from '../Book/Book';
import './BookList.css';
import orgulhopreconceito from '../../capaslivros/orgulhoPreconceito.jpg';
import romeujulieta from '../../capaslivros/romeujulieta.jpg';
import morrouivantes from '../../capaslivros/morrouivantes.jpg';
import domquixote from '../../capaslivros/domquixote.jpg';
import pequenoprincipe from '../../capaslivros/pequenoprincipe.jpg';
import domcasmurro from '../../capaslivros/domcasmurro.jpg';
import cortico from '../../capaslivros/cortico.jpg';
import gabriela from '../../capaslivros/gabriela.jpg';
import sertoes from '../../capaslivros/sertoes.jpg';
import horaestrela from '../../capaslivros/horaestrela.jpg';
import divinacomedia from '../../capaslivros/divinacomedia.jpg';
import frankenstein from '../../capaslivros/frankenstein.jpg';


const lista_livros = [
    {
        id: 1,              
        title: 'Orgulho e Preconceito',
        autor: 'Jane Auyten',
        img: orgulhopreconceito,
        preco: 25.60,
        editora: 'Martin Claret',
    },
    {
        id: 2,              
        title: 'A Hora da Estrela',
        autor: 'Clarice Lispector',
        img: horaestrela,
        preco: 28.50,
        editora: 'Rocco',
    },
    {
        id: 3,              
        title: 'Romeu e Julieta',
        autor: 'William Shakespeare',
        img: romeujulieta,
        preco: 35.80,
        editora: 'Penguin Companhia',
    },
    {
        id: 4,              
        title: 'O Morro dos Ventos Uivantes',
        autor: 'Emily Bronte',
        img: morrouivantes,
        preco: 25.60,
        editora: 'Principis',
    },
    {
        id: 5,              
        title: 'Dom Quixote',
        autor: 'Miguel de Cervantes',
        img: domquixote,
        preco: 30.60,
        editora: 'Moderna',
    },
    {
        id: 6,              
        title: 'O Pequeno Príncipe',
        autor: 'Antoine de Saint-Exupéry',
        img: pequenoprincipe,
        preco: 45.80,
        editora: 'Agir',
    },
    {
        id: 7,              
        title: 'Dom Casmurro',
        autor: 'Machado de Assis',
        img: domcasmurro,
        preco: 25.60,
        editora: 'Martin Claret',
    },
    {
        id: 8,              
        title: 'O Cortiço',
        autor: 'Aluísio de Azevedo',
        img: cortico,
        preco: 27.50,
        editora: 'L&PMPocket',
    },
    {
        id: 9,              
        title: 'Gabriela, Cravo e Canela',
        autor: 'Jorge Amado',
        img: gabriela,
        preco: 32.80,
        editora: 'Companhia das Letras',
    },
    {
        id: 10,              
        title: 'Os sertões',
        autor: 'Euclides da Cunha',
        img: sertoes,
        preco: 25.60,
        editora: 'L&PMPocket',
    },
    {
        id: 11,              
        title: 'A Divina Comédia',
        autor: 'Dante Alighieri',
        img: divinacomedia,
        preco: 30.00,
        editora: 'L&PMPocket',
    },
    {
        id: 12,              
        title: 'Frankenstein',
        autor: 'Mary Shelly',
        img: frankenstein,
        preco: 34.50,
        editora: 'Principis',
    },
];

/* eslint-disable react/react-in-jsx-scope */
export default function BookList(){
    return (
      <ul className="BookList">
        {
            lista_livros.map((livro)=>(<Book key = {livro.id} 
                title={livro.title} 
                autor={livro.autor} 
                img={livro.img} 
                preco={livro.preco} 
                editora={livro.editora}/>))
        }
      </ul>
  
    );
}
