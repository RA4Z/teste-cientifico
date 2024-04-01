import Header from "components/Header"
import styles from './Homepage.module.scss'
import Footer from "components/Footer"

import { viewAutomations } from "services/firestore"
import { AutomationType } from "types/automation"

import { useEffect, useState } from "react"
import { Button, Checkbox, Divider, FormControlLabel, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ExecCard from "components/ExecCard"

export default function Homepage() {
    const navigate = useNavigate()
    const [automations, setAutomations] = useState<AutomationType[]>([])
    const [backup, setBackup] = useState<AutomationType[]>([])
    const [filter, setFilter] = useState({ filename: '', manual: false, automatico: false })

    useEffect(() => {
        async function getFirebaseData() {
            await viewAutomations(setAutomations, setBackup)
        }
        getFirebaseData()
    }, [])

    useEffect(() => {
        function findFilename(filename: string) {
            const regex = new RegExp(filter.filename, 'i');
            return regex.test(filename);
        }
        let newList = backup.filter(item => findFilename(item.nome) || findFilename(item.descricao) ||
            findFilename(item.solicitante) || findFilename(item.data_desenvolvimento) || findFilename(item.caminho_groups) || findFilename(item.pseudocodigo))
        if (filter.manual && !filter.automatico) newList = newList.filter(item => item.manual === true)
        if (!filter.manual && filter.automatico) newList = newList.filter(item => item.manual !== true)
        setAutomations(newList)
    }, [filter, backup])

    return (
        <>
            <Header />
            <div className={styles.header}>
                <TextField
                    value={filter.filename}
                    onChange={e => setFilter({ ...filter, filename: e.target.value })}
                    label="Descrição da Automação"
                    variant="filled"
                    style={{ backgroundColor: 'white' }}
                />
                <Button onClick={() => navigate(`/Agenda`)} variant="outlined" size="medium">
                    Visualizar Agenda
                </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FormControlLabel control={<Checkbox checked={filter.automatico}
                    onChange={e => setFilter({ ...filter, automatico: e.target.checked })} />} label="Execução Automática" />
                <FormControlLabel control={<Checkbox checked={filter.manual}
                    onChange={e => setFilter({ ...filter, manual: e.target.checked })} />} label="Execução Manual" />
            </div>
            <Divider style={{ background: 'white' }} />
            <div className={styles.container}>
                <div className={styles.projects}>
                    {automations.map((automation, index) => (
                        <ExecCard
                            key={index}
                            id={automation.id}
                            descricao={automation.descricao}
                            imagem={automation.imagem}
                            data_desenvolvimento={automation.data_desenvolvimento}
                            nome={automation.nome}
                            desenvolvedor={automation.desenvolvedor}
                            solicitante={automation.solicitante}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}