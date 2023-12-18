const express = require('express')
const app = express()
const router = require('express').Router()
const userControllers = require('../controllers/users.controllers')

router.get("/api/users/:username", (userControllers.getUser))
router.post("/api/users", (userControllers.createUser))
router.post("/api/login", (userControllers.loginUser))
router.get("/api/logout", (userControllers.logOutUser))

module.exports = router