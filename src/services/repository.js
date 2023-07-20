import { getFirestore, collection, doc, getDoc, getDocs, setDoc, addDoc, deleteDoc } from "firebase/firestore";
import firebaseApp from '@/backend/db/index'

export default function repository() {
    const firestore = getFirestore(firebaseApp);
    const booksRef = collection(firestore, 'books')

    async function getAllBooks() {
        const snapshot = await getDocs(booksRef)
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))
        return data
    }

    async function getBook(id) {
        const document = doc(booksRef, id)
        const docSnap = await getDoc(document)
        if (!docSnap.exists) {
            return null
        } else {
            const data = {
                id: docSnap.id,
                ...docSnap.data(),
            }
            return data
        }
    }

    async function addBook(book) {
        const docRef = await addDoc(booksRef, book)
        return docRef.id
    }

    async function deleteBook(id) {
        await deleteDoc(doc(booksRef, id))
    }

    async function updateBook(id, book) {
        await setDoc(doc(booksRef, id), book)
    }

    return {
        getAllBooks,
        getBook,
        addBook,
        updateBook,
        deleteBook
    }
}