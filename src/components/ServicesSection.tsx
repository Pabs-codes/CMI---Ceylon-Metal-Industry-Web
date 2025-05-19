import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShipIcon, PackageIcon, FactoryIcon, BriefcaseIcon } from 'lucide-react';
export const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const services = [{
    title: 'Import Raw Materials',
    description: 'We source and import high-quality raw materials from trusted global suppliers.',
    icon: <ShipIcon size={36} className="text-blue-600 dark:text-blue-400" />,
    details: 'Our extensive network of international suppliers allows us to import premium raw materials at competitive prices. We handle all logistics, customs clearance, and quality control processes to ensure seamless delivery to your facility.'
  }, {
    title: 'Import Finished Goods',
    description: 'Access a wide range of finished metal products through our import services.',
    icon: <PackageIcon size={36} className="text-blue-600 dark:text-blue-400" />,
    details: 'We offer a comprehensive range of imported finished metal goods that meet international quality standards. Our efficient supply chain ensures timely delivery and competitive pricing for all your metal product needs.'
  }, {
    title: 'Fabrication & Processing',
    description: 'Custom metal fabrication services using state-of-the-art equipment and techniques.',
    icon: <FactoryIcon size={36} className="text-blue-600 dark:text-blue-400" />,
    details: 'Our skilled team provides precision metal fabrication services including cutting, bending, welding, and finishing. We utilize advanced machinery and techniques to deliver custom metal components that meet your exact specifications and quality requirements.'
  }, {
    title: 'Indenting & Agency',
    description: 'We represent leading international metal manufacturers in the Sri Lankan market.',
    icon: <BriefcaseIcon size={36} className="text-blue-600 dark:text-blue-400" />,
    details: 'As authorized agents for several global metal manufacturers, we provide local access to international brands and products. Our indenting services offer competitive pricing, technical support, and reliable after-sales service for all represented product lines.'
  }];
  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };
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
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive metal trading and fabrication services to
            meet your specific needs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => <motion.div key={index} initial={{
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
        }} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {service.description}
                    </p>
                  </div>
                </div>
                <button onClick={() => toggleService(index)} className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center">
                  {expandedService === index ? 'Hide Details' : 'Learn Details'}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform ${expandedService === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <AnimatePresence>
                {expandedService === index && <motion.div initial={{
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
            }} className="bg-gray-100 dark:bg-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-gray-700 dark:text-gray-300">
                      {service.details}
                    </p>
                  </motion.div>}
              </AnimatePresence>
            </motion.div>)}
        </div>
      </div>
    </section>;
};