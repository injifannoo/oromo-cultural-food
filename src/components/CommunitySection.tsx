
import React, { useState } from 'react';
import { Users, Heart, Star, MessageCircle, Camera, Award } from 'lucide-react';
import ContributorModal from './ContributorModal';

const CommunitySection = () => {
  const [isContributorModalOpen, setIsContributorModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    { icon: Users, value: '2,500+', label: 'Active Cooks' },
    { icon: Heart, value: '15K+', label: 'Recipes Shared' },
    { icon: Star, value: '98%', label: 'Satisfaction Rate' },
    { icon: MessageCircle, value: '50K+', label: 'Comments' }
  ];

  const testimonials = [
    {
      name: 'Almaz Tadesse',
      role: 'Traditional Cook',
      location: 'Arsi Region',
      comment: 'This platform helped me share my grandmother\'s recipes with the world. The community feedback has been incredible!',
      avatar: '👩🏾‍🍳'
    },
    {
      name: 'Bekele Megersa',
      role: 'Food Blogger',
      location: 'Jimma Region',
      comment: 'I\'ve discovered so many authentic Oromo dishes I never knew existed. The video tutorials are fantastic!',
      avatar: '👨🏾‍🍳'
    },
    {
      name: 'Hanna Gemechu',
      role: 'Cultural Preservationist',
      location: 'Wellega Region',
      comment: 'Finally, a place where our culinary heritage is properly documented and celebrated. Thank you for this amazing platform!',
      avatar: '👵🏾'
    }
  ];

  return (
    <>
      <section id="community" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Community Stats */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our <span className="text-amber-600">Community</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Connect with fellow food enthusiasts, share your family recipes, and help preserve 
              the rich culinary traditions of Oromo culture for future generations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Community Says</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                  <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-amber-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-amber-600 to-red-600 rounded-3xl p-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Ready to Share Your Recipes?</h3>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of passionate cooks preserving and sharing authentic Oromo cuisine. 
                Your family recipes deserve to be celebrated!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsContributorModalOpen(true)}
                  className="bg-white text-amber-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Become a Contributor
                </button>
                <button 
                  onClick={() => scrollToSection('community')}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-700 transition-colors flex items-center justify-center"
                >
                  <Users className="h-5 w-5 mr-2" />
                  Join Our Community
                </button>
              </div>
              
              <div className="mt-8 flex justify-center items-center space-x-8 text-sm opacity-75">
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  Featured Contributors
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Community Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContributorModal 
        isOpen={isContributorModalOpen}
        onClose={() => setIsContributorModalOpen(false)}
      />
    </>
  );
};

export default CommunitySection;
