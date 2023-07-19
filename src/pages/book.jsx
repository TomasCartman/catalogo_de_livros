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
import axios from 'axios'


const baseURL = 'api/book'

export default function Book() {
    const { isDropdownHide, toggleDropdownVisibility } = useDropdownHide()
    const [switchButtonActive, setSwitchButtonActive] = useState(false)
    const [title, setTitle] = useState('')
    const [gender, setGender] = useState('')
    const [author, setAuthor] = useState('')
    const [rate, setRate] = useState(0)

    function addBook() {
        if(switchButtonActive) {
            const book = {
                title,
                gender,
                author,
                toRead: true
            }
            axios.post(baseURL, book)
                .then(resp => console.log(resp))
        } else {
            const book = {
                title,
                gender,
                author,
                rate,
                toRead: false
            }
            axios.post(baseURL, book)
                .then(resp => console.log(resp))
        }

        resetForm()
    }

    function resetForm() {
        setTitle('')
        setGender('')
        setAuthor('')
        setRate(0)
        setSwitchButtonActive(false)
    }

    function tests() {
        dbManager()
    }

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
                        link='/book'
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
                            <input 
                                type="text" 
                                className={styles.input} 
                                placeholder='Título'
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <div className={styles.formdiv}>
                            <label className={styles.label}>Gênero</label>
                            <input 
                                type="text" 
                                className={styles.input} 
                                placeholder='Gênero'
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                            />
                        </div>
                        <div className={`${styles.formdiv} ${switchButtonActive ? styles.formjustifystart : ''}`}>
                            <label className={styles.label}>Autor</label>
                            <input 
                                type="text" 
                                className={styles.input} 
                                placeholder='Autor'
                                value={author}
                                onChange={e => setAuthor(e.target.value)}
                            />
                        </div>
                        <div className={`${styles.formdiv} ${switchButtonActive ? styles.hide : ''}`}>
                            <label className={styles.label}>Nota</label>
                            <input 
                                type="number" 
                                step={0.5} 
                                min={0} 
                                max={5} 
                                className={styles.input} 
                                placeholder='Nota (min: 0, max: 5)'
                                value={rate}
                                onChange={e => setRate(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.buttonflex}>
                        <Button onClick={addBook}>Adicionar</Button>
                        <Button contrast onClick={tests}>Cancelar</Button>
                    </div>
                </div>
            </main>
        </>

    )
}