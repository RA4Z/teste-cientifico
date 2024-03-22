import React, { useEffect, useState } from 'react';
import styles from './Automatization.module.scss'
import { HistoryType, HistoryItemType } from 'types/automation'
import { getHistory } from 'services/database';

interface Props {
    automationName: string
    history: HistoryType; // Certifique-se de que a propriedade history possa ser undefined
}

const HistoryComponent: React.FC<Props> = ({ automationName, history }) => {
    const [data, setData] = useState<HistoryItemType[]>([])

    useEffect(() => {
        async function getFirebaseData() {
            if (data.length === 0) await getHistory(`Algoritmos/${automationName}/${history.id}`, setData)
        }
        getFirebaseData()
    }, [automationName, history.id, data])

    return (
        <div>
            <h4>{history.id}</h4>
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
