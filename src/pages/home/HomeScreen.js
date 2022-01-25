import React from 'react';

// import HeroSection from './HeroSection';
import VideoSection from './VideoSection';
import GallerySection from './GallerySection';
import AboutSectin from './AboutSection';
import FaqSection from './FaqSection';
import ItemSection from './ItemSection';

const HomeScreen = () => {
  return (
    <div className="position-relative">
      {/* <HeroSection /> */}
      <VideoSection />
      <GallerySection />
      <AboutSectin />
      <FaqSection />
      <ItemSection />
      <div className="bg-black" style={{ minHeight: "66vh" }} />
    </div>
  );
};

export default HomeScreen;