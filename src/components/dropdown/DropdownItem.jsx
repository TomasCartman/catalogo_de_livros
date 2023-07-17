import styles from './DropdownItem.module.css'
import { useRouter } from 'next/router'

export default function DropdownItem(props) {
    const router = useRouter()

    function handleClick() {
        if(props.link) {
            router.push(props.link)
        } else if(props.onClick) {
            props.onClick()
        }
    }

    return (
        <>
            <div
                className={styles.item}
                    onClick={handleClick}>
                <span className={styles.icon}>{props.icon}</span>
                {props.itemLabel}
            </div>
            <hr className={styles.separator} />
        </>

    )
}