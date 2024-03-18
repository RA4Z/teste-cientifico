import Header from "components/Header"
import styles from './Homepage.module.scss'
import Footer from "components/Footer"

export default function Homepage() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1>PPC Automation's Database</h1>
            </div>
            <Footer />
        </>
    )
}