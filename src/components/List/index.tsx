import { Divider } from '@mui/material'
import styles from './List.module.scss'

interface Props {
    nome: string,
    desenvolvedor: string,
    solicitante: string,
    data_desenvolvimento: string
}

export default function List(props: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.container__linha}>
                <li style={{ fontWeight: 'bold' }}>{props.nome}</li>
                <li>Desenvolvido por {props.desenvolvedor}</li>
            </div>
            <div className={styles.container__linha}>
                <li>Solicitado por {props.solicitante}</li>
                <li>Desenvolvido em {props.data_desenvolvimento}</li>
            </div>
            <Divider style={{ background: 'white', width: '100%', marginBottom: 25, marginTop: 20 }} />
        </div>
    )
}