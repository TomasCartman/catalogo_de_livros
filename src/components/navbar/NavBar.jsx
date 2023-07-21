import styles from './NavBar.module.css'
import { PiSquaresFourFill } from 'react-icons/pi'
import windowUtils from '@/utils/windowUtils'
import SearchComponent from '../search/SearchComponent'

export default function NavBar({ 
    children, toggleDropdown, searchValue, onChangeSearchValue, onKeyDown, displaySearch, displayTitle, flexEnd }) {
    return (
        <nav className={`${styles.navbar} ${flexEnd ? styles.flexend : ''}`}>
            <h2
                className={`${styles.pagetitle} ${displayTitle ? styles.forcedisplay : ''}`}
                onClick={windowUtils.goToTopOfPage}>{children}
            </h2>

            {displaySearch ? (
                <SearchComponent
                    searchValue={searchValue}
                    onChangeSearchValue={onChangeSearchValue}
                    onKeyDown={onKeyDown}
                />
            ) : false}

            <PiSquaresFourFill
                size={25}
                className={styles.icon}
                onClick={toggleDropdown}
            />
        </nav>
    )
}