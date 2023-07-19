import styles from '@/components/bookComponent/BookComponent.module.css'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'

export default function BookComponent({ title, gender, author, rate }) {
    function handleRate() { // Make this function better
        if(rate) {
            const fullStarsNumber = parseInt(rate, 10)
            const hasHalfStars =  !Number.isInteger(rate) && fullStarsNumber < 5
            const emptyStarsNumber = parseInt(5-rate, 10)
    
            const starsArray = []
            for(let i = 0; i < fullStarsNumber; i++) {
                starsArray.push(<BsStarFill key={title+i}/>)
            }
            if(hasHalfStars) starsArray.push(<BsStarHalf key={title+8} />)
            for(let i = 0; i < emptyStarsNumber; i++) {
                starsArray.push(<BsStar key={title+((i+1)*10)} />)
            }
            return starsArray
        } else {
            return 'Para ler'
        }
    }
    
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
                    {handleRate()}
                </div>
            </div>
        </div>
    )
}