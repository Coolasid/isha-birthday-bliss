
import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import PhotoGallery from '@/components/PhotoGallery';
import WishesSection from '@/components/WishesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <PhotoGallery />
      <WishesSection />
      <Footer />
    </div>
  );
};

export default Index;
