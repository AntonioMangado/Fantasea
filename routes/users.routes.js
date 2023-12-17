const express = require('express')
const app = express()
const router = require('express').Router()
const userControllers = require('../controllers/users.controllers')

router.post("/api/users", (userControllers.createUser))

module.exports = router