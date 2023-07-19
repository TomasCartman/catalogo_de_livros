import { getFirestore, collection, doc, getDoc, getDocs, setDoc, addDoc } from "firebase/firestore";
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
        console.log(docRef.id)
        return docRef.id
    }

    async function deleteBook(id) {

    }

    async function updateBook(id) {
        
    }

    return {
        getAllBooks,
        getBook,
        addBook
    }
}