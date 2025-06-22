import express from 'express';
import { getRecipes,addRecipe } from '../controllers/recipeController';
import upload from '../middleware/upload';
const router = express.Router();

router.get('/recipes', getRecipes);
router.post('/recipes', upload.single('image'), addRecipe);

export default router;
