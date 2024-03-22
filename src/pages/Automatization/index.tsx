import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import VoltarIMG from 'assets/imagem_voltar.png'
import styles from './Automatization.module.scss'
import { useNavigate } from 'react-router-dom'
import { Divider } from '@mui/material'

import { AutomationType, HistoryType } from 'types/automation'

import { infoAutomation } from 'services/firestore'
import { getHistory } from 'services/database'
import HistoryComponent from './HistoryComponent'
import Footer from 'components/Footer'

export default function Automatization() {
    const [automation, setAutomation] = useState<AutomationType>()
    const [history, setHistory] = useState<HistoryType[]>([])

    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        async function getFirebaseData() {
            if (automation?.nome === undefined) await infoAutomation(id, setAutomation)
            if (automation?.nome !== undefined) {
                await getHistory(`Algoritmos/${automation.nome}`, setHistory)
            }
        }
        getFirebaseData()
    }, [id, automation?.nome])
    return (
        <div className={styles.container}>
            <div className={styles.container__title}>
                <img src={VoltarIMG} alt='Voltar' onClick={() => navigate(-1)} />
                <h2>{automation?.nome}</h2>
            </div>
            <div className={styles.container__text}>
                <li className={styles.container__text__description}>{automation?.descricao}</li>
                <li>Automatização desenvolvida em {automation?.data_desenvolvimento} por {automation?.desenvolvedor} e solicitado por {automation?.solicitante}</li>
                <li>Automatização se encontra em {automation?.caminho_groups}</li>
            </div>
            <img src={automation?.imagem} alt='Ícone do projeto' className={styles.container__icon} />
            <Divider style={{ background: 'white' }} />

            <h3 className={styles.history}>Histórico de execuções...</h3>
            <div className={styles.history}>
                {(history.length > 0 && history !== undefined && automation?.nome !== undefined) && history.map((logged, index) => (
                    <HistoryComponent key={index} automationName={automation.nome} history={logged} />
                ))}
            </div>
            <Footer />
        </div>
    )
}