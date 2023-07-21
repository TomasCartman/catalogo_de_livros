import styles from './NavBar.module.css'
import { PiSquaresFourFill } from 'react-icons/pi'
import windowUtils from '@/utils/windowUtils'
import SearchComponent from '../search/SearchComponent'

export default function NavBar({ children, toggleDropdown }) {
    return (
        <nav className={styles.navbar}>
            <h2
                className={styles.pagetitle}
                onClick={windowUtils.goToTopOfPage}>{children}
            </h2>
            <SearchComponent />

            <PiSquaresFourFill
                size={25}
                className={styles.icon}
                onClick={toggleDropdown}
            />
        </nav>
    )
}