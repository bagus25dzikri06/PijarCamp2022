const express = require('express');
const router = express.Router();
const { RecipesController } = require('../controller/recipe.controller')

router.get('/', RecipesController.selectAll).get('/query', RecipesController.selectByTitle);
router.get('/:id', RecipesController.selectById);
router.get('/recipes-by-user', RecipesController.selectByUser);
router.post('/', RecipesController.insert);
router.put('/:id', RecipesController.update);

module.exports = router;