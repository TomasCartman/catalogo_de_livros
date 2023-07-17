import '@/styles/globals.css'
import styles from '@/styles/book.module.css'
import NavBar from "@/components/navbar/NavBar"
import DropdownItem from '@/components/dropdown/DropdownItem'
import DropdownMenu from '@/components/dropdown/DropdownMenu'
import Button from '@/components/button/Button'
import { FaBook } from 'react-icons/fa'
import { BiSolidBookAdd } from 'react-icons/bi'
import useDropdownHide from "@/hooks/useDropdownHide"
import Head from "next/head"

export default function addBook() {
    const { isDropdownHide, toggleDropdownVisibility } = useDropdownHide()

    return (
        <> 
            <Head>
                <title>Catálogo_de_livros: Adicionar livro</title>
            </Head>
            <header>
                <NavBar toggleDropdown={toggleDropdownVisibility}>Catálogo_de_livros</NavBar>
                <DropdownMenu hideDropdown={isDropdownHide} position='header'>
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
                <div className={styles.formcontainer}>
                    <label>Título</label>
                    <input type="text" />
                    <label>Gênero</label>
                    <input type="text" />
                    <label>Autor</label>
                    <input type="text" />
                    <label>Nota</label>
                    <input type="number" step={0.5} min={0} max={5} />
                    <div className={styles.buttonflex}>
                        <Button>Adicionar</Button>
                        <Button contrast>Cancelar</Button>
                    </div>
                </div>
            </main>
        </>

    )
}