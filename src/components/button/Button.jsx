import styles from './Button.module.css'

export default function Button(props) {
    function handleClick() {
        if(props.onClick) {
            props.onClick()
        }
    }

    return (
        <button
            type='button'
            className={`${styles.button} ${props.contrast ? styles.contrast : ''}`}
            onClick={handleClick}
        >{props.children}</button>
    )
}

// onClick={props.onClick}
