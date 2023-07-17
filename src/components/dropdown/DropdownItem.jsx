import styles from './DropdownItem.module.css'

export default function DropdownItem(props) {
    return (
        <>
            <div className={styles.item}>
                <span className={styles.icon}>{props.icon}</span>
                {props.itemLabel}
            </div>
            <hr className={styles.separator} />
        </>

    )
}