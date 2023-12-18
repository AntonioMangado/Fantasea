const express = require('express')
const app = express()
const router = require('express').Router()
const userControllers = require('../controllers/users.controllers')

router.get("/api/users/:username", (userControllers.getUser))
router.get("/api/logout", (userControllers.logOutUser))
router.post("/api/users", (userControllers.createUser))

module.exports = router