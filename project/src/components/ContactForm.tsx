import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 🔗 GOOGLE SHEETS INTEGRATION POINT
    // Replace this entire try-catch block with your Google Sheets API call
    // 
    // OPTION 1: Google Sheets API
    // const response = await fetch('/api/submit-form', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     ...formData,
    //     timestamp: new Date().toISOString()
    //   })
    // });
    //
    // OPTION 2: SheetDB.io
    // const response = await fetch('https://sheetdb.io/api/v1/YOUR_SHEET_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     Name: formData.name,
    //     Email: formData.email,
    //     'Business Name': formData.businessName,
    //     Message: formData.message,
    //     Timestamp: new Date().toLocaleString()
    //   })
    // });
    //
    // OPTION 3: Zapier Webhook
    // const response = await fetch('YOUR_ZAPIER_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    //
    // After successful submission:
    // if (response.ok) {
    //   setIsSubmitted(true);
    //   setFormData({ name: '', email: '', businessName: '', message: '' });
    // } else {
    //   throw new Error('Submission failed');
    // }
    
    // 🚨 REMOVE THIS SIMULATION CODE AFTER ADDING REAL INTEGRATION


   try {
  const response = await fetch("https://sheetdb.io/api/v1/3gjyjczeopw10", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: [
        {
          Name: formData.name,
          Email: formData.email,
          "Business Name": formData.businessName,
          Message: formData.message,
          Timestamp: new Date().toLocaleString()
        }
      ]
    })
  });

  const result = await response.json();  // 👈 capture response
  console.log("📌 SheetDB Response:", result);

  if (response.ok) {
    setIsSubmitted(true);
    setFormData({ name: "", email: "", businessName: "", message: "" });
  } else {
    console.error("❌ Submission failed:", result);
    alert("Something went wrong while submitting. Please try again.");
  }
} catch (error) {
  console.error("🔥 Fetch error:", error);
  alert("Something went wrong while submitting. Please try again.");
} finally {
  setIsSubmitting(false);
}
};

  if (isSubmitted) {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Thanks for reaching out!</h3>
        <p className="text-gray-300">We'll get back to you shortly with next steps.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-blue-400 hover:text-blue-300 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Let's Grow Together</h2>
        <p className="text-gray-300">Ready to scale your brand? Tell us about your goals.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-2">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
            placeholder="Your Company Inc."
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            What do you need help with? 
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
            placeholder="Tell us about your goals, current challenges, or specific services you're interested in..."
          />
        </div>

        <button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-white text-black font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
>
  {isSubmitting ? (
    <div className="flex items-center">
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
      Sending...
    </div>
  ) : (
    <>
      Send Message
      <Send className="ml-2 h-5 w-5 text-black transition-transform duration-200 group-hover:translate-x-1" />
    </>
  )}
</button>

      </form>
    </div>
  );
};

export default ContactForm;
