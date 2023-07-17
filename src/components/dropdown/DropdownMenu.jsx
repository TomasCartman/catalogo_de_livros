import styles from './DropdownMenu.module.css'

export default function DropdownMenu({ children, hideDropdown }) {
    return (
        <div className={`${styles.dropdown} ${hideDropdown ? styles.hide : ''} `}>
            {children}
        </div>
    )
}