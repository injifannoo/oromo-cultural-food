
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='3'/%3E%3Ccircle cx='53' cy='7' r='3'/%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='7' cy='53' r='3'/%3E%3Ccircle cx='53' cy='53' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
            Preserving Culinary Heritage Since Ancient Times
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Authentic
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">
              Oromo Cuisine
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore traditional recipes passed down through generations. Learn the art of authentic Oromo cooking 
            with our comprehensive video tutorials and cultural stories.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('recipes')}
              className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-amber-700 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <BookOpen className="h-6 w-6 mr-2" />
              Explore Recipes
            </button>
            
            <button 
              onClick={() => scrollToSection('recipes')}
              className="border-2 border-amber-600 text-amber-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-amber-600 hover:text-white transition-all flex items-center justify-center"
            >
              <Play className="h-6 w-6 mr-2" />
              Watch Tutorials
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-gray-600">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-r from-amber-400 to-red-400 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm"><strong>2,500+</strong> home cooks</span>
            </div>
            
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-amber-600" />
              <span className="text-sm"><strong>15,000+</strong> recipes shared</span>
            </div>
            
            <div className="flex items-center">
              <div className="flex text-amber-500 mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L0 6.91l6.564-.954L10 0l3.436 5.956L20 6.91l-5.245 4.635L15.878 18z"/>
                  </svg>
                ))}
              </div>
              <span className="text-sm"><strong>4.9/5</strong> rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-600 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
