import { database } from "config/firebase";
import { onValue, query, ref } from "firebase/database";

export async function getHistory(dbRef: string, setHistory: any) {
    try {
        const messagesRef = ref(database, dbRef);
        const limitedMessagesQuery = query(messagesRef); // Limitando para buscar apenas as últimas 30 mensagens

        onValue(limitedMessagesQuery, (snapshot) => {
            const messagesData: any[] = [];
            snapshot.forEach((childSnapshot) => {
                messagesData.push({ id: childSnapshot.key, ...childSnapshot.val() });
            });
            setHistory(messagesData);
        });
    } catch (error) {
        console.error('Erro ao buscar o histórico:', error);
    }
}
