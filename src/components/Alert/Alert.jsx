import styles from './Alert.module.css'

export default function Alert(props) {
    
function successAdd() {
        return (
            <>
                <span className={styles.title}>
                    {props.title}
                </span>
                &nbsp;foi adicionado a sua lista de livros.
            </>
        )
    }

    function error() {
        return (
            <>
                Um erro ocorreu ao tentar alterar &nbsp;
                <span className={styles.title}>
                    {props.title}
                </span>
                . Por favor, tente novamente.
            </>
        )
    }

    function successUpdate() {
        return (
            <>
                <span className={styles.title}>
                    {props.title}
                </span>
                &nbsp;foi atualizado.
            </>
        )
    }

    function successDelete() {
        return (
            <>
                <span className={styles.title}>
                    {props.title}
                </span>
                &nbsp;foi deletado.
            </>
        )
    }

    function selectText() {
        if (props.msg === 'successAdd') return successAdd()
        else if (props.msg ==='successUpdate') return successUpdate()
        else if (props.msg === 'successDelete') return successDelete()
        else if (props.msg === 'error') return error()
    }

    return (
        <div className={styles.alertcontainer}>
            {selectText()}
        </div>
    )
}