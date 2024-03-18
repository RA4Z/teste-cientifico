import Header from "components/Header"
import styles from './Homepage.module.scss'
import Footer from "components/Footer"
import List from "components/List"

export default function Homepage() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.projects}>
                    <List data_desenvolvimento="15/03/2024"
                        nome="Cobrança de materiais WMO para GTA"
                        desenvolvedor="Robert Aron Zimmermann"
                        solicitante="Beatriz Silva de Andrade Graciosa" />
                    <List data_desenvolvimento="15/03/2024"
                        nome="Cobrança de materiais WMO para GTA"
                        desenvolvedor="Robert Aron Zimmermann"
                        solicitante="Beatriz Silva de Andrade Graciosa" />
                    <List data_desenvolvimento="15/03/2024"
                        nome="Cobrança de materiais WMO para GTA"
                        desenvolvedor="Robert Aron Zimmermann"
                        solicitante="Beatriz Silva de Andrade Graciosa" />
                </div>

            </div>
            <Footer />
        </>
    )
}