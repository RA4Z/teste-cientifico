import { useState } from 'react'
import classNames from 'classnames'

import styles from './Indicadores.module.scss'
import data from 'data/Indicadores.json'

export default function Indicadores() {
    const [dados, setDados] = useState(data)

    return (
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
    )
}