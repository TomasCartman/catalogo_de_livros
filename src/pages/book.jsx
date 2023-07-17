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
import SwitchButton from '@/components/button/SwitchButton'
import { useState } from 'react'

export default function Book() {
    const { isDropdownHide, toggleDropdownVisibility } = useDropdownHide()
    const [switchButtonActive, setSwitchButtonActive] = useState(false)

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
                <div className={styles.maincontainer}>
                    <div className={styles.titletogglebutton}>
                        <h2 className={styles.title}>Novo livro</h2>
                        <div className={styles.switchdiv}>
                            <p className={styles.switchlabel}>Para ler:</p>
                            <SwitchButton
                                isChecked={switchButtonActive}
                                onChange={() => setSwitchButtonActive(!switchButtonActive)}
                            />
                        </div>
                    </div>

                    <div className={styles.formcontainer}>
                        <div className={styles.formdiv}>
                            <label className={styles.label}>Título</label>
                            <input type="text" className={styles.input} />
                        </div>
                        <div className={styles.formdiv}>
                            <label className={styles.label}>Gênero</label>
                            <input type="text" className={styles.input} />
                        </div>
                        <div className={`${styles.formdiv} ${switchButtonActive ? styles.formjustifystart : ''}`}>
                            <label className={styles.label}>Autor</label>
                            <input type="text" className={styles.input} />
                        </div>
                        <div className={`${styles.formdiv} ${switchButtonActive ? styles.hide : ''}`}>
                            <label className={styles.label}>Nota</label>
                            <input type="number" step={0.5} min={0} max={5} className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.buttonflex}>
                        <Button>Adicionar</Button>
                        <Button contrast>Cancelar</Button>
                    </div>
                </div>
            </main>
        </>

    )
}