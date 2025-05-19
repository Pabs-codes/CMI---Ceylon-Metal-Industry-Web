import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, HeadphonesIcon } from 'lucide-react';
export const WhyChooseUsSection = () => {
  const reasons = [{
    title: 'Quality Assurance',
    description: 'All our products undergo rigorous quality control processes to ensure they meet international standards.',
    icon: <CheckCircleIcon size={48} className="text-blue-600 dark:text-blue-400" />
  }, {
    title: 'On-Time Delivery',
    description: 'We understand the importance of timely delivery and strive to meet all deadlines without compromising quality.',
    icon: <ClockIcon size={48} className="text-blue-600 dark:text-blue-400" />
  }, {
    title: 'Full Support',
    description: 'Our dedicated team provides comprehensive support from initial inquiry to after-sales service.',
    icon: <HeadphonesIcon size={48} className="text-blue-600 dark:text-blue-400" />
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
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            At Ceylon Metal Industry, we differentiate ourselves through our
            commitment to excellence in every aspect of our business.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.2
        }} viewport={{
          once: true
        }} whileHover={{
          y: -10
        }} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 text-center">
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {reason.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};