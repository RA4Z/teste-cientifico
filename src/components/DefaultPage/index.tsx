import { Outlet } from 'react-router-dom'
import styles from './DefaultPage.module.scss'
import ChatBot from 'components/ChatBot'
import { useState } from 'react'

export default function DefaultPage() {
    const [chatVisible, setChatVisible] = useState(false)

    return (
        <div className={styles.container}>
            {!chatVisible && <button className={styles.chat} onClick={() => setChatVisible(true)}>Falar com o ChatBot PCP</button>}
            {chatVisible && <ChatBot visible={chatVisible} setVisible={setChatVisible} />}
            <Outlet />
        </div>
    )
}