import React from 'react';
import { motion } from 'framer-motion';
import { SquareIcon, CircleIcon, HexagonIcon, BoxIcon, LayersIcon } from 'lucide-react';
export const ProductsSection = () => {
  const products = [{
    title: 'Hot-Rolled Steel',
    description: 'Durable steel sheets and plates ideal for structural applications.',
    icon: <SquareIcon size={36} className="text-blue-600 dark:text-blue-400" />,
    link: '/products/hot-rolled'
  }, {
    title: 'Cold-Rolled Steel',
    description: 'Precision-finished steel with superior surface quality and dimensional accuracy.',
    icon: <CircleIcon size={36} className="text-blue-600 dark:text-blue-400" />,
    link: '/products/cold-rolled'
  }, {
    title: 'Galvanized Products',
    description: 'Corrosion-resistant steel products for extended durability in harsh environments.',
    icon: <HexagonIcon size={36} className="text-blue-600 dark:text-blue-400" />,
    link: '/products/galvanized'
  }, {
    title: 'Wire Products',
    description: 'High-quality wire products for construction, fencing, and industrial applications.',
    icon: <BoxIcon size={36} className="text-blue-600 dark:text-blue-400" />,
    link: '/products/wire'
  }, {
    title: 'Ceramic Products',
    description: 'Heat-resistant ceramic materials for specialized industrial applications.',
    icon: <LayersIcon size={36} className="text-blue-600 dark:text-blue-400" />,
    link: '/products/ceramic'
  }];
  return <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of high-quality metal products to
            meet diverse industry needs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg p-6 transition-all">
              <div className="mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {product.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {product.description}
              </p>
              <a href={product.link} className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>)}
        </div>
      </div>
    </section>;
};