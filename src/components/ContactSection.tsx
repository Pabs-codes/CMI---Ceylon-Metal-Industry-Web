import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, MailIcon, MapPinIcon, CheckCircleIcon, LoaderIcon } from 'lucide-react';
export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{
    [key: string]: string;
  }>({});
  const validateForm = () => {
    const newErrors: {
      [key: string]: string;
    } = {};
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormStatus('submitting');
      // Simulate form submission
      setTimeout(() => {
        setFormStatus('success');
        setFormState({
          name: '',
          email: '',
          message: ''
        });
        // Reset form status after 3 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      }, 1500);
    }
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
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or need more information? Get in touch with our team
            today.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`} />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`} />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea id="message" name="message" value={formState.message} onChange={handleChange} rows={5} className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`} />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              <button type="submit" disabled={formStatus === 'submitting'} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all flex items-center justify-center disabled:bg-blue-400 disabled:cursor-not-allowed">
                {formStatus === 'submitting' ? <>
                    <LoaderIcon size={20} className="animate-spin mr-2" />{' '}
                    Sending...
                  </> : formStatus === 'success' ? <>
                    <CheckCircleIcon size={20} className="mr-2" /> Message Sent
                  </> : 'Send Message'}
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPinIcon size={24} className="text-blue-600 dark:text-blue-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Address
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    123 Metal Street
                    <br />
                    Colombo 10
                    <br />
                    Sri Lanka
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon size={24} className="text-blue-600 dark:text-blue-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Phone
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    +94 11 234 5678
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    +94 77 123 4567 (Mobile)
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon size={24} className="text-blue-600 dark:text-blue-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    info@ceylonmetal.com
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    sales@ceylonmetal.com
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>Monday - Friday: 8:30 AM - 5:30 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};