import { supabase } from "config/supabase"
import styles from './Cadastrar.module.scss'
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { IndicadoresType, AutomationType } from "types/automation";
import FileType from "./FileType";
import InputBox from "components/InputBox";
import BotaoHover from "components/BotaoHover";
import { insertIndicadores } from "services/indicadores";
import { Timestamp } from "firebase/firestore";
import { insertAutomation } from "services/firestore";

export default function Cadastrar() {
    const location = useLocation();
    const navigate = useNavigate()
    const [dados, setDados] = useState<IndicadoresType | AutomationType>();

    useEffect(() => {
        async function getUserLogged() {
            const user = (await supabase.auth.getUser()).data.user?.email
            if (user === undefined) {
                navigate('/')
            }
        }
        getUserLogged()
    }, [navigate])

    useEffect(() => {
        if (location.pathname.toLowerCase() === '/cadastrarindicador') {
            setDados({
                NOME: '', DESCRIÇÃO: '', ATUALIZACAO: '', CRIADO_EM: '', CRIADO_POR: '', FILE_TYPE: '',
                DATABASES: [], LINK_GROUPS: '', LINK_WEB: '', USABILIDADE: ''
            } as IndicadoresType)
        }
        else if (location.pathname.toLowerCase() === '/cadastrarsoftware') {
            setDados({
                id: '', arquivo_zip: '', caminho_groups: '', data_desenvolvimento: Timestamp.now(), descricao: '', desenvolvedor: '',
                empresa: '', fluxograma: '', imagem: '', nome: '', pseudocodigo: '', solicitante: '', manual: true
            } as AutomationType)
        } else {
            navigate('/')
        }
    }, [location.pathname, navigate])

    async function cadastrar() {
        if (!dados) return

        let response: any = ''

        const algumCampoVazio = Object.entries(dados)
            .filter(([campo, valor]) => campo !== 'LINK_WEB' && campo !== 'LINK_GROUPS'
                && campo !== 'USABILIDADE' && campo !== 'arquivo_zip' && campo !== 'imagem' && campo !== 'id' && valor === "")
            .length > 0;
        if (algumCampoVazio) return alert('Por favor, preencha todos os campos antes de realizar o cadastro.');

        if ('NOME' in dados) {
            response = await insertIndicadores(dados)
        }
        if ('fluxograma' in dados) {
            response = await insertAutomation(dados)
        }

        if (response === 'success') {
            alert('Cadastrado realizado com sucesso!')
            navigate('/')
        } else {
            alert(`Ocorreu o erro: ${response} ao tentar realizar o cadastro!`)
        }
    }

    return (
        <div className={styles.container}>
            <h2>{location.pathname.toLowerCase() === '/cadastrarsoftware' ? 'Formulário de Cadastro de Software' : 'Formulário de Cadastro de Indicador'}</h2>
            {(dados) &&
                <div className={styles.form}>
                    {location.pathname.toLowerCase() === '/cadastrarindicador' && <FileType dados={dados} setDados={setDados} />}
                    {Object.entries(dados).map(([campo, valor]) => (
                        (campo !== 'data_desenvolvimento' && campo !== 'DATABASES' && campo !== 'manual' && campo !== 'id' && campo !== 'FILE_TYPE') &&
                        <InputBox label={campo.replaceAll('_', ' ').toLocaleUpperCase()} texto={valor} onChange={e => setDados({ ...dados, [campo]: e.target.value })} />
                    ))}
                </div>}
            <BotaoHover text="Realizar Cadastro" onClick={() => cadastrar()} />
        </div>
    )
}