
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RecipeShowcase from '../components/RecipeShowcase';
import RegionalMap from '../components/RegionalMap';
import CommunitySection from '../components/CommunitySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <RecipeShowcase />
      <RegionalMap />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
