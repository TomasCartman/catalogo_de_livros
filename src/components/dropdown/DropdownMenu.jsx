import styles from './DropdownMenu.module.css'

export default function DropdownMenu({ children }) {
    return (
        <div className={styles.dropdown}>
            {children}
        </div>
    )
}