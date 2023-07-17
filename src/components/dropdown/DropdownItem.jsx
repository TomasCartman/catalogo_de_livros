import styles from './DropdownItem.module.css'
import { useRouter } from 'next/router'

export default function DropdownItem(props) {
    const router = useRouter()

    return (
        <>
            <div
                className={styles.item}
                onClick={() => router.push(props.link)}>
                <span className={styles.icon}>{props.icon}</span>
                {props.itemLabel}
            </div>
            <hr className={styles.separator} />
        </>

    )
}