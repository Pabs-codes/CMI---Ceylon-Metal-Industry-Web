import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from 'lucide-react';
interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}
export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  toggleTheme
}) => {
  return <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle theme">
      <motion.div initial={{
      rotate: 0
    }} animate={{
      rotate: theme === 'dark' ? 360 : 0
    }} transition={{
      duration: 0.5
    }}>
        {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
      </motion.div>
    </button>;
};