import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Zap } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const About = () => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-40 bg-black bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Adssy Media is a <strong>performance-driven digital marketing agency</strong> focused on helping ambitious brands grow with strategic <strong>advertising campaigns, SEO, PPC, and creative marketing solutions</strong>.
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
                Adssy Media is a <strong>cutting-edge advertising agency</strong> that bridges the gap between creative excellence and <strong>data-driven performance marketing</strong>. We're not just marketers—we're <strong>growth partners</strong> committed to scaling your business.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team brings expertise in <strong>paid advertising, social media marketing, SEO, brand strategy, and conversion optimization</strong> to deliver measurable ROI and sustainable success.
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
                    <p className="text-gray-300">Brands Served Globally</p>
                  </div>
                  <div className="text-center">
                    <div className="p-4 bg-purple-600 rounded-2xl mb-4 mx-auto w-fit">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">300%</h3>
                    <p className="text-gray-300">Avg. ROI Increase from <strong>marketing campaigns</strong></p>
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
              We founded Adssy Media because too many businesses struggled with <strong>marketing agencies</strong> that promised the world but delivered mediocre results. We set out to be different: an <strong>ROI-focused digital marketing company</strong>.
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
              <h3 className="text-xl font-semibold text-white mb-4">Passion for Business Growth</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe every business deserves <strong>digital marketing strategies</strong> that actually drive conversions, not just vanity metrics.
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
              <h3 className="text-xl font-semibold text-white mb-4">Results-Driven Marketing</h3>
              <p className="text-gray-300 leading-relaxed">
                We're obsessed with <strong>performance metrics</strong> and transparent reporting that show real <strong>business impact</strong>.
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
                We stay ahead of <strong>social media trends</strong>, platform updates, and industry shifts to keep your campaigns competitive.
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
                "To help businesses grow by delivering powerful, platform-specific <strong>advertising and marketing strategies</strong> that convert."
              </blockquote>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every campaign, strategy, and creative asset we produce is built with one goal: <strong>driving measurable growth through digital marketing</strong>.
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow with a Top Marketing Agency?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how <strong>Adssy Media</strong> can help scale your brand through smarter <strong>advertising, SEO, PPC, and digital marketing strategies</strong>.
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
