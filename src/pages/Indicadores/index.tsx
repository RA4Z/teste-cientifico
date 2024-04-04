import { useEffect, useState } from 'react'
import classNames from 'classnames'

import styles from './Indicadores.module.scss'
import DataJSON from 'data/Indicadores.json'
import { Divider } from '@mui/material'
import InputBox from 'components/InputBox'
import InfoIndicador from './InfoIndicador'

export default function Indicadores() {
    const [dados, setDados] = useState(DataJSON)
    const [filter, setFilter] = useState('')

    useEffect(() => {
        function findText(text: string) {
            const regex = new RegExp(filter, 'i');
            return regex.test(text);
        }
        let newList = DataJSON.filter(item => findText(item.DESCRIÇÃO) || findText(item.FILE_TYPE) || findText(item.LINK_WEB)
            || findText(item['CRIADO POR']) || findText(item.DATABASES.toString()) || findText(item.ATUALIZACAO) || findText(item['CRIADO EM'])
            || findText(item.LINK_GROUPS) || findText(item.USABILIDADE))
        setDados(newList)
    }, [filter])
    return (
        <>
            <h3 style={{ textAlign: 'center', textWrap: 'wrap' }}>Listagem de Indicadores PCP WEN</h3>
            <div className={styles.header}>
                <InputBox texto={filter} onChange={e => setFilter(e.target.value)} label='Filtrar por Palavra-Chave' />
            </div>
            <Divider style={{ background: 'white' }} />
            <div className={styles.container}>
                {dados.map((dado, index) => (
                    <div key={index} className={classNames(
                        styles.box,
                        styles[`box--${dado.FILE_TYPE.replace(' ', '_')}`]
                    )}>
                        <span></span>
                        <div className={styles.content}>
                            <h2>{dado.NOME}</h2>
                            <p>{dado.DESCRIÇÃO}</p>
                            <InfoIndicador fileName={dado.NOME}
                                description={dado.DESCRIÇÃO}
                                databases={dado.DATABASES}
                                atualizacao={dado.ATUALIZACAO}
                                criado_em={dado['CRIADO EM']}
                                criado_por={dado['CRIADO POR']}
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