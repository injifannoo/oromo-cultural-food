
import React from 'react';
import { Globe, Book, Users, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">OromoFood Hub</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Preserving and celebrating Oromo culinary heritage through digital storytelling, 
              community sharing, and cultural education. Connect with your roots through authentic flavors.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <Globe className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <Book className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#recipes" className="text-gray-300 hover:text-amber-400 transition-colors">Recipe Library</a></li>
              <li><a href="#regions" className="text-gray-300 hover:text-amber-400 transition-colors">Regional Cuisine</a></li>
              <li><a href="#community" className="text-gray-300 hover:text-amber-400 transition-colors">Community</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Community</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Contribute Recipes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Join Forums</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Cultural Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Events</a></li>
            </ul>
          </div>
        </div>

        {/* Language & Region Selector */}
        <div className="border-t border-gray-800 pt-8 mt-12 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 lg:mb-0">
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-amber-400" />
              <select className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-1 text-sm">
                <option>Afaan Oromo</option>
                <option>English</option>
                <option>Amharic</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-amber-400" />
              <select className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-1 text-sm">
                <option>All Regions</option>
                <option>Arsi</option>
                <option>Borana</option>
                <option>Guji</option>
                <option>Jimma</option>
                <option>Wellega</option>
                <option>Shewa</option>
              </select>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            © 2024 OromoFood Hub. Preserving culture through cuisine.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
