const { pool } = require('../config/db')

const RecipesModel = {
    getRecipeTotal: () => {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT COUNT(*) FROM recipes `, (error, results) => {
                if (error) {
                  reject(error);
                }
                resolve(results);
            });
        })
    },
    getRecipeTotalBasedOnTitle: (recipesearch) => {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT COUNT(*) FROM recipes WHERE LOWER(title) LIKE LOWER($1)`, [`%${recipesearch}%`], (error, results) => {
                if (error) {
                  reject(error);
                }
                resolve(results);
            });
        })
    },
    getRecipes: (sortByField, limit, offset) => {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM recipes ORDER BY ${sortByField} LIMIT ${limit} OFFSET ${offset}`, (error, results) => {
                if (error) {
                  reject(error);
                }
                resolve(results);
            });
        })
    },
    searchRecipes: (recipesearch, limit, offset) => {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM recipes WHERE LOWER(title) LIKE LOWER($1) LIMIT ${limit} OFFSET ${offset}`, 
            [`%${recipesearch}%`], (error, results) => {
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
    addRecipe: (user_id, title, ingredients, how_to_cook, recipe_video_link) => {
      return new Promise((resolve, reject) => {
            addQuery = 'INSERT INTO recipes (user_id, title, ingredients, how_to_cook, recipe_video_link) ' +
                       'VALUES ($1, $2, $3, $4, $5)'
    
            pool.query(addQuery, [user_id, title, ingredients, how_to_cook, recipe_video_link],
            (error, results) => {
              if (error) {
                reject(error);
              }
              resolve(`Recipe ${title} added from user with ID: ${user_id}`);
            });
        })
    },
    updateRecipe: (title, ingredients, how_to_cook, recipe_video_link, id) => {
      return new Promise((resolve, reject) => {
            updateQuery = 'UPDATE recipes SET title = $1, ingredients = $2, how_to_cook = $3, recipe_video_link = $4 WHERE id = $5'
    
            pool.query(updateQuery, [title, ingredients, how_to_cook, recipe_video_link, id],
            (error, results) => {
                if (error) {
                  reject(error);
                }
                resolve(`Recipe ${title} updated from user with ID: ${id}`);
            });
      })
    },
    deactivateRecipe: (title) => {
      return new Promise((resolve, reject) => {
          pool.query('UPDATE recipes SET is_active = FALSE WHERE title = $1', [title], (error, results) => {
              if (error) {
                  reject(error);
              }
              resolve(`Recipe is successfully deactivated`);
          })
      })
    },
    reactivateRecipe: (title) => {
      return new Promise((resolve, reject) => {
          pool.query('UPDATE recipes SET is_active = TRUE WHERE title = $1', [title], (error, results) => {
              if (error) {
                  reject(error);
              }
              resolve(`Recipe is successfully reactivated`);
          })
      })
    },
    deleteRecipe: (id) => {
      return new Promise((resolve, reject) => {
          pool.query('DELETE FROM recipe WHERE id = $1', [id], (error, results) => {
              if (error) {
                  reject(error);
              }
              resolve(`Recipe is successfully deleted`);
          })
      })
  },
};

module.exports = {
    RecipesModel,
};
