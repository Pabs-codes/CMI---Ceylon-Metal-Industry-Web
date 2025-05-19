import React, { Children } from 'react';
import { motion } from 'framer-motion';
export const HeroSection = () => {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:500px_500px] animate-gradient"></div>
        <div className="absolute inset-0 bg-gray-900/60"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center">
          <motion.h1 variants={item} className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Trusted Partner in <br />
            <span className="text-blue-400">Metal Trading & Fabrication</span>
          </motion.h1>
          <motion.p variants={item} className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Delivering premium quality metal products and services across Sri
            Lanka for over 7+ years.
          </motion.p>
          <motion.div variants={item}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-transform hover:scale-105" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              Explore Our Products
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};