import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import VoltarIMG from 'assets/imagem_voltar.png'
import styles from './Automatization.module.scss'
import { useNavigate } from 'react-router-dom'
import { Divider } from '@mui/material'

import BlocoTop from 'components/BlocoTop'
import { AutomationType, HistoryType } from 'types/automation'

import Auto from 'assets/exec_auto.png'
import Download from 'assets/download.png'
import Fluxograma from 'assets/fluxograma.png'

import { infoAutomation } from 'services/firestore'
import { getHistory } from 'services/database'
import HistoryComponent from './HistoryComponent'
import { NotFound } from 'pages/NotFound'

export default function Automatization() {
    const [automation, setAutomation] = useState<AutomationType>()
    const [history, setHistory] = useState<HistoryType[]>([])
    const [erroNotFound, setErroNotFound] = useState(false)

    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        async function getFirebaseData() {
            if (!automation) {
                const fetchedInfo = await infoAutomation(id, setAutomation)
                if (fetchedInfo === undefined) setErroNotFound(true)
            }

            await getHistory(`Algoritmos/${automation?.nome}`, setHistory);
        }
        getFirebaseData();
    }, [id, automation]);

    if (erroNotFound) {
        return <NotFound />;
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.container__title}>
                    <img src={VoltarIMG} alt='Voltar' onClick={() => navigate(-1)} />
                    <h2>{automation?.nome}</h2>
                    {automation?.arquivo_zip !== '' && <a title='Download' href={automation?.arquivo_zip}><img src={Download} alt='Download file' /></a>}
                </div>
                <div className={styles.container__text}>
                    <li className={styles.container__text__description}>{automation?.descricao}</li>
                    <li>Software desenvolvido em {automation?.data_desenvolvimento} por {automation?.desenvolvedor} e solicitado por {automation?.solicitante}</li>
                    <li className={styles.container__text__path}>O sistema se encontra em {automation?.caminho_groups}</li>
                </div>
                <div className={styles.details}>
                    {(automation?.pseudocodigo !== '' && automation) &&
                        <BlocoTop title={automation.nome} text={automation.pseudocodigo} />
                    }
                    <img src={automation?.imagem ? automation.imagem : Auto} alt='Ícone do projeto' className={styles.details__icon} />
                    {automation?.fluxograma !== '' && <a href={automation?.fluxograma}><img src={Fluxograma} className={styles.details__images} alt='Visualizar Fluxograma' title='Visualizar Fluxograma' /></a>}

                </div>
                <Divider style={{ background: 'white' }} />

                <h3 className={styles.history}>Histórico de execuções...</h3>
                <div className={styles.history}>
                    {(history.length > 0 && history !== undefined && automation?.nome !== undefined) && history.map((logged, index) => (
                        <HistoryComponent key={index} automationName={automation.nome} history={logged} />
                    ))}
                </div>
            </div>
        </>
    )
}