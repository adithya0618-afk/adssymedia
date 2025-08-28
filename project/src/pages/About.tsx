import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Zap } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const About = () => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Adssy Media
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a performance-driven marketing agency focused on helping ambitious brands scale through strategic advertising and creative excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Who We Are</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Adssy Media is a cutting-edge digital marketing agency that bridges the gap between creative excellence and data-driven performance. We're not just marketers—we're growth partners committed to scaling your business.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team combines years of experience in paid advertising, social media marketing, brand strategy, and conversion optimization to deliver results that matter: real growth, measurable ROI, and sustainable success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="p-4 bg-blue-600 rounded-2xl mb-4 mx-auto w-fit">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                    <p className="text-gray-300">Brands Served</p>
                  </div>
                  <div className="text-center">
                    <div className="p-4 bg-purple-600 rounded-2xl mb-4 mx-auto w-fit">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">300%</h3>
                    <p className="text-gray-300">Avg. ROI Increase</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why We Started</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We founded  Adssy Media because we saw too many businesses struggling with marketing agencies that promised the world but delivered mediocre results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center"
            >
              <div className="p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mb-6 mx-auto w-fit">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Passion for Growth</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe every business deserves marketing that actually moves the needle, not just looks pretty in reports.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center"
            >
              <div className="p-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl mb-6 mx-auto w-fit">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Results-Driven</h3>
              <p className="text-gray-300 leading-relaxed">
                We're obsessed with performance metrics and transparent reporting that shows real impact on your bottom line.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center"
            >
              <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl mb-6 mx-auto w-fit">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation First</h3>
              <p className="text-gray-300 leading-relaxed">
                We stay ahead of platform changes and industry trends to keep your campaigns competitive and effective.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-3xl p-12 backdrop-blur-sm">
              <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
                "To help businesses grow by delivering powerful, platform-specific advertising and marketing strategies that convert."
              </blockquote>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every campaign we create, every strategy we develop, and every creative we produce is designed with one goal in mind: driving measurable growth for your business.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow Together?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how  Adssy Media can help scale your brand with smarter advertising and strategic marketing.
            </p>
            <CTAButton
              text="Work With Us"
              href="/contact"
              size="lg"
              variant="white"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;