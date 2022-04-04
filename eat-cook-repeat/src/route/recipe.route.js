const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/jwtAuth');
const { recipeUpload } = require('../middleware/upload');
const { isUser, isAdmin } = require('../middleware/authorization');
const { RecipesController } = require('../controller/recipe.controller')

router.get('/:id', auth, isUser, RecipesController.selectById);
router.post('/', auth, recipeUpload, isUser, RecipesController.insert);
router.put('/:id', auth, isUser, RecipesController.update);

router.put('/deactivate/:title', auth, isAdmin, RecipesController.deactivate);
router.put('/reactivate/:title', auth, isAdmin, RecipesController.reactivate);

router.get('/', auth, isAdmin, RecipesController.selectAll)
      .get('/query', auth, isAdmin, RecipesController.selectByTitle);

module.exports = router;