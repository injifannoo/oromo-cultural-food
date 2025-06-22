import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema(
  {
    name: { type: String,  },
    region: { type: String,  },
    prepTime: { type: String,  },
    difficulty: { type: String,  },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    description: { type: String,  },
    image: { type: String, }, // main image
    ingredients: { type: [String], default: [] },
    instructions: { type: [String], default: [] },
    videoUrl: { type: String, default: '' },
    nutritionFacts: {
      calories: { type: Number },
      protein: { type: String },
      carbohydrates: { type: String },
      fiber: { type: String },
      iron: { type: String },
    },
    culturalStory: { type: String },
    isPremium: { type: Boolean, default: true },
  },
  { timestamps: true }
);


export default mongoose.model('Recipe', RecipeSchema);
