import styles from './SearchComponent.module.css'

export default function SearchComponent(props) {
    return (
        <div className={styles.container}>
            <input 
                type="text"
                className={styles.input}
                placeholder='Buscar livro' />
        </div>
    )
}