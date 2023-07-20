import repository from "@/services/repository"

export default async function handler(req, res) {
    const { getBook, addBook, updateBook, deleteBook } = repository()

    if (req.method === "GET") {
        const { id } = req.query
        try {
            const book = await getBook(id)
            res.status(200).json({ name: book })
        } catch (e) {
            res.status(500).json({ error: 'Server error', errorMsg: e })
        }
    } else if (req.method === "POST") {
        const book = req.body
        try {
            const bookRef = await addBook(book)
            res.status(201).json({ id: bookRef.id })
        } catch (e) {
            res.status(500).json({ error: 'Server error', errorMsg: e })
        }
    } else if (req.method === "PUT") {
        const book = req.body
        try {
            await updateBook(book.id, book)
            res.status(200)
        } catch (e) {
            res.status(500).json({ error: 'Server error', errorMsg: e })
        }
    } else if (req.method === "DELETE") {
        const id = req.body
        try {
            await deleteBook(id)
            res.status(200).json({ resp: req.body })
        } catch (e) {
            res.status(500).json({ error: 'Server error', errorMsg: e })
        }
    }

    else {
        res.status(405).json({ error: 'Method not allowed' })
    }
}