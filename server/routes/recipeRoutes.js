const express = require("express");
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// App routes
route.get('/' , recipeController.homepage);

module.exports = router;