import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
  theme: string;
}
export const Layout: React.FC<LayoutProps> = ({
  children,
  toggleTheme,
  theme
}) => {
  return <div className="flex flex-col min-h-screen">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <motion.main className="flex-grow" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} transition={{
      duration: 0.3
    }}>
        {children}
      </motion.main>
      <Footer />
    </div>;
};