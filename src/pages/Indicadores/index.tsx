import { useEffect, useState } from 'react'
import classNames from 'classnames'

import styles from './Indicadores.module.scss'
import DataJSON from 'data/Indicadores.json'
import { Divider } from '@mui/material'
import InputBox from 'components/InputBox'

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
                            <h2>{dado.FILE_TYPE.replace(' ', '_')}</h2>
                            <p>{dado.DESCRIÇÃO}</p>
                            <a href="/">Saber mais</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}