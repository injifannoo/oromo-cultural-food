import { getRecipeById, updateRecipe } from './../controllers/recipeController';
import express from 'express';
import { getRecipes,addRecipe, signup, login, deleteRecipe } from '../controllers/recipeController';
import upload from '../middleware/upload';
const router = express.Router();

router.get('/recipes', getRecipes);
router.post('/recipes', upload.single('image'), addRecipe);
router.delete('/recipes/:id', deleteRecipe);
router.put('/:id', updateRecipe);
router.get('/recipes/:id', getRecipeById);
router.post('/signup', signup);
router.get('/login',login);

export default router;
