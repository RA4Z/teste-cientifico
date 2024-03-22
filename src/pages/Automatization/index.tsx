import { useParams } from 'react-router-dom'
import { useState } from 'react'
import VoltarIMG from 'assets/imagem_voltar.png'
import styles from './Automatization.module.scss'
import { useNavigate } from 'react-router-dom'
import { Divider } from '@mui/material'

export default function Automatization() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [dados, setDados] = useState({
        nome: 'Cobrança de materiais WMO para GTA',
        solicitante: 'Beatriz Silva de Andrade Graciosa',
        desenvolvedor: 'Robert Aron Zimmermann',
        data_desenvolvimento: '15/03/2024',
        caminho_groups: 'Q:/GROUPS/BR_SC_JGS_WM_LOGISTICA/PCP/Central/65-Cobrar_WMO_GTA',
        imagem: 'gs://default-python.appspot.com/icones/cobrar_wmo_gta.png',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat magna a augue ultrices, eget viverra nulla eleifend. Vivamus varius sem eros, et scelerisque diam tristique a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia tortor vel enim cursus tempus. Cras bibendum nibh urna, ut porta leo fermentum sed. Nulla mauris lacus, scelerisque a interdum sed, iaculis sed leo. Nullam dapibus pretium lectus, eleifend dignissim nunc suscipit eget. Duis facilisis dapibus justo, sed lobortis tortor convallis non. Donec in pellentesque dolor, ut scelerisque nibh. Aliquam erat volutpat. Pellentesque blandit nisi et nisi tristique, at sagittis sem congue. Pellentesque consectetur sapien lectus, et bibendum sem cursus facilisis. Mauris lacinia nibh at sollicitudin sollicitudin. Proin nec semper nunc, efficitur tempor nunc. Fusce pretium gravida molestie. Praesent quis tincidunt enim. Aliquam vitae pulvin'
    })

    return (
        <div className={styles.container}>
            <div className={styles.container__title}>
                <img src={VoltarIMG} alt='Voltar' onClick={() => navigate(-1)} />
                <h2>{dados.nome}</h2>
            </div>
            <div className={styles.container__text}>
                <li className={styles.container__text__description}>{dados.descricao}</li>
                <li>Automatização desenvolvida em {dados.data_desenvolvimento} por {dados.desenvolvedor} e solicitado por {dados.solicitante}</li>
                <li>Automatização se encontra em {dados.caminho_groups}</li>
            </div>
            <Divider style={{ background: 'white' }} />
            <div className={styles.history}>
                <h3>Histórico de execuções...</h3>
            </div>
        </div>
    )
}