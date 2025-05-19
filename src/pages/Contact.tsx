import React from 'react';
import { motion } from 'framer-motion';
import { ContactSection } from '../components/ContactSection';
export const Contact = () => {
  return <div className="w-full">
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }}>
        <ContactSection />
      </motion.div>
    </div>;
};