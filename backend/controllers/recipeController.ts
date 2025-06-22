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
