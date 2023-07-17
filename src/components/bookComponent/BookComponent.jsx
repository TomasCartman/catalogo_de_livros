import styles from '@/components/bookComponent/BookComponent.module.css'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'

export default function BookComponent({ title, gender, author, rate }) {
    return (
        <div className={styles.bookcontainer}>
            <div className={styles.flexbetween}>
                <h3 className={styles.title}>{title}</h3>
                <FiEdit size={20} className={styles.icon} />
            </div>
            <p className={styles.gender}>{gender}</p>
            <div className={`${styles.authorstars} ${styles.flexbetween}`}>
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