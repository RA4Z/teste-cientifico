import Header from 'components/Header'
import styles from './Agenda.module.scss'
import { Divider, TextField } from '@mui/material'
import Footer from 'components/Footer'
import DataJSON from 'data/Agenda.json'
import { useEffect, useState } from 'react'
import AgendaCard from 'components/AgendaCard'

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
            <Header />
            <div className={styles.header}>
                <TextField
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    label="Filtrar por Palavra-Chave"
                    variant="filled"
                    style={{ backgroundColor: 'white' }}
                />
            </div>
            <Divider style={{ background: 'white' }} />
            <div className={styles.container}>
                <div className={styles.projects}>
                    {data.map((data, index) => (
                        // <div key={index} className={styles.card}>
                        //     <h3>Referência:</h3><p>{data.REFERÊNCIA}</p>
                        //     <h3>Detalhes:</h3><p>{data.DETALHES}</p>
                        //     <h3>Descrição:</h3><p>{data.DESCRIÇÃO}</p>
                        //     <h3>Utilidade:</h3><p>{data.UTILIDADE}</p>
                        //     <Divider style={{ background: 'white', width: '80%' }} />
                        // </div>
                        <AgendaCard referencia={data.REFERÊNCIA}
                            descricao={data.DESCRIÇÃO}
                            detalhes={data.DETALHES ? data.DETALHES : ''}
                            utilidade={data.UTILIDADE} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}