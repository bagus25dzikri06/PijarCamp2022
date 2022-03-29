const { RecipeCommentsModel } = require('../model/comment.model');

const RecipeCommentsController = {
    selectAll: async (req, res) => {
        try {
            const { sortByField } = req.query;
            const sortField = sortByField || 'id';
            const data = await RecipeCommentsModel.getComments(sortField);
            res.json(data.rows[0]);
        } catch (err) {
            res.json(err);
        }
    },
    selectByRecipe: async (req, res) => {
        try {
            const cuisines = 'cuisine';
            const commentaries = 'commentary';
            const data = await RecipeCommentsModel.getCommentsByRecipeName(cuisines, commentaries);
            res.json(data.rows[0]);
        } catch (err) {
            res.json(err);
        }
    },
    insert: async (req, res) => {
        const { user_id, recipe_id, recipe_comment } = req.body;

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

        try {
            const data = await RecipeCommentsModel.insertComments(user_id, recipe_id, recipe_comment)
            res.json(data);
        } catch (err) {
            res.json(err);
        }
    },
    edit: async (req, res) => {
        try {
            const { recipe_comment } = req.body;
            const { id } = req.params; 
            const data = await RecipeCommentsModel.editComments(recipe_comment, id);
            res.json(data);
        } catch (err) {
            res.json(err);
        }
    },
    deleted: async (req, res) => {
        try {
            const { id } = req.params; 
            const data = await RecipeCommentsModel.deleteComments(id);
            res.json(data);
        } catch (err) {
            res.json(err);
        }        
    },
};

module.exports = {
    RecipeCommentsController,
};
