
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Download, Users, MapPin, BookOpen, Info } from 'lucide-react';

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const downloadPDF = () => {
    // Create a simple PDF content
    const pdfContent = `
      OromoFood Hub - Recipe Collection
      
      Featured Recipes:
      
      1. Traditional Injera (Shewa Region)
         - Teff flour, Water, Fermentation
         - Prep time: 3 days
         
      2. Chuko (Arsi Region)
         - Roasted barley, Spices
         - Prep time: 2 hours
         
      3. Marqaa (Arsi Region)
         - Fresh milk, Traditional butter
         - Prep time: 30 minutes
         
      Visit OromoFood Hub for complete recipes with videos and instructions!
    `;
    
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'OromoFood-Recipes.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setIsOpen(false);
  };

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('/#')) {
      // Handle hash navigation
      const sectionId = href.substring(2); // Remove /#
      if (location.pathname !== '/') {
        // Navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      // Regular navigation
      navigate(href);
    }
  };

  const menuItems = [
    { icon: BookOpen, label: 'All Recipes', href: '/#recipes' },
    { icon: MapPin, label: 'Explore Regions', href: '/#regions' },
    { icon: Users, label: 'Community', href: '/#community' },
    { icon: Info, label: 'About Us', href: '/about' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-amber-700 transition-colors"
      >
        <Menu className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.href)}
                className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors text-left"
              >
                <item.icon className="h-4 w-4 mr-3" />
                {item.label}
              </button>
            ))}
            
            <div className="border-t border-gray-100 my-2"></div>
            
            <button
              onClick={downloadPDF}
              className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
            >
              <Download className="h-4 w-4 mr-3" />
              Download Recipe Guide
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
