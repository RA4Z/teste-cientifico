import styles from './Agenda.module.scss'
import { Button, Divider } from '@mui/material'
import DataJSON from 'data/Agenda.json'
import { useEffect, useState } from 'react'
import AgendaCard from 'components/AgendaCard'
import { useNavigate } from 'react-router-dom'
import InputBox from 'components/InputBox'

export default function Agenda() {
    const navigate = useNavigate()
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
            <div className={styles.header}>
                <InputBox texto={filter} onChange={e => setFilter(e.target.value)} label='Filtrar por Palavra-Chave' />
                <Button onClick={() => navigate(`/`)} variant="outlined" size="medium">
                    Histórico de Execuções
                </Button>
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