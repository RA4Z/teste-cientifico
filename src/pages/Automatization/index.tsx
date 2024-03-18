import { useParams } from 'react-router-dom'
import styles from './Automatization.module.scss'
import { useState } from 'react'

export default function Automatization() {
    const { id } = useParams()
    const [dados, setDados] = useState({
        nome: 'Cobrança de materiais WMO para GTA',
        solicitante: 'Beatriz Silva de Andrade Graciosa',
        desenvolvedor: 'Robert Aron Zimmermann',
        data_desenvolvimento: '15/03/2024',
        descricao: 'Descrição sobre a macro'
    })

    return (
        <div className={styles.container}>
            <h2>{dados.nome}</h2>
        </div>
    )
}