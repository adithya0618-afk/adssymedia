import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye,
  Star,
  ArrowUpRight,
  Play
} from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Portfolio = () => {
  const stats = [
    {
      icon: TrendingUp,
      metric: "30%",
      label: "Average ROI Increase",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Users,
      metric: "50K+",
      label: "Leads Generated",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: DollarSign,
      metric: "$2M+",
      label: "Revenue Driven",
      gradient: "from-green-600 to-teal-600"
    },
    {
      icon: Eye,
      metric: "10M+",
      label: "Impressions Delivered",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const caseStudies = [
    {
      industry: "E-commerce",
      title: "Fashion Brand Scale-Up",
      description: "Transformed a local fashion brand into a multi-six-figure business through strategic Meta ads and conversion optimization.",
      results: [
        "450% increase in monthly revenue",
        "2.8x improvement in ROAS",
        "65% reduction in CPA"
      ],
      image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Meta Ads", "E-commerce", "CRO"]
    },
    {
      industry: "SaaS",
      title: "Tech Startup Growth",
      description: "Helped a B2B SaaS company acquire 1000+ qualified leads in 6 months through targeted LinkedIn and Google campaigns.",
      results: [
        "1000+ qualified leads",
        "40% increase in demo bookings",
        "25% improvement in lead quality"
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Google Ads", "LinkedIn", "Lead Gen"]
    },
    {
      industry: "Healthcare",
      title: "Medical Practice Growth",
      description: "Increased patient appointments by 300% for a dental practice through local SEO and targeted Google Ads campaigns.",
      results: [
        "300% increase in appointments",
        "150% boost in website traffic",
        "45% reduction in cost per lead"
      ],
      image: "https://images.pexels.com/photos/4113355/pexels-photo-4113355.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Local SEO", "Google Ads", "Healthcare"]
    },
    {
      industry: "Restaurant",
      title: "Restaurant Chain Expansion",
      description: "Drove 500+ new customers monthly for a restaurant chain through creative TikTok campaigns and social media marketing.",
      results: [
        "500+ new customers/month",
        "180% increase in social engagement",
        "60% boost in online orders"
      ],
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["TikTok Ads", "Social Media", "F&B"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Fashion Forward Co.",
      text: "ADSSY MEDIA transformed our online presence. Our revenue increased by 450% in just 6 months!",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "TechStart Solutions",
      text: "The team's strategic approach to lead generation delivered exactly what we needed. Highly recommend!",
      rating: 5
    },
    {
      name: "Dr. Amanda Lee",
      company: "Smile Dental Practice",
      text: "Professional, results-driven, and incredibly responsive. Our patient bookings have tripled!",
      rating: 5
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
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              We're onboarding our first 5 clients — partner with us and get agency-quality work at founder rates.
            </p>
            {/* <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg text-blue-300 font-medium">
                🚀 Early Bird Special: 50% off first 3 months for founding clients
              </p>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Results That Matter</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here's what we've achieved for brands across different industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <div className={`p-4 bg-gradient-to-r ${stat.gradient} rounded-2xl mb-6 mx-auto w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.metric}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                      <Play className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{study.description}</p>

                  <div className="space-y-2 mb-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-green-400 text-sm">
                        <ArrowUpRight className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">What Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it — hear from the businesses we've helped grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-3xl p-12 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Be Our Next Success Story</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our founding clients and get premium marketing services at startup-friendly rates. Limited spots available.
            </p>
            <CTAButton
              text="Be Our Next Case Study"
              href="/contact"
              size="lg"
              variant="white"
            />
            <p className="text-sm text-gray-400 mt-4">
              Only 3 founding client spots remaining
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;