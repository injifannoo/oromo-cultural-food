
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, MapPin, Star } from 'lucide-react';

const RecipeShowcase = () => {
  const featuredRecipes = [
    {
      id: 1,
      name: 'Traditional Injera',
      region: 'Shewa',
      prepTime: '3 days',
      difficulty: 'Intermediate',
      rating: 4.8,
      description: 'The foundation of Oromo cuisine - fermented flatbread made from teff flour.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Chuko (Roasted Barley)',
      region: 'Arsi',
      prepTime: '2 hours',
      difficulty: 'Easy',
      rating: 4.6,
      description: 'A nutritious and flavorful dish made from roasted barley, perfect for any meal.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Marqaa (Traditional Butter)',
      region: 'Arsi',
      prepTime: '30 mins',
      difficulty: 'Easy',
      rating: 4.7,
      description: 'Fresh butter milk preparation that pairs perfectly with traditional bread.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop'
    },
  ];

  return (
    <section id="recipes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-amber-600">Recipes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic Oromo recipes passed down through generations. Each recipe comes with 
            detailed instructions, cultural context, and video tutorials from expert cooks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium">
                      {recipe.region}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{recipe.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {recipe.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{recipe.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {recipe.prepTime}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {recipe.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('regions')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-600 text-white px-8 py-3 rounded-xl hover:bg-amber-700 transition-colors font-semibold"
          >
            Explore All Recipes
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecipeShowcase;
