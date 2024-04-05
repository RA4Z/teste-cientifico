import { useEffect, useState } from 'react'
import classNames from 'classnames'

import styles from './Indicadores.module.scss'
import { Divider } from '@mui/material'
import InputBox from 'components/InputBox'
import InfoIndicador from './InfoIndicador'
import { getIndicadores } from 'services/indicadores'
import { IndicadoresType } from 'types/automation'
import BotaoHover from 'components/BotaoHover'
import { useNavigate } from 'react-router-dom'
import { supabase } from 'config/supabase'

export default function Indicadores() {
    const navigate = useNavigate()
    const [filter, setFilter] = useState('')
    const [user, setUser] = useState('')
    const [dados, setDados] = useState<IndicadoresType[]>([])
    const [backup, setBackup] = useState<IndicadoresType[]>([])

    useEffect(() => {
        async function getSupabaseData() {
            const user = (await supabase.auth.getUser()).data.user?.email
            if (user !== undefined) setUser(user)
            await getIndicadores(setDados, setBackup)
        }
        getSupabaseData()
    }, [])

    useEffect(() => {
        function findText(text: string) {
            const regex = new RegExp(filter, 'i');
            return regex.test(text);
        }
        let newList = backup.filter(item => findText(item.DESCRIÇÃO) || findText(item.FILE_TYPE) || findText(item.LINK_WEB)
            || findText(item.CRIADO_POR) || findText(item.DATABASES.toString()) || findText(item.ATUALIZACAO) || findText(item.CRIADO_EM)
            || findText(item.LINK_GROUPS) || findText(item.USABILIDADE))
        setDados(newList)
    }, [filter, backup])
    return (
        <>
            <h3 style={{ textAlign: 'center', textWrap: 'wrap' }}>Listagem de Indicadores PCP WEN</h3>
            <div className={styles.header}>
                <InputBox texto={filter} onChange={e => setFilter(e.target.value)} label='Filtrar por Palavra-Chave' />
                {user !== '' && <BotaoHover text="Cadastrar" onClick={() => navigate('/CadastrarIndicador')} />}
            </div>
            <Divider style={{ background: 'white' }} />
            <div className={styles.container}>
                {(dados && dados.length > 0) && dados.map((dado, index) => (
                    <div key={index} className={classNames(
                        styles.box,
                        styles[`box--${dado.FILE_TYPE.replace(' ', '_')}`]
                    )}>
                        <span></span>
                        <div className={styles.content}>
                            <h2>{dado.NOME.slice(0, 25)}</h2>
                            <p>{dado.DESCRIÇÃO.slice(0, 100)}</p>
                            <InfoIndicador fileName={dado.NOME}
                                description={dado.DESCRIÇÃO}
                                databases={dado.DATABASES}
                                atualizacao={dado.ATUALIZACAO}
                                criado_em={dado.CRIADO_EM}
                                criado_por={dado.CRIADO_POR}
                                link_groups={dado.LINK_GROUPS}
                                link_web={dado.LINK_WEB}
                                usabilidade={dado.USABILIDADE} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}