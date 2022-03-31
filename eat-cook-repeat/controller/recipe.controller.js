const { RecipesModel } = require('../model/recipe.model');
const { success, failed } = require('../helpers/response');

const RecipesController = {
    selectAll: async (req, res) => {
        try {
            const { sortByField, page, limit } = req.query;
            const sortField = sortByField || 'id';
            const pageValue = page ? Number(page) : 1;
            const limitValue = limit ? Number(limit) : 2;
            const offsetValue = (pageValue - 1) * limitValue;

            const recipeTotal = await RecipesModel.getRecipeTotal();
            const totalRecipes = Number(recipeTotal.rows[0].count);
            const paginations = {
                currentPage: pageValue,
                dataPerPage: limitValue,
                totalPage: Math.ceil(Number(totalRecipes) / limitValue),
                totalData: totalRecipes
            }

            const data = await RecipesModel.getRecipes(sortField, limitValue, offsetValue);
            success(res, data.rows, 'success', 'get all recipes successfully', paginations);
        } catch (err) {
            failed(res, err.message, 'failed', 'not get all recipes failedly');
        }
    },
    selectById: async (req, res) => {
        try {
            const { id } = req.params; 
            const data = await RecipesModel.getRecipesByID(id);

            if (data.rows.length > 0) {
                return success(res, data, 'success', 'get all recipes successfully based on ID');
            } else {
                return res.json({
                    message: 'Sorry, the recipe has not been available',
                });
            }
        } catch (err) {
            failed(res, err.message, 'failed', 'not get all recipes failedly based on ID');
        }
    },
    selectByUser: async (req, res) => {
        try {
            const users = 'users';
            const recipes = 'recipes';
            const data = await RecipesModel.getRecipesByUser(users, recipes);
            success(res, data, 'success', 'Recipes are shown successfully based on the users');
        } catch (err) {
            failed(res, err.message, 'failed', 'Recipes are not shown failedly based on the users');
        }
    },
    selectByTitle: async (req, res) => {
        try {
            const recipesearch = req.query.str;
            const { page, limit } = req.query;
            
            const pageValue = page ? Number(page) : 1;
            const limitValue = limit ? Number(limit) : 2;
            const offsetValue = (pageValue - 1) * limitValue;

            const recipeTotal = await RecipesModel.getRecipeTotalBasedOnTitle(recipesearch);
            const totalRecipes = Number(recipeTotal.rows[0].count);
            const paginations = {
                currentPage: pageValue,
                dataPerPage: limitValue,
                totalPage: Math.ceil(Number(totalRecipes) / limitValue),
                totalData: totalRecipes
            }
            const data = await RecipesModel.searchRecipes(recipesearch, limitValue, offsetValue);

            if (data.rowCount > 0) {
                return success(res, data.rows, 'success', 'get all recipes searched successfully', paginations);
            } else {
                return res.json({
                    message: 'Sorry, no recipes found',
                });
            }
        } catch (err) {
            failed(res, err.message, 'failed', 'get all recipes not searched failedly');
        }
    },
    latest: async (req, res) => {
        try {
            const data = await RecipesModel.getNewRecipes();
            success(res, data.rows, 'success', 'get all latest recipes successfully');
        } catch (err) {
            failed(res, err.message, 'failed', 'not get all latest recipes failedly');
        }        
    },
    insert: async (req, res) => {
        try {
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

            const data = await RecipesModel.addRecipe(user_id, 
                recipe_image_link, 
                title, 
                ingredients, 
                how_to_cook, 
                recipe_video_link);
            success(res, data, 'success', 'Recipe is added successfully');
        } catch (err) {
            failed(res, err.message, 'failed', 'Recipe is failed to be added');
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { recipe_image_link, title, ingredients, how_to_cook, recipe_video_link } = req.body;
            const data = await RecipesModel.updateRecipe(recipe_image_link, 
                title, 
                ingredients, 
                how_to_cook, 
                recipe_video_link, 
                id);
            success(res, data, 'success', 'Recipe is updated successfully');
        } catch (err) {
            failed(res, err.message, 'failed', 'Recipe is failed to be updated');
        }
    }
};

module.exports = {
    RecipesController,
};
