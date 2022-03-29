const express = require('express');
const router = express.Router();
const { RecipeCommentsController } = require('../controller/comment.controller');

router.get('/', RecipeCommentsController.selectAll);
router.post('/', RecipeCommentsController.insert);
router.put('/:id', RecipeCommentsController.edit);
router.delete('/:id', RecipeCommentsController.deleted);

module.exports = router;