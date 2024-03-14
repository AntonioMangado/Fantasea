const express = require('express')
const app = express()
const router = require('express').Router()
const bookControllers = require('../controllers/books.controllers')

router.get('/api/books/:title?', bookControllers.getBooks);
router.get('/api/newreleases', bookControllers.getNewBooks);
router.get('/api/trending', bookControllers.getTrendingBooks);
router.get('/api/category/fantasy', bookControllers.getFantasyBooks);
router.get('/api/category/youngadultfantasy', bookControllers.getYAFantasyBooks);
router.get('/api/category/urbanfantasy', bookControllers.getUrbanFantasyBooks);
router.get('/api/category/humorousfantasy', bookControllers.getHumorousFantasyBooks);
router.get('/api/category/epicfantasy', bookControllers.getEpicFantasyBooks);
router.get('/api/category/darkfantasy', bookControllers.getDarkFantasyBooks);
router.get('/api/category/dystopianfantasy', bookControllers.getDystopianFantasyBooks);
router.post("/api/books", (bookControllers.createBook))
router.put("/api/books/:id?", (bookControllers.updateBook))
router.delete("/api/books/:id?", (bookControllers.deleteBook))

module.exports = router;