import BookComponent from '@/components/bookComponent/BookComponent'
import DropdownItem from '@/components/dropdown/DropdownItem'
import DropdownMenu from '@/components/dropdown/DropdownMenu'
import NavBar from '@/components/navbar/NavBar'
import PageUp from '@/components/pageUp/PageUp'
import '@/styles/globals.css'
import { FaBook } from 'react-icons/fa'
import { BiSolidBookAdd } from 'react-icons/bi'
import styles from '@/styles/index.module.css'
import Head from 'next/head'
import useDropdownsHide from '@/hooks/useDropDownsHide'
import { useState } from 'react'
import Button from '@/components/button/Button'

const bookList = [
    {
        'title': 'O mistério Sittaford',
        'gender': 'Mistério',
        'author': 'Agatha Christie'
    },
    {
        'title': 'O misterioso caso de styles',
        'gender': 'Mistério',
        'author': 'Agatha Christie'
    },
    {
        'title': 'O inimigo secreto',
        'gender': 'Mistério',
        'author': 'Agatha Christie'
    },
    {
        'title': 'Os quatro grandes',
        'gender': 'Mistério',
        'author': 'Agatha Christie'
    },
    {
        'title': 'Antes que ele precise - Um enigma Mackinzie White',
        'gender': 'Mistério',
        'author': 'Blake Pierce'
    },
    {
        'title': 'Assassinato no campo de golfe',
        'gender': 'Mistério',
        'author': 'Agatha Christie'
    },
    {
        'title': 'Guia Suno de contabilidade para investidores',
        'gender': 'Contabilidade',
        'author': 'Jean Tosetto'
    },
    {
        'title': 'A espada do destino',
        'gender': 'Fantasia',
        'author': 'Andrzej Sapkowski'
    },
    {
        'title': 'O misterioso Sr. Quin',
        'gender': 'Mistério',
        'author': 'Agatha Christie'
    }
]

export default function Index() {
    const { getDropdownIsHide, toggleDropdownVisibility } = useDropdownsHide(2)
    const [filter, setFilter] = useState()
    const [filterDropdownTitle, setFilterDropdownTitle] =  useState('Todos os livros')

    function renderBooks(books, filter) {
        if (filter === 'read') {

        } else if (filter === 'notread') {

        } else {
            return books.map((book, index) => {
                return <BookComponent
                    key={index}
                    title={book.title}
                    gender={book.gender}
                    author={book.author}
                />
            })
        }
    }

    function showAllBooks() {
        setFilter('')
        toggleDropdownVisibility(1)
    }

    function showReadBooksOnly() {
        setFilter('read')
        toggleDropdownVisibility(1)
    }

    function showNotReadBooksOnly() {
        setFilter('notread')
        toggleDropdownVisibility(1)
    }

    return (
        <>
            <Head>
                <title>Catálogo_de_livros</title>
            </Head>
            <header>
                <NavBar toggleDropdown={() => toggleDropdownVisibility(0)}>Catálogo_de_livros</NavBar>
                <DropdownMenu hideDropdown={getDropdownIsHide(0)} position='header'>
                    <DropdownItem
                        itemLabel='Livros'
                        icon={<FaBook size={20} />}
                        link='/'
                    />
                    <DropdownItem
                        itemLabel='Adicionar Livro'
                        icon={<BiSolidBookAdd size={20} />}
                        link='/book'
                    />
                </DropdownMenu>
            </header>
            <main>
                <PageUp />
                <div className={styles.bookscontainer}>
                    <div>
                        <Button onClick={() => toggleDropdownVisibility(1)}>
                            Filtrar
                        </Button>
                        <DropdownMenu hideDropdown={getDropdownIsHide(1)}>
                            <DropdownItem itemLabel='Todos os livros' onClick={showAllBooks} />
                            <DropdownItem itemLabel='Livros Lidos' onClick={showReadBooksOnly} />
                            <DropdownItem itemLabel='Livros Não lidos'  onClick={showNotReadBooksOnly} />
                        </DropdownMenu>
                    </div>
                    <h2 className={styles.title}>{filterDropdownTitle}</h2>
                    {renderBooks(bookList, filter)}
                </div>
            </main>
        </>
    )
}


/*

<button
                            type='button'
                            className={styles.button}
                            onClick={() => toggleDropdownVisibility(1)}
                        >Filtrar</button>

*/