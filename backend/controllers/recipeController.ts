import { Request, Response } from 'express';
import Recipe from '../models/Recipe';
import User from '../models/Users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const getRecipes = async (req: Request, res: Response) => {
  const { region } = req.query;
  const filter = region ? { region } : {};
  const recipes = await Recipe.find(filter);
  res.json(recipes);
};

export const addRecipe = async (req: Request, res: Response) => {
   if (!req.body) {
       res.status(400).json({ message: 'Request body is missing' });
    }
  // if (!req.file) {
  //   res.status(400).json({ message: 'Image file is required' });  
  //   return;
  // } 
  const { title, description, region } = req.body;
  const imageUrl = (req as any).file?.path || '';

  if (!title || !description || !region) {
     res.status(400).json({ message: 'All fields required' });
     return;
  }

  const newRecipe = new Recipe({ title, description, region });
  await newRecipe.save();
  res.status(201).json(newRecipe);

  res.status(201).json({ message: 'User registered successfully', newRecipe});


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
  if (!title || !description || !region) {
    res.status(400).json({ message: 'All fields required' });
    return;
  }
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { title, description, region },
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
   if (!req.body) {
       res.status(400).json({ message: 'Request body is missing' });
    }
  
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
       res.status(400).json({ message: 'Name, Email, and Password are required' });
    }
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
       res.status(400).json({ message: 'User already exists with this email' });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const login= async(req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!req.body) {
   res.status(400).json({ message: 'Request body is missing' });
   return;
  }
  if (!email || !password) {
   res.status(400).json({ message: 'Email and password are required' });
   return;
  }
  // if (password.length < 6) {
  //   res.status(400).json({ message: 'Password must be at least 6 characters long' });
  //   return;
  // }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'supersecretkey1234',
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'User logged in successfully',
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};