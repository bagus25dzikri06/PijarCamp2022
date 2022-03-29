const { pool } = require('../config/db')

const RecipesModel = {
    getRecipes: (sortByField) => {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM recipes ORDER BY ${sortByField}`, (error, results) => {
                if (error) {
                  reject(error);
                }
                resolve(results);
            });
        })
    },
    searchRecipes: (recipesearch) => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM recipes WHERE LOWER(title) LIKE LOWER($1)', [`%${recipesearch}%`], (error, results) => {
                if (error) {
                  reject(error);
                }
                resolve(results);
            });
        })
    },
    getRecipesByID: (id) => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM recipes WHERE id = $1', [id], (error, results) => {
                if (error) {
                  reject(error);
                }
                resolve(results);
            });
        })
    },
    getNewRecipes: () => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM recipes ORDER BY id DESC LIMIT 5', (error, results) => {
              if (error) {
                reject(error);
              }
              resolve(results);
            });
        })
    },
    getRecipesByUser: (users, recipes) => {
        return new Promise((resolve, reject) => {
            recipesByUser = `SELECT users.name, recipes.title AS cuisine_title, recipes.ingredients, recipes.how_to_cook ` +
                            `FROM ${users} INNER JOIN ${recipes} ON recipes.user_id = users.id`
      
            pool.query(recipesByUser, (error, result) => {
              if (error) {
                reject(error);
              }
              resolve(result);
            });
        })
    },
        
    addRecipe: (user_id, recipe_image_link, title, ingredients, how_to_cook, recipe_video_link) => {
      return new Promise((resolve, reject) => {
            addQuery = 'INSERT INTO recipes (user_id, recipe_image_link, title, ingredients, how_to_cook, recipe_video_link) ' +
                       'VALUES ($1, $2, $3, $4, $5, $6)'
    
            pool.query(addQuery, [user_id, recipe_image_link, title, ingredients, how_to_cook, recipe_video_link],
            (error, results) => {
              if (error) {
                reject(error);
              }
              resolve(`Recipe ${title} added from user with ID: ${user_id}`);
            });
        })
    },
    updateRecipe: (recipe_image_link, title, ingredients, how_to_cook, recipe_video_link, id) => {
      return new Promise((resolve, reject) => {
            updateQuery = 'UPDATE recipes SET recipe_image_link = $1, title = $2, '
                          + 'ingredients = $3, how_to_cook = $4, recipe_video_link = $5 WHERE id = $6'
    
            pool.query(updateQuery, [recipe_image_link, title, ingredients, how_to_cook, recipe_video_link, id],
            (error, results) => {
                if (error) {
                  reject(error);
                }
                resolve(`Recipe ${title} updated from user with ID: ${id}`);
            });
      })
    }
};

module.exports = {
    RecipesModel,
};
