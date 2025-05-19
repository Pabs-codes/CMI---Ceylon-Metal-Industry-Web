import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}
export const Header: React.FC<HeaderProps> = ({
  toggleTheme,
  theme
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'About',
    href: '/about'
  }, {
    name: 'Products',
    href: '/products'
  }, {
    name: 'Services',
    href: '/services'
  }, {
    name: 'Contact',
    href: '/contact'
  }];
  return <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            duration: 0.5
          }} className="flex items-center">
              <img src="/CMI_logoo.png" alt="Ceylon Metal Industry Logo" className="h-12 w-auto mr-3" />
            </motion.div>
          </Link>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <nav className="flex space-x-6">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${location.pathname === item.href ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>
                  {item.name}
                </Link>)}
            </nav>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div className="flex items-center md:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button className="ml-4 p-1 rounded-md text-gray-700 dark:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.3
      }} className="md:hidden overflow-hidden bg-white dark:bg-gray-800">
            <nav className="px-4 pb-4 space-y-2">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`block py-2 text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${location.pathname === item.href ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
            </nav>
          </motion.div>}
      </AnimatePresence>
    </header>;
};