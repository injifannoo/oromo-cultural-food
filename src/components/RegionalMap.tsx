
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const RegionalMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<any>(null);
  const navigate = useNavigate();

  const regions = [
    { name: 'Arsi', specialties: ['Chuko', 'Marqaa', 'Qorii'], color: 'bg-amber-500' },
    { name: 'Borana', specialties: ['Milk Products', 'Meat Dishes'], color: 'bg-red-500' },
    { name: 'Guji', specialties: ['Coffee Dishes', 'Honey-based'], color: 'bg-orange-500' },
    { name: 'Jimma', specialties: ['Spiced Stews', 'Vegetable Dishes'], color: 'bg-yellow-500' },
    { name: 'Wellega', specialties: ['Grain-based', 'Fermented Foods'], color: 'bg-green-500' },
    { name: 'Shewa', specialties: ['Mixed Cuisine', 'Urban Fusion'], color: 'bg-blue-500' },
  ];

  const handleRegionClick = (region: any) => {
    // Navigate to the regional recipes page
    navigate(`/region/${region.name.toLowerCase()}`);
  };

  return (
    <section id="regions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore by <span className="text-amber-600">Region</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each Oromo region has its unique culinary traditions shaped by geography, climate, and local ingredients. 
            Discover the diverse flavors across Oromia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Visualization (Simplified) */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-yellow-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Oromia Regions</h3>
              
              {/* Simplified regional representation */}
              <div className="grid grid-cols-3 gap-4 h-full">
                {regions.map((region, index) => (
                  <button
                    key={region.name}
                    className={`${region.color} rounded-lg p-4 cursor-pointer transition-all hover:scale-105 shadow-lg flex flex-col items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-500`}
                    onClick={() => handleRegionClick(region)}
                  >
                    <MapPin className="h-6 w-6 text-white mb-2" />
                    <span className="text-white font-semibold text-sm text-center">{region.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Region Details */}
          <div className="space-y-6">
            {selectedRegion ? (
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-amber-700 mb-4">{selectedRegion.name}</h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Signature Dishes:</h4>
                <div className="space-y-3">
                  {selectedRegion.specialties.map((dish: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${selectedRegion.color}`}></div>
                      <span className="text-gray-700">{dish}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to={`/region/${selectedRegion.name.toLowerCase()}`}
                  className="inline-block mt-6 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  View {selectedRegion.name} Recipes
                </Link>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Select a Region</h3>
                <p className="text-gray-600">
                  Click on any region above to discover its unique culinary traditions and signature dishes.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalMap;
