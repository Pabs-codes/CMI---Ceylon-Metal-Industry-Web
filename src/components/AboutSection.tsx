import React from 'react';
import { motion } from 'framer-motion';
export const AboutSection = () => {
  const features = [{
    title: 'Wide Range of Products',
    description: 'Stainless steel, carbon steel, galvanized steel, aluminium products, and more.'
  }, {
    title: 'Top-Quality Materials',
    description: 'Engineered for durability, reliability, and consistent performance in every construction project.'
  }, {
    title: 'Exceptional Customer Service',
    description: 'A dedicated and professional team always ready to support you from inquiry to delivery.'
  }, {
    title: 'Competitive & Transparent Pricing',
    description: 'Fair, consistent pricing to ensure the best value for every client.'
  }];
  return <section className="py-20 bg-white dark:bg-gray-900">
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
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Ceylon Metal Industry
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              For over 7+ years, Ceylon Metal Industry has been supplying the
              finest construction materials and services across Sri Lanka. We
              offer a comprehensive range of premium products including
              stainless steel, carbon steel, galvanized steel, aluminium
              products, and more.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We proudly serve contractors, builders, and businesses who demand
              high-quality materials for their projects. With over 120+ top-tier
              products in our portfolio, we guarantee reliability, durability,
              and trusted service.
            </p>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>)}
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Professionalism
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our experienced team and skilled industry experts are committed to
              providing premium construction materials, dependable customer
              service, and competitive pricing. Our in-house specialists are
              always on hand to assist clients with tailored solutions.
            </p>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Reliability & Commitment
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Ceylon Metal Industry operates around the clock — 24/7. Whatever
              your project demands, we're ready with the perfect materials. From
              steel supplies to roofing solutions and plumbing hardware, we've
              got you covered whenever you need it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
};