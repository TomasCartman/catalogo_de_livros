import styles from './NavBar.module.css'
import { PiSquaresFourFill } from 'react-icons/pi'
import windowUtils from '@/utils/windowUtils'

export default function NavBar({ children }) {
    return (
        <nav className={styles.navbar}>
            <h2 
                className={styles.pagetitle}
                onClick={windowUtils.goToTopOfPage}>{children}</h2>
            <PiSquaresFourFill size={25} className={styles.icon} />
        </nav>
    )
}