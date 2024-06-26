import styles from './Softwares.module.scss'

import { viewAutomations } from "services/firestore"
import { AutomationType } from "types/automation"

import { useEffect, useState } from "react"
import { Checkbox, Divider, FormControlLabel } from "@mui/material"
import ExecCard from "components/ExecCard"
import InputBox from 'components/InputBox'
import BotaoHover from 'components/BotaoHover'
import { useNavigate } from 'react-router-dom'
import { supabase } from 'config/supabase'

export default function Softwares() {
    const navigate = useNavigate()
    const [automations, setAutomations] = useState<AutomationType[]>([])
    const [user, setUser] = useState('')
    const [backup, setBackup] = useState<AutomationType[]>([])
    const [filter, setFilter] = useState({ filename: '', manual: false, automatico: false })

    useEffect(() => {
        async function getUser() {
            const user = (await supabase.auth.getUser()).data.user?.email
            if (user !== undefined) setUser(user)
        }
        getUser()
    }, [])

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
            findFilename(item.solicitante) || findFilename(item.caminho_groups) || findFilename(item.pseudocodigo))
        if (filter.manual && !filter.automatico) newList = newList.filter(item => item.manual === true)
        if (!filter.manual && filter.automatico) newList = newList.filter(item => item.manual !== true)
        setAutomations(newList)
    }, [filter, backup])

    return (
        <>
            <h3 style={{ textAlign: 'center', textWrap: 'wrap' }}>Buscar Software de Automatização</h3>
            <div className={styles.header}>
                <InputBox texto={filter.filename} onChange={e => setFilter({ ...filter, filename: e.target.value })} label='Procurar Software' />
                {user !== '' && <BotaoHover text="Cadastrar" onClick={() => navigate('/CadastrarSoftware')} />}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
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
        </>
    )
}