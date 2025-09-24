import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "adssymedia@gmail.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Schedule a Call",
      details: "Book a free strategy session",
      subtitle: "30-minute consultation"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 hours",
      subtitle: "Usually much faster!"
    },
    {
      icon: MapPin,
      title: "Based In",
      details: "Global Remote Team",
      subtitle: "Serving clients worldwide"
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
              Let's{' '}
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Grow Together
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to scale your brand with smarter advertising? Get in touch and let's discuss how ADSSY MEDIA can drive real growth for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-gray-300 font-medium mb-1">{info.details}</p>
                <p className="text-gray-400 text-sm">{info.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8 }}
            initial={{ opacity: 1, y: 0 }}
  animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What makes ADSSY MEDIA different?",
                answer: "We focus on ROI-driven campaigns with transparent reporting. As a founding client, you get direct access to our senior team and premium service at startup-friendly rates."
              },
              {
                question: "How quickly can we see results?",
                answer: "Most clients start seeing improvements within 2-4 weeks. Full optimization typically takes 60-90 days as we gather data and refine targeting."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We're actively seeking founding clients of all sizes. Small to medium businesses often see the biggest impact from our focused approach."
              },
              {
                question: "What's included in the founding client offer?",
                answer: "50% off your first 3 months, direct access to founders, priority support, and detailed case study documentation of your growth journey."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8, delay: index * 0.1 }}
                initial={{ opacity: 1, y: 0 }}
  animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-3xl p-12 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Don't let another month pass without optimized marketing. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="mailto:adssymedia@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg transition-all duration-200 hover:bg-gray-100 hover:scale-105"
                
              >
                <Mail className="mr-2 h-5 w-5 text-black"
                 />
                Email Us Directly
              </a>
              {/* <p className="text-gray-400">or fill out the form above</p> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;