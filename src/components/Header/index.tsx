import styles from './Header.module.scss'
import Weg from 'assets/weg-logo-white.png'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation();

    function navigateHome() {
        if (location.pathname !== '/') navigate('/')
    }
    return (
        <div className={styles.container}>
            <button onClick={() => navigateHome()} title='Navegar para a Homepage'>
                <img src={Weg} alt='Logo da Weg' />
                <a href='http://10.1.43.24:3000'>Useless</a>
            </button>
        </div>
    )
}