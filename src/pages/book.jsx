import '@/styles/globals.css'
import styles from '@/styles/book.module.css'
import NavBar from "@/components/navbar/NavBar"
import DropdownItem from '@/components/dropdown/DropdownItem'
import DropdownMenu from '@/components/dropdown/DropdownMenu'
import Button from '@/components/button/Button'
import useDropdownHide from "@/hooks/useDropdownHide"
import SwitchButton from '@/components/button/SwitchButton'
import Alert from '@/components/Alert/Alert'
import { FaBook } from 'react-icons/fa'
import { BiSolidBookAdd } from 'react-icons/bi'
import Head from "next/head"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'


const baseURL = 'api/book'

export default function Book() {
    const { isDropdownHide, toggleDropdownVisibility } = useDropdownHide()
    const [switchButtonActive, setSwitchButtonActive] = useState(false)
    const [title, setTitle] = useState('')
    const [gender, setGender] = useState('')
    const [author, setAuthor] = useState('')
    const [rate, setRate] = useState(0)
    const [id, setId] = useState('')
    const [edit, setEdit] = useState(false)
    const [displayAlert, setDisplayAlert] = useState(false)
    const [alert, setAlert] = useState()
    const router = useRouter()

    useEffect(() => {
        verifyIfItIsEditOrAddBook()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setDisplayAlert(false)
        }, 12000)
    }, [displayAlert])

    function verifyIfItIsEditOrAddBook() {
        const query = router.query
        if (Object.keys(query).length > 0) { // EDIT BOOK
            const book = JSON.parse(query.book)
            console.log(book)
            setEdit(true)

            setTitle(book.title)
            setGender(book.gender)
            setAuthor(book.author)
            setSwitchButtonActive(book.toRead)
            setId(book.id)
            if (!book.toRead) {
                setRate(book.rate)
            }
        }
    }

    function bookCreator() {
        let book = {}
        if (edit) {
            if (switchButtonActive)
                book = { id, title, gender, author, toRead: switchButtonActive }
            else
                book = { id, title, gender, author, rate, toRead: switchButtonActive }
        } else {
            if (switchButtonActive)
                book = { title, gender, author, toRead: switchButtonActive }
            else
                book = { title, gender, author, rate, toRead: switchButtonActive }
        }
        return book
    }

    function addBook() {
        const book = bookCreator()

        axios.post(baseURL, book)
            .then(resp => {
                console.log(resp.status) // Make Alert based on status
                setAlert(makeAlert(title, 'successAdd'))
                setDisplayAlert(true)
            })
            .catch(err => {
                console.log(err)
                setAlert(makeAlert(title, 'error'))
                setDisplayAlert(true)
            })
        resetForm()
    }

    function updateBook() {
        const book = bookCreator()

        axios.put(baseURL, book)
            .then(resp => {
                console.log(resp)
                setAlert(makeAlert(title, 'successUpdate')) // NOT WORKING?
                setDisplayAlert(true)
            })
            .catch(err => {
                console.log(err)
                setAlert(makeAlert(title, 'error'))
                setDisplayAlert(true)
            })
        resetForm()
    }

    function deleteBook() {
        axios.delete(baseURL, { data: id })
            .then(resp => {
                console.log(resp)
                setAlert(makeAlert(title, 'successDelete'))
                setDisplayAlert(true)
            })
            .catch(err => {
                console.log(err)
                setAlert(makeAlert(title, 'error'))
                setDisplayAlert(true)
            })
        resetForm()
    }

    function resetForm() {
        setEdit(false)
        setId('')
        setTitle('')
        setGender('')
        setAuthor('')
        setRate(0)
        setSwitchButtonActive(false)
    }

    function makeAlert(title, msg) {
        return (
            <Alert title={title} msg={msg} />
        )
    }

    return (
        <>
            <Head>
                <title>Catálogo_de_livros: Adicionar livro</title>
            </Head>
            <header>
                {displayAlert ? alert : ''}
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
                        {edit === true ? (
                            <>
                                <Button onClick={updateBook}>Atualizar</Button>
                                <Button contrast onClick={deleteBook}>Deletar</Button>
                            </>
                        ) : (
                            <>
                                <Button onClick={addBook}>Adicionar</Button>
                                <Button contrast onClick={resetForm}>Cancelar</Button>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}