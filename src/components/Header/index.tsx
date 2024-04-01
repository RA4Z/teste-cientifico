import styles from './Header.module.scss'
import Weg from 'assets/weg-logo.png'

export default function Header() {
    return (
        <div className={styles.container}>
            <a href='/' title='Navegar para a Homepage'>
                <img src={Weg} alt='Logo da Weg' />
            </a>
        </div>
    )
}