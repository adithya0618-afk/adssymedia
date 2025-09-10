// 




import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap, Users, ArrowRight } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { icon: Target, title: "Paid Ads", description: "Meta, Google, TikTok campaigns that drive real ROI" },
    { icon: Users, title: "Social Media", description: "Build loyal audiences with strategic content" },
    { icon: TrendingUp, title: "Brand Strategy", description: "Authentic identity that connects with customers" },
    { icon: Zap, title: "Website Design", description: "Conversion-focused sites that generate leads" }
  ];

  const features = [
    { title: "ROI-Focused Campaigns", description: "Every dollar spent is tracked, optimized, and designed to deliver measurable results." },
    { title: "Creative Meets Strategy", description: "Beautiful designs backed by data-driven strategy that actually converts." },
    { title: "Fast Communication", description: "Quick turnaround times and transparent reporting keep you in the loop." },
    { title: "Data-Driven Decisions", description: "We let the numbers guide our strategy for consistent growth." }
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-6xl font-bold font-montserrat mb-4 leading-tight">
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Scaling Brands with Smarter Ads
              </span>{' '}
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                and Strategy
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed
                  bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              We help ambitious brands grow through paid advertising, performance marketing, and creative digital strategy.
            </p>

            {/* ✅ Updated CTAButton to track Meta Pixel StartTrial */}
            <CTAButton
              text="Book a Free Strategy Call"
              onClick={scrollToContact}
              size="lg"
              variant="white"
              trackStartTrial={true} // ✅ Fire StartTrial event
            />
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We Do Best
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Full-service digital marketing that drives growth across every channel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-black transition-all duration-300 group cursor-pointer"
              >
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ADSSY MEDIA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose ADSSY MEDIA
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another agency. We're your growth partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start space-x-4 group"
              >
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mt-1 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-16">
            {/* ✅ Updated CTAButton to track Meta Pixel StartTrial */}
            <CTAButton text="Let's Talk Growth" onClick={scrollToContact} size="lg" variant="white" trackStartTrial={true} />
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
