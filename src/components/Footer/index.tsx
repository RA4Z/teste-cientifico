import { Divider } from '@mui/material'
import styles from './Footer.module.scss'
import Logo from 'assets/weg-logo-white.png'

import HomeDepto from 'assets/svgs/home_depto.svg'
import Intranet from 'assets/svgs/intranet.svg'
import SiteWeb from 'assets/svgs/site_weg.svg'

export default function Footer() {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <img src={Logo} alt='Logo da Weg' className={styles.container__logotipo} />
                </div>

                <div className={styles.container__dev}>
                    <button className={styles.container__button}>Automations's Database</button>
                    <Divider style={{ background: 'white' }} />
                    <div className={styles.container__icos}>
                        <a href='https://intranet.weg.net/br/energia-wm/pcp/SitePages/P%C3%A1gina%20Principal.aspx'><img src={HomeDepto} alt='Site do Departamento no Sharepoint' title='Acessar Site do Departamento' className={styles.container__icos__icon} /></a>
                        <a href='https://weg365.sharepoint.com/teams/br/default.aspx'><img src={Intranet} alt='Intranet' title='Acessar Intranet' className={styles.container__icos__icon} /></a>
                        <a href='https://www.weg.net/institutional/BR/pt/'><img src={SiteWeb} alt='Site da WEG' title='Acessar Site da WEG' className={styles.container__icos__icon} /></a>
                    </div>
                </div>

                <div className={styles.atribuicoes}>
                    <p style={{ color: '#64CCC5' }}>Contato dos Analistas:</p>
                    <a href="https://colaboradores.weg.net/colaboradores.aspx?chave=C_1001_31798" target="_blank" rel="noreferrer"><li>Alisson Mazuim</li></a>
                    <a href="https://colaboradores.weg.net/colaboradores.aspx?chave=C_1001_35973" target="_blank" rel="noreferrer"><li>Anderson Paulo da Luz</li></a>
                    <a href="https://colaboradores.weg.net/colaboradores.aspx?chave=C_1001_77661" target="_blank" rel="noreferrer"><li>Daniel Assis Amancio</li></a>
                    <a href="https://colaboradores.weg.net/colaboradores.aspx?chave=C_1001_77660" target="_blank" rel="noreferrer"><li>Fabiana Glasenapp</li></a>
                    <a href="https://colaboradores.weg.net/colaboradores.aspx?chave=C_1001_68954" target="_blank" rel="noreferrer"><li>Karoline Luciani Fritsche</li></a>
                    <a href="https://colaboradores.weg.net/colaboradores.aspx?chave=C_1001_76993" target="_blank" rel="noreferrer"><li>Rogerio Henrique de Oliveira Schneider</li></a>
                    <a href="https://colaboradores.weg.net/colaboradores.aspx?chave=C_1001_49109" target="_blank" rel="noreferrer"><li>Rohan Dorneles Machado</li></a>
                </div>
            </div>
            <div className={styles.creditos}>Desenvolvido e prototipado por Robert Aron Zimmermann robertn@weg.net</div>
        </>
    )
}