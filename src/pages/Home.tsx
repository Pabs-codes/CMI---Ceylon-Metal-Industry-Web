import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ProductsSection } from '../components/ProductsSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { ContactSection } from '../components/ContactSection';
export const Home = () => {
  return <div className="w-full">
      <HeroSection />
      <div className="w-full px-4 md:px-8">
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
      </div>;
    </div>;
};