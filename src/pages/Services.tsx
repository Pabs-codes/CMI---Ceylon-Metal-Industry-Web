import React from 'react';
import { motion } from 'framer-motion';
export const Services = () => {
  return <div className="w-full py-16">
      <div className="container mx-auto px-4">
        <motion.h1 initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </motion.h1>
        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2,
        duration: 0.5
      }} className="text-lg text-center mb-8">
          Full Services page content will be implemented in the next phase.
        </motion.p>
      </div>
    </div>;
};