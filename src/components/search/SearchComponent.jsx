import styles from './SearchComponent.module.css'

export default function SearchComponent({ searchValue, onChangeSearchValue, onKeyDown }) {
    
    

    return (
        <div className={styles.container}>
            <input 
                type="text"
                className={styles.input}
                placeholder='Buscar livro'
                value={searchValue}
                onChange={e => onChangeSearchValue(e.target.value)}
                onKeyDown={e => onKeyDown(e)} />
            <button type='submit' className={styles.submit}></button>
        </div>
    )
}