/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const bodyParser = require('body-parser');
const cors = require('cors');

const users = require('./src/route/user.route');
const recipes = require('./src/route/recipe.route');
const comments = require('./src/route/comment.route');

const { RecipesController } = require('./src/controller/recipe.controller');
const { RecipeCommentsController } = require('./src/controller/comment.controller');

const app = express();

app.use(helmet());
app.use(xss());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use('/users', users);
app.use('/recipes', recipes);
app.use('/comments', comments);

const port = process.env.PORT || 5000;

app.get('/', RecipesController.selectAll);
app.get('/latest', RecipesController.latest);
app.get('/recipes-by-user', RecipesController.selectByUser);
app.get('/comments-by-recipe', RecipeCommentsController.selectByRecipe);

app.get('/', (req, res) => {
  res.status(200).send('Engine Started, Ready to take off!');
});

app.listen(port, () => {
  console.log(`Here we go, Engines started at ${port}.`);
});
