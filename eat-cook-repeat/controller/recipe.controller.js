const { RecipesModel } = require('../model/recipe.model');

const RecipesController = {
    selectAll: async (req, res) => {
        try {
            const { sortByField } = req.query;
            const sortField = sortByField || 'id';
            const data = await RecipesModel.getRecipes(sortField);
            res.json(data.rows[0]);
        } catch (err) {
            res.json(err);
        }
    },
    selectById: async (req, res) => {
        try {
            const { id } = req.params; 
            const data = await RecipesModel.getRecipesByID(id);

            if (data.rows.length > 0) {
                return res.json(data.rows[0]);
            } else {
                return res.json({
                    message: 'Sorry, the recipe has not been available',
                });
            }
        } catch (err) {
            res.json(err);
        }
    },
    selectByUser: async (req, res) => {
        try {
            const users = 'users';
            const recipes = 'recipes';
            const data = await RecipesModel.getRecipesByUser(users, recipes);
            res.json(data.rows[0]);
        } catch (err) {
            res.json(err);
        }
    },
    selectByTitle: async (req, res) => {
        try {
            const recipesearch = req.query.str;
            const data = await RecipesModel.searchRecipes(recipesearch);

            if (data.rows.length > 0) {
                return res.json(data.rows[0]);
            } else {
                return res.json({
                    message: 'Sorry, no recipes found',
                });
            }
        } catch (err) {
            res.json(err);
        }
    },
    latest: async (req, res) => {
        try {
            const data = await RecipesModel.getNewRecipes();
            res.json(data.rows[0]);
        } catch (err) {
            res.json(err);
        }        
    },
    insert: async (req, res) => {
        const { 
            user_id,
            recipe_image_link, 
            title, 
            ingredients, 
            how_to_cook, 
            recipe_video_link
         } = req.body;

        let userIDCheck = !user_id || user_id === '', 
        imageCheck = !recipe_image_link || recipe_image_link === '', 
        titleCheck = !title || title === '', 
        ingredientsCheck = !ingredients || ingredients === '',
        howToCookCheck = !how_to_cook || how_to_cook === '',
        videoCheck = !recipe_video_link || recipe_video_link === '';

        if (
            userIDCheck && 
            imageCheck &&
            titleCheck &&
            ingredientsCheck &&
            howToCookCheck &&
            videoCheck
        ) {
            return res.status(400).json({
                status: 'failed',
                message: 'All recipe data must be filled',
            });
        } else if (
            imageCheck 
            && titleCheck
            && ingredientsCheck
            && howToCookCheck
            && videoCheck
        ) {
            return res.status(400).json({
                status: 'failed',
                message: 'You forgot the image, recipe and video',
            });
        } else if (
            titleCheck 
            && ingredientsCheck
            && howToCookCheck
            && videoCheck
        ) {
            return res.status(400).json({
                status: 'failed',
                message: 'You forgot the recipe and video',
            });
        } else if (
            ingredientsCheck
            && howToCookCheck
            && videoCheck
        ) {
            return res.status(400).json({
                status: 'failed',
                message: 'You forgot the ingredients, how to cook and video',
            });
        } else if (
            howToCookCheck 
            && videoCheck
        ) {
            return res.status(400).json({
                status: 'failed',
                message: 'You forgot how to cook and the video',
            });
        } else if (
            videoCheck
        ) {
            return res.status(400).json({
                status: 'failed',
                message: 'You forgot the video',
            });
        }

        try {
            const data = await RecipesModel.addRecipe(user_id, 
                recipe_image_link, 
                title, 
                ingredients, 
                how_to_cook, 
                recipe_video_link);
            res.json(data);
        } catch (err) {
            res.json(err);
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { recipe_image_link, title, ingredients, 
                how_to_cook, recipe_video_link }= req.body;
            const data = await RecipesModel.updateRecipe(recipe_image_link, 
                title, 
                ingredients, 
                how_to_cook, 
                recipe_video_link, 
                id);
            res.json(data);
        } catch (err) {
            res.json(err);
        }
    }
};

module.exports = {
    RecipesController,
};
