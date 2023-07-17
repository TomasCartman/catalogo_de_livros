import styles from './SwitchButton.module.css'

export default function SwitchButton({ isChecked, onChange }) {
    return (
        <label className={styles.switch}>
            <input type="checkbox" 
                onChange={onChange}
                checked={isChecked}
            />
            <span className={styles.slider}></span>
        </label>
    )
}