import React from 'react';
import { motion } from 'framer-motion';
import {
  Facebook, Twitter, Instagram, Youtube, Linkedin,
  Mail, Phone, MapPin, ChevronRight
} from 'lucide-react';
import { EXAM_CATEGORIES } from '../data/examCategories';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Refund Policy', href: '#' },
  ];

  const resources = [
    { name: 'Free Mock Tests', href: '#' },
    { name: 'Current Affairs', href: '#' },
    { name: 'Study Materials', href: '#' },
    { name: 'Previous Year Papers', href: '#' },
    { name: 'Exam Calendar 2025', href: '#' },
    { name: 'Syllabus', href: '#' },
    { name: 'Exam Notifications', href: '#' },
    { name: 'Success Stories', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Exam Links Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-grotesk font-bold text-xl mb-8 text-center"
          >
            Browse Exams by Category
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {EXAM_CATEGORIES.slice(0, 8).map((category, catIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.05 }}
              >
                <h4 className="font-semibold text-white/90 mb-3 flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: getCategoryColor(category.color) }}
                  />
                  {category.name}
                </h4>
                <ul className="space-y-2">
                  {category.exams.slice(0, 5).map((exam) => (
                    <li key={exam.id}>
                      <a
                        href="#"
                        className="text-sm text-gray-400 hover:text-white hover:underline transition-colors"
                      >
                        {exam.name}
                      </a>
                    </li>
                  ))}
                  {category.exams.length > 5 && (
                    <li>
                      <a
                        href="#"
                        className="text-sm text-primary hover:text-primary-dark flex items-center gap-1"
                      >
                        View all {category.exams.length} exams
                        <ChevronRight className="w-3 h-3" />
                      </a>
                    </li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg font-grotesk">R</span>
              </div>
              <span className="font-grotesk font-bold text-xl">
                Raj<span className="text-primary">Pariksha</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              India's most comprehensive exam preparation platform. Crack any government
              exam with AI-powered mock tests and detailed analytics.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:support@rajpariksha.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                support@rajpariksha.com
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +91 12345 67890
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get exam notifications, study tips, and current affairs directly in your inbox.
            </p>

            {/* Newsletter Form */}
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm focus:outline-none focus:border-primary text-white placeholder-gray-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2.5 bg-primary text-white rounded-xl font-medium text-sm"
              >
                Subscribe
              </motion.button>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-400 mb-3">Follow us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 133, 255, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 RajPariksha. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const getCategoryColor = (colorClass: string): string => {
  const colors: Record<string, string> = {
    'cat-banking': '#2563EB',
    'cat-ssc': '#DC2626',
    'cat-railways': '#059669',
    'cat-upsc': '#4F46E5',
    'cat-defence': '#7C3AED',
    'cat-teaching': '#F59E0B',
    'cat-psc': '#0891B2',
    'cat-police': '#64748B',
  };
  return colors[colorClass] || '#0085FF';
};

export default Footer;
