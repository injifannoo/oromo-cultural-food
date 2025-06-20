
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Globe, Search } from 'lucide-react';
import MenuDropdown from './MenuDropdown';
import SettingsDropdown from './SettingsDropdown';
import ContributorModal from './ContributorModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContributorModalOpen, setIsContributorModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  <h1 className="text-2xl font-bold text-amber-700">OromoFood Hub</h1>
                  <p className="text-xs text-amber-600">Traditional Cuisine Heritage</p>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('recipes')} className="text-gray-700 hover:text-amber-700 transition-colors">Recipes</button>
              <button onClick={() => scrollToSection('regions')} className="text-gray-700 hover:text-amber-700 transition-colors">Regions</button>
              <button onClick={() => scrollToSection('community')} className="text-gray-700 hover:text-amber-700 transition-colors">Community</button>
              <Link to="/about" className="text-gray-700 hover:text-amber-700 transition-colors">About</Link>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <MenuDropdown />
              <button className="p-2 text-gray-600 hover:text-amber-700 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-amber-700 transition-colors">
                <Globe className="h-5 w-5" />
              </button>
              <SettingsDropdown />
              <button 
                onClick={() => setIsContributorModalOpen(true)}
                className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Contribute
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-amber-700 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <MenuDropdown />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('recipes')} className="block px-3 py-2 text-gray-700 hover:text-amber-700">Recipes</button>
                <button onClick={() => scrollToSection('regions')} className="block px-3 py-2 text-gray-700 hover:text-amber-700">Regions</button>
                <button onClick={() => scrollToSection('community')} className="block px-3 py-2 text-gray-700 hover:text-amber-700">Community</button>
                <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-amber-700">About</Link>
                <button 
                  onClick={() => setIsContributorModalOpen(true)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-700"
                >
                  Become a Contributor
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <ContributorModal 
        isOpen={isContributorModalOpen}
        onClose={() => setIsContributorModalOpen(false)}
      />
    </>
  );
};

export default Header;
