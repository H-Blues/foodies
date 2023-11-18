import userModel from '../api/user/userModel.js';
import users from './user.js';
import recipeModel from '../api/recipe/recipeModel.js';
import recipes from './recipe.js';

import dotenv from 'dotenv';

dotenv.config();

async function loadUsers() {
  console.log('loading user Data...');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

async function loadRecipes() {
  console.log('loading recipe Data...');
  try {
    await recipeModel.deleteMany();
    await recipes.forEach(recipe => recipeModel.create(recipe));
    console.info(`${recipes.length} recipes were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load recipe Data: ${err}`);
  }
}

if (process.env.SEED_DB) {
  loadUsers();
  loadRecipes();
}