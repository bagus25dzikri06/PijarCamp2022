const express = require('express');
const router = express.Router();
const { RecipesController } = require('../controller/recipe.controller')

router.get('/', RecipesController.selectAll);
router.get('/:id', RecipesController.selectById);
router.get('/search/query', RecipesController.selectByTitle);
router.get('/recipes-by-user', RecipesController.selectByUser);
router.post('/', RecipesController.insert);
router.put('/:id', RecipesController.update);

module.exports = router;