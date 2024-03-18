import styles from './Footer.module.scss'
import Logo from 'assets/weg-logo-white.png'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div>
                <img src={Logo} alt='Logo da Weg' className={styles.container__logotipo} />
                <div className={styles.container__dev}>
                    <button className={styles.container__button}>Automations's Database</button>
                    <a href='https://github.com/RA4Z'>Desenvolvido e prototipado por<br /> Robert Aron Zimmermann</a>
                    <p>robertn@weg.net</p>
                </div>
            </div>

            <div className={styles.atribuicoes}>
                <li style={{ listStyle: 'none', color: '#64CCC5' }}>Contato dos Analistas:</li>
                <a href="https://colaboradores.weg.net/colaboradores.aspx?chave=C_1001_31798" target="_blank" rel="noreferrer"><li>Alisson Mazuim</li></a>
                <a href="https://colaboradores.weg.net/colaboradores.aspx?chave=C_1001_35973" target="_blank" rel="noreferrer"><li>Anderson Paulo da Luz</li></a>
                <a href="https://colaboradores.weg.net/colaboradores.aspx?chave=C_1001_77661" target="_blank" rel="noreferrer"><li>Daniel Assis Amancio</li></a>
                <a href="https://colaboradores.weg.net/colaboradores.aspx?chave=C_1001_77660" target="_blank" rel="noreferrer"><li>Fabiana Glasenapp</li></a>
                <a href="https://colaboradores.weg.net/colaboradores.aspx?chave=C_1001_68954" target="_blank" rel="noreferrer"><li>Karoline Luciani Fritsche</li></a>
                <a href="https://colaboradores.weg.net/colaboradores.aspx?chave=C_1001_76993" target="_blank" rel="noreferrer"><li>Rogerio Henrique de Oliveira Schneider</li></a>
                <a href="https://colaboradores.weg.net/colaboradores.aspx?chave=C_1001_49109" target="_blank" rel="noreferrer"><li>Rohan Dorneles Machado</li></a>
            </div>
        </div>
    )
}