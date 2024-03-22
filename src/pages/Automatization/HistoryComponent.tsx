import React, { useEffect, useState } from 'react';
import styles from './Automatization.module.scss'
import { HistoryType, HistoryItemType } from 'types/automation'
import { deleteHistory, getHistory } from 'services/database';

interface Props {
    automationName: string
    history: HistoryType; // Certifique-se de que a propriedade history possa ser undefined
}

const HistoryComponent: React.FC<Props> = ({ automationName, history }) => {
    const [data, setData] = useState<HistoryItemType[]>([])
    const [sevenDays, setSevenDays] = useState(false)

    async function deletarHistoricoExec(nomeAutomacao: string, userName: string, id: string) {
        await deleteHistory(nomeAutomacao, userName, id)
    }

    useEffect(() => {
        async function getFirebaseData() {
            if (data.length === 0) await getHistory(`Algoritmos/${automationName}/${history.id}`, setData)
            if (data.length > 0) {
                const dataAtual = new Date();
                const seteDiasEmMilissegundos = 7 * 24 * 60 * 60 * 1000;
                const dataDoItem = new Date(data[0].horaExec);
                const diferencaDeTempoEmMilissegundos = dataAtual.getTime() - dataDoItem.getTime();
                if (diferencaDeTempoEmMilissegundos > seteDiasEmMilissegundos) {
                    setSevenDays(true)
                } else {
                    setSevenDays(false)
                }
                data.forEach((item: any) => {
                    const dataDoItem = new Date(item.horaExec);
                    const trintaDiasEmMilissegundos = 30 * 24 * 60 * 60 * 1000;
                    const diferencaDeTempoEmMilissegundos = dataAtual.getTime() - dataDoItem.getTime();
                    if (diferencaDeTempoEmMilissegundos > trintaDiasEmMilissegundos) {
                        deletarHistoricoExec(automationName, history.id, item)
                    }
                });
            }
        }
        getFirebaseData()
    }, [automationName, history.id, data])

    return (
        <div>
            <h4 style={sevenDays ? { color: 'black' } : { color: 'white' }}>{history.id}</h4>
            <ul className={styles.history__stack}>
                {data.map(item => (
                    <li key={item.id} className={styles.history__list}>
                        <div>Hora de Execução: {item.horaExec}</div>
                        <div>Duração de Execução: {item.duracao}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HistoryComponent;
