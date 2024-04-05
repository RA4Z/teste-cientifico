import InputBox from "components/InputBox"
import { useEffect, useState } from "react"
import { IndicadoresType } from "types/automation"
import styles from './CadastrarIndicador.module.scss'
import BotaoHover from "components/BotaoHover"
import { supabase } from "config/supabase"
import { useNavigate } from "react-router-dom"
import FileType from "./FileType"
import { insertIndicadores } from "services/indicadores"

export default function CadastrarIndicador() {
    const navigate = useNavigate()
    useEffect(() => {
        async function getUserLogged() {
            const user = (await supabase.auth.getUser()).data.user?.email
            if (user === undefined) {
                navigate('/')
            }
        }
        getUserLogged()
    }, [navigate])

    const [dados, setDados] = useState<IndicadoresType>({
        NOME: '', ATUALIZACAO: '', CRIADO_EM: '', CRIADO_POR: '', DATABASES: [], DESCRIÇÃO: '',
        FILE_TYPE: '', LINK_GROUPS: '', LINK_WEB: '', USABILIDADE: ''
    })

    async function cadastrar() {
        const algumCampoVazio = Object.entries(dados)
            .filter(([campo, valor]) => campo !== 'LINK_WEB' && campo !== 'LINK_GROUPS' && campo !== 'USABILIDADE' && valor === "")
            .length > 0;
        if (!algumCampoVazio) {
            const response = await insertIndicadores(dados)
            if (response === 'success') {
                alert('Indicador cadastrado com sucesso!')
                navigate('/')
            } else {
                alert(`Ocorreu o erro: ${response} ao tentar cadastrar o indicador!`)
            }
        } else {
            alert('Por favor, preencha todos os campos antes de cadastrar o indicador.');
        }
    }

    return (
        <div className={styles.container}>
            <h2>Formulário de Cadastro de Indicador</h2>
            <div className={styles.form}>
                <InputBox label="Nome do Indicador" texto={dados.NOME} onChange={e => setDados({ ...dados, NOME: e.target.value })} />
                <InputBox label="Descrição do Indicador" texto={dados.DESCRIÇÃO} onChange={e => setDados({ ...dados, DESCRIÇÃO: e.target.value })} />
                <InputBox label="Frequência de Atualização" texto={dados.ATUALIZACAO} onChange={e => setDados({ ...dados, ATUALIZACAO: e.target.value })} />
                <InputBox label="Data de Criação" texto={dados.CRIADO_EM} onChange={e => setDados({ ...dados, CRIADO_EM: e.target.value })} />
                <InputBox label="Nome do Criador" texto={dados.CRIADO_POR} onChange={e => setDados({ ...dados, CRIADO_POR: e.target.value })} />
                <FileType dados={dados} setDados={setDados} />
                <InputBox label="Endereço no Groups" texto={dados.LINK_GROUPS} onChange={e => setDados({ ...dados, LINK_GROUPS: e.target.value })} />
                <InputBox label="Endereço da Web" texto={dados.LINK_WEB} onChange={e => setDados({ ...dados, LINK_WEB: e.target.value })} />
                <InputBox label="Local de Utilização" texto={dados.USABILIDADE} onChange={e => setDados({ ...dados, USABILIDADE: e.target.value })} />
            </div>
            <BotaoHover text="Cadastrar Indicador" onClick={() => cadastrar()} />
        </div>
    )
}