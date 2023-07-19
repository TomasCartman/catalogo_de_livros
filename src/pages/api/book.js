import repository from "@/services/repository"

export default async function handler(req, res) {
    const { getBook, addBook } = repository()
    const { id } = req.query

    if(req.method === "GET") {
        const book = await getBook(id)
        res.status(200).json({ name: book })
        
    } else if(req.method === "POST") {
        console.log(req.body)
        const book = req.body
        const bookRef = await addBook(book)
        res.status(201).json({ id: bookRef.id })
    }
}