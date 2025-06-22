
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, MapPin, Star, Play, ShoppingCart, ArrowLeft, Lock, Download } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentModal from '../components/PaymentModal';

const RecipeDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('ingredients');
  const [isPurchased, setIsPurchased] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Mock recipe data - in real app this would come from API
  const recipe = {
    id: id,
    name: 'Traditional Injera',
    region: 'Shewa',
    prepTime: '3 days',
    difficulty: 'Intermediate',
    rating: 4.8,
    reviews: 245,
    price: 9.99,
    description: 'The foundation of Oromo cuisine - fermented flatbread made from teff flour. This traditional recipe has been passed down through generations and represents the heart of Ethiopian dining culture.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop',
    ingredients: [
      '2 cups teff flour',
      '3 cups water (filtered)',
      '1/2 cup barley flour (optional)',
      'Pinch of salt',
      'Starter culture (if available)'
    ],
    instructions: [
      'Mix teff flour with water in a large bowl',
      'Cover and let ferment for 2-3 days at room temperature',
      'The mixture should develop a sour smell and bubbles',
      'Strain the liquid and let it settle overnight',
      'Pour off the clear liquid on top',
      'Cook the remaining batter on a mitad (clay plate) or non-stick pan',
      'Cover and steam until holes form on the surface',
      'Remove and let cool before serving'
    ],
    videoUrl: 'https://example.com/video',
    nutritionFacts: {
      calories: 180,
      protein: '6g',
      carbohydrates: '36g',
      fiber: '4g',
      iron: '15% DV'
    },
    culturalStory: 'Injera is more than just bread - it\'s the centerpiece of Ethiopian and Oromo dining culture. Traditionally prepared by women in the household, the fermentation process requires patience and skill passed down through generations.'
  };

  const handlePurchase = () => {
    setIsPaymentModalOpen(true);
  };

  const downloadRecipePDF = () => {
    const pdfContent = `
      ${recipe.name} - OromoFood Hub Recipe
      
      Region: ${recipe.region}
      Preparation Time: ${recipe.prepTime}
      Difficulty: ${recipe.difficulty}
      
      Description:
      ${recipe.description}
      
      Ingredients:
      ${recipe.ingredients.map((ingredient, index) => `${index + 1}. ${ingredient}`).join('\n')}
      
      Instructions:
      ${recipe.instructions.map((step, index) => `${index + 1}. ${step}`).join('\n')}
      
      Nutrition Facts:
      Calories: ${recipe.nutritionFacts.calories}
      Protein: ${recipe.nutritionFacts.protein}
      Carbohydrates: ${recipe.nutritionFacts.carbohydrates}
      Fiber: ${recipe.nutritionFacts.fiber}
      Iron: ${recipe.nutritionFacts.iron}
      
      Cultural Story:
      ${recipe.culturalStory}
      
      Visit OromoFood Hub for more authentic Oromo recipes!
    `;
    
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${recipe.name.replace(/\s+/g, '-')}-Recipe.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Recipes
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recipe Image and Video */}
          <div className="space-y-6">
            <div className="aspect-video bg-gradient-to-br from-yellow-200 to-orange-300 rounded-2xl overflow-hidden relative">
              {recipe.image && (
                <img 
                  src={recipe.image} 
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                />
              )}
              
              {!isPurchased && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Lock className="h-12 w-12 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Video Tutorial Locked</p>
                    <p className="text-sm opacity-80">Purchase to unlock HD video</p>
                  </div>
                </div>
              )}
              
              {isPurchased && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                    <Play className="h-8 w-8 text-amber-600 ml-1" />
                  </button>
                </div>
              )}
              
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {isPurchased ? 'HD Video Available' : 'Premium Content'}
              </div>
            </div>
            
            {/* Additional Images */}
            <div className="grid grid-cols-3 gap-4">
              {[
                'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop',
                'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop',
                'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop'
              ].map((img, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden">
                  <img src={img} alt={`Recipe step ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Recipe Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                  {recipe.region} Region
                </span>
                <div className="flex items-center">
                  <div className="flex text-amber-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(recipe.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({recipe.reviews} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.name}</h1>
              <p className="text-lg text-gray-600 leading-relaxed">{recipe.description}</p>
            </div>

            {/* Recipe Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Clock className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <div className="font-semibold">{recipe.prepTime}</div>
                <div className="text-sm text-gray-600">Prep Time</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <User className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <div className="font-semibold">{recipe.difficulty}</div>
                <div className="text-sm text-gray-600">Difficulty</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <MapPin className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <div className="font-semibold">{recipe.region}</div>
                <div className="text-sm text-gray-600">Origin</div>
              </div>
            </div>

            {/* Download PDF Button */}
            <button
              onClick={downloadRecipePDF}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center mb-4"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Recipe PDF
            </button>

            {/* Purchase Section */}
            <div className="bg-amber-50 p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900">${recipe.price}</div>
                  <div className="text-sm text-gray-600">Premium Recipe Access</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Includes:</div>
                  <div className="text-sm font-medium">HD Video • Audio Guide • Tips</div>
                </div>
              </div>
              
              {!isPurchased ? (
                <button 
                  onClick={handlePurchase}
                  className="w-full bg-gradient-to-r from-amber-600 to-red-600 text-white py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-red-700 transition-all flex items-center justify-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Purchase Full Recipe
                </button>
              ) : (
                <div className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-center">
                  ✓ Recipe Purchased - Full Access Unlocked
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recipe Content Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['ingredients', 'instructions', 'nutrition', 'story'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-amber-600 text-amber-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'ingredients' && (
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold mb-6">Ingredients</h3>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'instructions' && (
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold mb-6">Instructions</h3>
                {isPurchased ? (
                  <ol className="space-y-4">
                    {recipe.instructions.map((step, index) => (
                      <li key={index} className="flex">
                        <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 pt-1">{step}</p>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <div className="bg-gray-100 p-8 rounded-2xl text-center">
                    <div className="text-4xl mb-4">🔒</div>
                    <h4 className="text-xl font-semibold mb-2">Premium Content</h4>
                    <p className="text-gray-600 mb-4">Purchase this recipe to access detailed step-by-step instructions</p>
                    <button 
                      onClick={handlePurchase}
                      className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                    >
                      Unlock Instructions
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold mb-6">Nutrition Facts</h3>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(recipe.nutritionFacts).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium capitalize">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'story' && (
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold mb-6">Cultural Story</h3>
                <div className="prose prose-lg text-gray-700">
                  <p>{recipe.culturalStory}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
      
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        recipeName={recipe.name}
        price={recipe.price}
        onPaymentSuccess={() => setIsPurchased(true)}
      />
    </div>
  );
};

export default RecipeDetail;
