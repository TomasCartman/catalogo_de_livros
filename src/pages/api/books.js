import repository from "@/services/repository"

export default async function handler(req, res) {
    const { getAllBooks } = repository()

    if(req.method === "GET") {
        const books = await getAllBooks()
        res.status(200).json({ books })
    }
}