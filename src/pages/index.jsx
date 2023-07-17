import BookComponent from '@/components/bookComponent/BookComponent'
import DropdownItem from '@/components/dropdown/DropdownItem'
import DropdownMenu from '@/components/dropdown/DropdownMenu'
import NavBar from '@/components/navbar/NavBar'
import PageUp from '@/components/pageUp/PageUp'
import '@/styles/globals.css'
import { FaBook } from 'react-icons/fa'
import { BiSolidBookAdd } from 'react-icons/bi'
import styles from '@/styles/index.module.css'
import { useState } from 'react'
import Head from 'next/head'

const bookList = [
    <BookComponent
        title='O mistério Sittaford'
        gender='Mistério'
        author='Agatha Christie'
    />,
    <BookComponent
        title='O misterioso caso de styles'
        gender='Mistério'
        author='Agatha Christie'
    />,
    <BookComponent
        title='O inimigo secreto'
        gender='Mistério'
        author='Agatha Christie'
    />,
    <BookComponent
        title='Os quatro grandes'
        gender='Mistério'
        author='Agatha Christie'
    />,
    <BookComponent
        title='Antes que ele precise - Um enigma Mackinzie White'
        gender='Mistério'
        author='Blake Pierce'
    />,
    <BookComponent
        title='Assassinato no campo de golfe'
        gender='Mistério'
        author='Agatha Christie'
    />,
    <BookComponent
        title='Guia Suno de contabilidade para investidores'
        gender='Contabilidade'
        author='Jean Tosetto'
    />,
    <BookComponent
        title='A espada do destino'
        gender='Fantasia'
        author='Andrzej Sapkowski'
    />,
    <BookComponent
        title='O misterioso Sr. Quin'
        gender='Mistério'
        author='Agatha Christie'
    />
]

export default function Index() {
    const [isDropdownHide, setDropdownHide] = useState(true)

    function toggleDropdownVisibility() {
        setDropdownHide(!isDropdownHide)
    }

    return (
        <>
            <Head>
                <title>Catálogo_de_livros</title>
            </Head>
            <header>
                <NavBar toggleDropdown={toggleDropdownVisibility}>Catálogo_de_livros</NavBar>
                <DropdownMenu hideDropdown={isDropdownHide}>
                    <DropdownItem
                        itemLabel='Livros'
                        icon={<FaBook size={20} />}
                        link='/'
                    />
                    <DropdownItem
                        itemLabel='Adicionar Livro'
                        icon={<BiSolidBookAdd size={20} />}
                        link='/addBook'
                    />
                </DropdownMenu>
            </header>
            <main>
                <PageUp />

                <div className={styles.bookscontainer}>
                    <h2 className={styles.title}>Livros:</h2>
                    {bookList.map((value, index) => {

                        return value
                    })}
                </div>
            </main>
        </>
    )
}