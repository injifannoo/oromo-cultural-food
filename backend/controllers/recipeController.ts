import { Request, Response } from 'express';
import Recipe from '../models/Recipe';

export const getRecipes = async (req: Request, res: Response) => {
  const { region } = req.query;
  const filter = region ? { region } : {};
  const recipes = await Recipe.find(filter);
  res.json(recipes);
};

export const addRecipe = async (req: Request, res: Response) => {
  const { title, description, region } = req.body;
  const imageUrl = (req as any).file?.path || '';

  if (!title || !description || !region || !imageUrl) {
     res.status(400).json({ message: 'All fields required' });
     return;
  }

  const newRecipe = new Recipe({ title, description, region, imageUrl });
  await newRecipe.save();
  res.status(201).json(newRecipe);
};
export const getRecipeById = async (req: Request, res: Response) => {
  const { id } = req.params; 
  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
       res.status(404).json({ message: 'Recipe not found' });
       return;
    } 
  res.json(recipe);
  } catch (error) {    
    console.error('Error fetching recipe:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const deleteRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;  
  try {
    const recipe = await Recipe.findByIdAndDelete(id);
    if (!recipe) {
       res.status(404).json({ message: 'Recipe not found' });
       return;
    }
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const updateRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;  
  const { title, description, region } = req.body;
  const imageUrl = (req as any).file?.path || '';
  if (!title || !description || !region || !imageUrl) {
    res.status(400).json({ message: 'All fields required' });
    return;
  }
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { title, description, region, imageUrl },
      { new: true }
    );
    if (!updatedRecipe) {
       res.status(404).json({ message: 'Recipe not found' });
       return;
    }
    res.json(updatedRecipe);
  } catch (error) {
    console.error('Error updating recipe:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const rateRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { rating } = req.body;
  if (!rating || rating < 1 || rating > 5) {
    res.status(400).json({ message: 'Rating must be between 1 and 5' });
    return;
  }
  try {
    const recipe = await Recipe.findById(id);
    if
  (!recipe) {
        res.status(404).json({ message: 'Recipe not found' });
        return;
      }
    recipe.rating = (recipe.rating * recipe.reviews + rating) / (recipe.reviews + 1);
    recipe.reviews += 1;  
    await recipe.save();
    res.json({ message: 'Recipe rated successfully', recipe });
  } catch (error) {
    console.error('Error rating recipe:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
 
export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: 'Username and password are required' });
    return;
  }

  // Here you would typically hash the password and save the user to the database
  // For simplicity, we will just return a success message
  res.status(201).json({ message: 'User signed up successfully' });
};

export const login= async(req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
   res.status(400).json({ message: 'Username and password are required' });
   return;
  }

  // Here you would typically check the username and password against the database
  // For simplicity, we will just return a success message
  res.status(200).json({ message: 'User logged in successfully' });
}