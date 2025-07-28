
import React from 'react';
import HeroSection from './components/HeroSection'; 
import TrendingItems from './components/TrendingItems';
import RecommendedSection from './components/RecommendedSection';
import PopularProducts from './components/PopularProducts'; 
import FlashSaleBanner from './components/FlashSaleBanner';
import FeaturedProducts from './components/FeaturedProducts';
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrendingItems />
      <RecommendedSection />
      <PopularProducts />
      <FlashSaleBanner />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;