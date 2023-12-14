const Book = require("../models/books.models")

    // Read
    const getBooks = async (req, res) => {
    try {
        const title = req.params.title || "";
        let books = title ? await Book
                                .find({ title: { $regex: new RegExp(title, "i") } }) : // Regex para encontrar libros que contengan la query.
            await Book
                    .find({}, "-_id -__v")

        if (books.length > 0) {
            res.status(200).json(books);
        } else {
            books = await Book.find({ author: { $regex: new RegExp(title, "i") } }) // Si no encuentra titulos con esa query, busca autores.
            if (books.length > 0) {
                res.status(200).json(books);
            } else {
                res.status(404).json([{msg: "No books found with that title or author!"}]);
            }
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
    }

    // Post
    const createBook = async (req, res) => {
        console.log(req.body);
        try{
            const data = req.body;
            let answer = await new Book(data).save();
            res.status(201).json({message: "Book created", product: answer});
    
        }catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: invalid body format`});
        }
    }

    // Update
    const updateBook = async (req, res) => {
        try {
            const id = req.params.id || "";
            const data = req.body;
            if (req.params.id != "") {
                const books = await Book.find({id: id})
                if (books != null) {
                    await Book.updateOne({id: id}, data)
                    res.status(200).json({message: "Book successfully edited", book: await Book.find({id: id})})
                    } else {
                    res.status(404).send("Libro no encontrado: " + req.params.id)
                    }
            } 
            else {
                await Product.updateMany({}, { $set: data });
                res.status(200).json({message: "Books successfully edited"})
            }
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: invalid body format`});
        }
        }

    // Delete
    const deleteBook = async (req, res) => {
        try {
            const bookID = req.params.id || "";
            const book = await Book.findOne({id: bookID});
                if (book != null) {
                    await Book.deleteOne({id: bookID})
                    res.status(200).send("Book deleted: " + bookID)

                } else if (book == null && req.body.id) {
                        res.status(404).send("Book not found: " + bookID)

                } else if (book == null && !req.body.id) {
                        await Book.deleteMany({})
                        res.status(200).send("All books deleted.")
                }
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj: error});
        }
        }

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
}