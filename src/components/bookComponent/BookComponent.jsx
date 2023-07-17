import styles from '@/components/bookComponent/BookComponent.module.css'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

export default function BookComponent({ title, gender, author, rate }) {
    return (
        <div className={styles.bookcontainer}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.gender}>{gender}</p>
            <div className={styles.authorstars}>
                <h4 className={styles.author}>{author}</h4>
                <div className={styles.stars}>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                </div>
            </div>
        </div>
    )
}