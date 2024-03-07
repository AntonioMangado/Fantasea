const express = require('express')
const app = express()
const router = require('express').Router()
const bookControllers = require('../controllers/books.controllers')

router.get('/api/books/:title?', bookControllers.getBooks);
router.get('/api/newreleases', bookControllers.getNewBooks);
router.get('/api/trending', bookControllers.getTrendingBooks);
router.post("/api/books", (bookControllers.createBook))
router.put("/api/books/:id?", (bookControllers.updateBook))
router.delete("/api/books/:id?", (bookControllers.deleteBook))

module.exports = router;