import '@/styles/globals.css'
import styles from '@/styles/index.module.css'
import BookComponent from '@/components/bookComponent/BookComponent'
import DropdownItem from '@/components/dropdown/DropdownItem'
import DropdownMenu from '@/components/dropdown/DropdownMenu'
import NavBar from '@/components/navbar/NavBar'
import PageUp from '@/components/pageUp/PageUp'
import Button from '@/components/button/Button'
import useDropdownsHide from '@/hooks/useDropDownsHide'
import { FaBook } from 'react-icons/fa'
import { BiSolidBookAdd } from 'react-icons/bi'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = 'api/books'

export default function Index() {
    const { getDropdownIsHide, toggleDropdownVisibility } = useDropdownsHide(2)
    const [filter, setFilter] = useState()
    const [filterDropdownTitle, setFilterDropdownTitle] = useState('Todos os livros')
    const [bookList, setBookList] = useState([])
    const [bookListServer, setBookListServer] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        axios.get(baseURL)
            .then(resp => resp.data)
            .then(resp => resp.books)
            .then(booksArray => {
                const books = booksArray.map(book => book)
                setBookListServer(books)
                setBookList(books)
            })
    }, [])

    const filterBookByValue = (book, value) => book.title.toLowerCase().includes(value.toLowerCase())
    const mapBooks = book => {
        return <BookComponent
            key={book.id}
            id={book.id}
            title={book.title}
            gender={book.gender}
            author={book.author}
            rate={book.rate}
            toRead={book.toRead}
        />
    }

    function renderBooks(books, filter) {
        if (filter === 'read') {
            const filteredBooks = books.filter(book => book.toRead === false)

            if (!filteredBooks.length) return 'Nenhum livro aqui. Adicione novos livros'
            else return filteredBooks.map(mapBooks)

        } else if (filter === 'notread') {
            const filteredBooks = books.filter(book => book.toRead === true)

            if (!filteredBooks.length) return 'Nenhum livro aqui. Adicione novos livros'
            else return filteredBooks.map(mapBooks)

        } else {
            if (!books.length) return 'Nenhum livro aqui. Adicione novos livros'
            else return books.map(mapBooks)
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

    function onChangeSearchValue(searchString) {
        setSearchValue(searchString)
        if(searchString === '') {
            setBookList([...bookListServer])
        }
    }

    function searchBook(event) {
        const key = event.code
        const value = event.currentTarget.value
        if (key === 'Enter' || key === 'NumpadEnter') {
            let books = [...bookList]
            books = books.filter(book => filterBookByValue(book, value))
            setBookList([...books])
        } 
    }

    return (
        <>
            <Head>
                <title>Catálogo_de_livros</title>
            </Head>
            <header>
                <NavBar 
                    toggleDropdown={() => toggleDropdownVisibility(0)}
                    displaySearch
                    searchValue={searchValue}
                    onChangeSearchValue={onChangeSearchValue}
                    onKeyDown={searchBook}
                >Catálogo_de_livros</NavBar>
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