import Header from "components/Header"
import styles from './Homepage.module.scss'
import Footer from "components/Footer"
import List from "components/List"

import { viewAutomations } from "services/firestore"
import { AutomationType } from "types/automation"

import { useEffect, useState } from "react"

export default function Homepage() {
    const [automations, setAutomations] = useState<AutomationType[]>([])

    useEffect(() => {
        async function getFirebaseData() {
            await viewAutomations(setAutomations)
        }
        getFirebaseData()
    }, [])

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.projects}>
                    {automations.map((automation, index) => (
                        <List 
                            key={index}
                            id={automation.id}
                            data_desenvolvimento={automation.data_desenvolvimento}
                            nome={automation.nome}
                            desenvolvedor={automation.desenvolvedor}
                            solicitante={automation.solicitante} />
                    ))}
                </div>

            </div>
            <Footer />
        </>
    )
}