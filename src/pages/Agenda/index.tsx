import styles from './Agenda.module.scss'
import { Divider } from '@mui/material'
import DataJSON from 'data/Agenda.json'
import { useEffect, useState } from 'react'
import AgendaCard from 'components/AgendaCard'
import InputBox from 'components/InputBox'

export default function Agenda() {
    const [data, setData] = useState(DataJSON)
    const [filter, setFilter] = useState('')

    useEffect(() => {
        function findText(text: string) {
            const regex = new RegExp(filter, 'i');
            return regex.test(text);
        }
        let newList = DataJSON.filter(item => findText(item.DESCRIÇÃO) || findText(item.DETALHES!) || findText(item.REFERÊNCIA) || findText(item.UTILIDADE) || findText(item.SEQ.toString()))
        setData(newList)
    }, [filter])
    return (
        <>
            <h3 style={{ textAlign: 'center', textWrap:'wrap' }}>Visualizar Dados na Agenda PCP</h3>
            <div className={styles.header}>
                <InputBox texto={filter} onChange={e => setFilter(e.target.value)} label='Filtrar por Palavra-Chave' />
            </div>
            <Divider style={{ background: 'white' }} />
            <div className={styles.container}>
                <div className={styles.projects}>
                    {data.map((data, index) => (
                        <AgendaCard key={index}
                            referencia={data.REFERÊNCIA}
                            descricao={data.DESCRIÇÃO}
                            detalhes={data.DETALHES ? data.DETALHES : ''}
                            imagem={data.ICON}
                            utilidade={data.UTILIDADE} />
                    ))}
                </div>
            </div>
        </>
    )
}