const { RecipeCommentsModel } = require('../model/comment.model');

const RecipeCommentsController = {
    selectAll: async (req, res) => {
        const { sortByField } = req.query, sortField = sortByField || 'id';

        await RecipeCommentsModel.getComments(sortField)
            .then((result) => {
                res.json(result.rows);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    selectByRecipe: async (req, res) => {
        const cuisines = 'cuisine', commentaries = 'commentary';

        await RecipeCommentsModel.getCommentsByRecipeName(cuisines, commentaries)
            .then((result) => {
                res.json(result.rows);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    insert: async (req, res) => {
        const user_id  = req.body.user_id,
        recipe_id = req.body.recipe_id,
        recipe_comment = req.body.recipe_comment;

        if (!recipe_comment || recipe_comment === '') {
            return res.status(400).json({
                message: 'You forgot recipe comment',
            });
        }
        
        if (!recipe_id || !recipe_comment || recipe_id === '' || recipe_comment === '') {
            return res.status(400).json({
                message: 'You forgot recipe ID and comment',
            });
        }

        if (!user_id || !recipe_id || !recipe_comment || user_id === '' || recipe_id === '' || recipe_comment === '') {
            return res.status(400).json({
                message: 'All data must be filled',
            });
        } 

        await RecipeCommentsModel.insertComments(user_id, recipe_id, recipe_comment)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    edit: async (req, res) => {
        const recipe_comment = req.body.recipe_comment,
        id = req.params.id;

        await RecipeCommentsModel.editComments(recipe_comment, id)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    deleted: async (req, res) => {
        const id = req.params.id;

        await RecipeCommentsModel.deleteComments(id)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            })
    },
}

module.exports = {
    RecipeCommentsController,
}
