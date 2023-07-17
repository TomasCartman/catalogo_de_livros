import NavBar from "@/components/navbar/NavBar"
import DropdownItem from '@/components/dropdown/DropdownItem'
import DropdownMenu from '@/components/dropdown/DropdownMenu'
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

                addBook
            </main>
        </>

    )
}