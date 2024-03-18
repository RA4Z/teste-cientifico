import styles from './Header.module.scss'
import Weg from 'assets/weg-logo.png'

export default function Header() {
    return (
        <div className={styles.container}>
            <img src={Weg} alt='Logo da Weg' />
        </div>
    )
}