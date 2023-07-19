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
import { useEffect, useState } from 'react'
import Button from '@/components/button/Button'
import axios from 'axios'

const baseURL = 'api/books'

/*
const bookList = [
    {
        'title': 'O mistério Sittaford',
        'gender': 'Mistério',
        'author': 'Agatha Christie',
        'rate': 5
    },
    {
        'title': 'O misterioso caso de styles',
        'gender': 'Mistério',
        'author': 'Agatha Christie',
        'rate': 4.5
    },
    {
        'title': 'O inimigo secreto',
        'gender': 'Mistério',
        'author': 'Agatha Christie',
        'rate': 4
    },
    {
        'title': 'Os quatro grandes',
        'gender': 'Mistério',
        'author': 'Agatha Christie',
        'rate': 2.5
    },
    {
        'title': 'Antes que ele precise - Um enigma Mackinzie White',
        'gender': 'Mistério',
        'author': 'Blake Pierce',
        'rate': 3.5
    },
    {
        'title': 'Assassinato no campo de golfe',
        'gender': 'Mistério',
        'author': 'Agatha Christie',
        'rate': 3
    },
    {
        'title': 'Guia Suno de contabilidade para investidores',
        'gender': 'Contabilidade',
        'author': 'Jean Tosetto',
        'rate': 1.5
    },
    {
        'title': 'A espada do destino',
        'gender': 'Fantasia',
        'author': 'Andrzej Sapkowski',
        'rate': 5
    },
    {
        'title': 'O misterioso Sr. Quin',
        'gender': 'Mistério',
        'author': 'Agatha Christie',
        'rate': 2.5
    }
]
*/

export default function Index() {
    const { getDropdownIsHide, toggleDropdownVisibility } = useDropdownsHide(2)
    const [filter, setFilter] = useState()
    const [filterDropdownTitle, setFilterDropdownTitle] = useState('Todos os livros')
    const [bookList, setBookList] = useState([])
    

    useEffect(() => {
        axios.get(baseURL)
            .then(resp => resp.data)
            .then(resp => resp.books)
            .then(booksArray => {
                const books = booksArray.map(book => book)
                setBookList(books)
            })
    }, [])


    const mapBooks = (book, index) => {
        return <BookComponent
            key={index}
            title={book.title}
            gender={book.gender}
            author={book.author}
            rate={book.rate}
        />
    }

    function renderBooks(books, filter) {
        if (filter === 'read') {
            const filteredBooks = books.filter(book => book.read === true)
            if (!filteredBooks.lenght) {
                return 'Nenhum livro aqui. Adicione novos livros'
            } else {
                return filteredBooks.map(mapBooks)
            }
        } else if (filter === 'notread') {
            const filteredBooks = books.filter(book => book.read === false)
            if (!filteredBooks.lenght) {
                return 'Nenhum livro aqui. Adicione novos livros'
            } else {
                return filteredBooks.map(mapBooks)
            }
        } else {
            return books.map(mapBooks)
        }
    }

    function showAllBooks() {
        setFilter('')
        setFilterDropdownTitle('Todos os Livros')
        toggleDropdownVisibility(1)
    }

    function showReadBooksOnly() {
        setFilter('read')
        setFilterDropdownTitle('Livros Lidos')
        toggleDropdownVisibility(1)
    }

    function showNotReadBooksOnly() {
        setFilter('notread')
        setFilterDropdownTitle('Livros Não Lidos')
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
                            <DropdownItem itemLabel='Livros Não lidos' onClick={showNotReadBooksOnly} />
                        </DropdownMenu>
                    </div>
                    <h2 className={styles.title}>{filterDropdownTitle}</h2>
                    {renderBooks(bookList, filter)}
                </div>
            </main>
        </>
    )
}