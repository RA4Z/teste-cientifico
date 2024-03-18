import styles from './Footer.module.scss'
import Logo from 'assets/weg-logo-white.png'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div>
                <img src={Logo} alt='Logo da Weg' className={styles.container__logotipo} />
                <div className={styles.container__dev}>
                    <button className={styles.container__button}>Automations's Database</button>
                    <a href='https://github.com/RA4Z'>Developed and prototyped by <br /> Robert Aron Zimmermann</a>
                    <p>robertn@weg.net</p>
                </div>
            </div>
        </div>
    )
}