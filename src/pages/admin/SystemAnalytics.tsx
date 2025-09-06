import React from 'react';
import { motion } from 'framer-motion';

export const SystemAnalytics: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold text-gray-900">System Analytics</h1>
      <p className="text-gray-600">
        Comprehensive system-wide analytics and insights
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1525228.6056423306!2d85.11279058219459!3d23.59846010536479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398b2386df480857%3A0x62c5b809eee29004!2sJharkhand!5e0!3m2!1sen!2sin!4v1757146026368!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-500">Analytics dashboard coming soon...</p>
      </div>
    </motion.div>
  );
};
