
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, MapPin, ArrowLeft, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RegionalRecipes = () => {
  const { region } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  // Mock regional data with images
  const regionData: any = {
    arsi: {
      name: 'Arsi',
      description: 'Known for highland cuisine with barley, wheat, and dairy products',
      color: 'bg-amber-500',
      recipes: [
        { 
          id: 1, 
          name: 'Chuko', 
          prepTime: '2 hours', 
          difficulty: 'Easy', 
          description: 'Roasted barley dish',
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop'
        },
        { 
          id: 2, 
          name: 'Marqaa', 
          prepTime: '30 mins', 
          difficulty: 'Easy', 
          description: 'Traditional butter milk',
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
        },
        { 
          id: 3, 
          name: 'Qorii Barley', 
          prepTime: '1 hour', 
          difficulty: 'Medium', 
          description: 'Spiced barley stew',
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop'
        }
      ]
    },
    borana: {
      name: 'Borana',
      description: 'Pastoral cuisine featuring milk products and meat dishes',
      color: 'bg-red-500',
      recipes: [
        { 
          id: 4, 
          name: 'Milk Products', 
          prepTime: '45 mins', 
          difficulty: 'Easy', 
          description: 'Fresh dairy preparations',
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
        },
        { 
          id: 5, 
          name: 'Meat Dishes', 
          prepTime: '2 hours', 
          difficulty: 'Advanced', 
          description: 'Traditional meat preparations',
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop'
        }
      ]
    },
    guji: {
      name: 'Guji',
      description: 'Coffee region specializing in coffee-based dishes and honey preparations',
      color: 'bg-orange-500',
      recipes: [
        { 
          id: 6, 
          name: 'Coffee Dishes', 
          prepTime: '1 hour', 
          difficulty: 'Medium', 
          description: 'Coffee-infused cuisine',
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop'
        },
        { 
          id: 7, 
          name: 'Honey-based', 
          prepTime: '30 mins', 
          difficulty: 'Easy', 
          description: 'Sweet honey preparations',
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
        }
      ]
    },
    jimma: {
      name: 'Jimma',
      description: 'Diverse cuisine with spiced stews and vegetable dishes',
      color: 'bg-yellow-500',
      recipes: [
        { 
          id: 8, 
          name: 'Spiced Stews', 
          prepTime: '1.5 hours', 
          difficulty: 'Advanced', 
          description: 'Rich and flavorful stews',
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop'
        },
        { 
          id: 9, 
          name: 'Vegetable Dishes', 
          prepTime: '45 mins', 
          difficulty: 'Medium', 
          description: 'Fresh vegetable preparations',
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop'
        }
      ]
    },
    wellega: {
      name: 'Wellega',
      description: 'Grain-based cuisine with fermented foods',
      color: 'bg-green-500',
      recipes: [
        { 
          id: 10, 
          name: 'Grain-based', 
          prepTime: '2 hours', 
          difficulty: 'Medium', 
          description: 'Traditional grain dishes',
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
        },
        { 
          id: 11, 
          name: 'Fermented Foods', 
          prepTime: '3 days', 
          difficulty: 'Advanced', 
          description: 'Fermented preparations',
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop'
        }
      ]
    },
    shewa: {
      name: 'Shewa',
      description: 'Mixed cuisine with urban fusion influences',
      color: 'bg-blue-500',
      recipes: [
        { 
          id: 12, 
          name: 'Mixed Cuisine', 
          prepTime: '1 hour', 
          difficulty: 'Medium', 
          description: 'Diverse mixed dishes',
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop'
        },
        { 
          id: 13, 
          name: 'Urban Fusion', 
          prepTime: '45 mins', 
          difficulty: 'Easy', 
          description: 'Modern interpretations',
          image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop'
        }
      ]
    }
  };

  const currentRegion = regionData[region?.toLowerCase() || 'arsi'] || regionData.arsi;

  const filteredRecipes = currentRegion.recipes.filter((recipe: any) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterBy === 'all' || recipe.difficulty.toLowerCase() === filterBy)
  );

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Region Header */}
        <div className="text-center mb-12">
          <div className={`w-24 h-24 ${currentRegion.color} rounded-full mx-auto mb-6 flex items-center justify-center`}>
            <MapPin className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentRegion.name} Region Cuisine</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{currentRegion.description}</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="all">All Difficulty Levels</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Recipes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe: any) => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium">
                      {currentRegion.name}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      Region
                    </span>
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

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No recipes found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default RegionalRecipes;
