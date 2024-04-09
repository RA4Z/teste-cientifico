import { db } from 'config/firebase';
import { addDoc, collection, doc, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore';

export async function insertAutomation(data: any) {
    try {
        await addDoc(collection(db, 'automations'), data)
        return 'success'
    } catch (error) {
        return error
    }
}

export async function viewAutomations(setAutomations: any, setBackup?: any) {
    const ref = query(collection(db, "automations"), orderBy("data_desenvolvimento", "desc"))
    onSnapshot(ref, (querySnapshot) => {
        const posts: any[] = []
        querySnapshot.forEach((doc) => {
            posts.push({ id: doc.id, ...doc.data() })
        })
        setAutomations(posts)
        if (setBackup) setBackup(posts)
    })
}

export async function infoAutomation(automationID: any, setAutomation: any) {
    try {
        const ref = (await getDoc(doc(db, 'automations', automationID))).data()
        setAutomation(ref)
        return ref
    }
    catch (error) {
        console.log(error)
        return undefined
    }
}