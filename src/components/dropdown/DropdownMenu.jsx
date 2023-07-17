import styles from './DropdownMenu.module.css'

export default function DropdownMenu({ children, hideDropdown, position }) {
    function dropdownPosition(position) {
        if(position === 'header') return styles.positionheader
        else return ''
    }

    return (
        <div 
            className={`${styles.dropdown} 
                ${hideDropdown ? styles.hide : ''} 
                ${dropdownPosition(position)}`}>
            {children}
        </div>
    )
}