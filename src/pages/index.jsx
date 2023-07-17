import BookComponent from '@/components/bookComponent/BookComponent'
import NavBar from '@/components/navbar/NavBar'
import '@/styles/globals.css'
import styles from '@/styles/index.module.css'

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
    return (
        <main>
            <NavBar>adsasad</NavBar>
            <div className={styles.bookscontainer}>
                {bookList}
            </div>
        </main>
    )
}