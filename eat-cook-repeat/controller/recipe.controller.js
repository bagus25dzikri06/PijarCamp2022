const { RecipesModel } = require('../model/recipe.model')
const { pool } = require('../db')

const RecipesController = {
    selectAll: async (req, res) => {
        const { sortByField } = req.query
        const sortField = sortByField || 'id';

        await RecipesModel.getRecipes(sortField)
        .then((result) => {
            res.json(result.rows);
        }).catch((err) => {
            res.json(err);
        });
    },
    selectById: async (req, res) => {
        const { id } = req.params

        await RecipesModel.getRecipesByID(id)
        .then((results) => {
            if (results.rows.length > 0) {
                return res.json(results.rows);
            } else {
                return res.json({
                    message: 'Sorry, the recipe has not been available',
                })
            }
        }).catch((err) => {
            res.json(err);
        });
    },
    selectByUser: async (req, res) => {
        const users = 'users'
        const recipes = 'recipes'

        await RecipesModel.getRecipesByUser(users, recipes)
        .then((result) => {
            res.json(result.rows);
        }).catch((err) => {
            res.json(err);
        });
    },
    selectByTitle: (req, res) => {
        const recipesearch = req.params.str

        pool.connect((err, client, done) => {
            if (err) {
                console.log("error", err);
                res.status(500).send("Error");
            } else {
                RecipesModel.searchRecipes(recipesearch).then((results) => {
                    if (results.rows.length > 0) {
                        return res.json(results.rows);
                        //res.render('recipes', {recipes: res.json(results.rows)});
                    } else {
                        return res.json({
                            message: 'No results found',
                        })
                        /*res.render('recipes', {recipes: [
                            {
                                title: 'No results found'
                            }
                        ]});*/
                    }
                }).catch((err) => {
                    res.json(err);
                });

                done();
            }
        });
    },
    latest: async (req, res) => {
        await RecipesModel.getNewRecipes()
        .then((result) => {
            res.json(result.rows);
        }).catch((err) => {
            res.json(err);
        });
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
            })
        } else if (
            imageCheck &&
            titleCheck &&
            ingredientsCheck &&
            howToCookCheck &&
            videoCheck
        ) {
            return res.status(400).json({
                status: 'failed',
                message: 'You forgot the image, recipe and video',
            })
        } else if (
            titleCheck &&
            ingredientsCheck &&
            howToCookCheck &&
            videoCheck
        ) {
            return res.status(400).json({
                status: 'failed',
                message: 'You forgot the recipe and video',
            })
        } else if (
            ingredientsCheck &&
            howToCookCheck &&
            videoCheck
        ) {
            return res.status(400).json({
                status: 'failed',
                message: 'You forgot the ingredients, how to cook and video',
            })
        } else if (
            howToCookCheck &&
            videoCheck
        ) {
            return res.status(400).json({
                status: 'failed',
                message: 'You forgot how to cook and the video',
            })
        } else if (
            videoCheck
        ) {
            return res.status(400).json({
                status: 'failed',
                message: 'You forgot the video',
            })
        }

        await RecipesModel.addRecipe(user_id, recipe_image_link, title, ingredients, how_to_cook, recipe_video_link)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.json(err);
        })
    },
    update: async (req, res) => {
        const id = req.params.id,
        recipe_image_link = req.body.recipe_image_link,
        title = req.body.title,
        ingredients = req.body.ingredients,
        how_to_cook = req.body.how_to_cook,
        recipe_video_link = req.body.recipe_video_link;

        await RecipesModel.updateRecipe(recipe_image_link, title, ingredients, how_to_cook, recipe_video_link, id)
        .then((result) => {
          res.json(result);
        }).catch((err) => {
          res.json(err);
        })
    }
}

module.exports = {
    RecipesController,
};
