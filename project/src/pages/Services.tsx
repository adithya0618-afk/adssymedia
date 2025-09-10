import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Globe, 
  Palette, 
  TrendingUp, 
  Eye,
  MessageSquare,
  Zap,
  ArrowRight
} from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Paid Ads Management",
      description: "We create and manage high-converting campaigns on Meta, Google, and TikTok that bring real ROI — not just clicks.",
      features: [
        "Meta (Facebook & Instagram) Advertising",
        "Google Ads & Search Marketing", 
        "TikTok Ads & Creative Strategy",
        "Campaign Optimization & A/B Testing",
        "Detailed Performance Reporting"
      ],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "Consistent, branded content and community engagement to build a strong, loyal audience.",
      features: [
        "Content Strategy & Planning",
        "Visual Brand Guidelines",
        "Community Management",
        "Influencer Partnerships",
        "Social Media Analytics"
      ],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Globe,
      title: "Website Design",
      description: "Conversion-focused websites that look good and drive leads — optimized for speed, mobile, and SEO.",
      features: [
        "Custom Website Development",
        "Mobile-First Design",
        "SEO Optimization",
        "Conversion Rate Optimization",
        "Performance Analytics Setup"
      ],
      gradient: "from-green-600 to-teal-600"
    },
    {
      icon: Palette,
      title: "Social Media Shortform Content Production",
      description: "Build an authentic, compelling brand identity that connects with your audience.",
      features: [
        "Platform-Specific Content Strategy (TikTok, Instagram Reels, YouTube Shorts)",
        "Trend-Driven Creative Concepts",
        "Captivating Copy & Captions",
        "Branded Visuals & Animations",
        "Performance Tracking & Optimization"
      ],
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Strategy Session",
      description: "We deep-dive into your business goals, target audience, and current challenges.",
      icon: MessageSquare
    },
    {
      step: "02", 
      title: "Campaign Development",
      description: "Custom strategy creation with platform-specific campaigns tailored to your goals.",
      icon: TrendingUp
    },
    {
      step: "03",
      title: "Launch & Optimize",
      description: "Continuous monitoring, testing, and optimization for maximum performance.",
      icon: Zap
    },
    {
      step: "04",
      title: "Report & Scale",
      description: "Transparent reporting and strategic scaling based on proven results.",
      icon: Eye
    }
  ];

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
              Our{' '}
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Full-service digital marketing solutions designed to scale your brand and drive measurable growth across every channel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <ArrowRight className="h-4 w-4 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <CTAButton
                  text="Get Started"
                  href="/contact"
                  variant="white"
                  className="w-full justify-center"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 4-step approach to delivering results that drive your business forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gray-900 border-2 border-blue-400 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-3xl p-12 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your Brand?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose the services that align with your goals, or let us create a custom growth strategy for your business.
            </p>
            <CTAButton
              text="Start Your Growth Journey"
              href="/contact"
              size="lg"
              variant="white"
              trackStartTrial={true} 
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;