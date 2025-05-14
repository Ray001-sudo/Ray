import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: Record<string, string> = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    // Subject validation
    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
      isValid = false;
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send this data to your backend
      console.log("Form submitted:", formData);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-72 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589050593767-a754dd738587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoaWNrZW58ZW58MHx8MHx8fDA%3D"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We'd love to hear from you! Whether you have questions about our products or 
            want to learn more about our farm, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-farm-soft-taupe">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up">
              <div className="mx-auto w-16 h-16 bg-farm-terracotta rounded-full flex items-center justify-center mb-4" data-aos="zoom-in">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-farm-forest-green" data-aos="fade-up" data-aos-delay="100">
                Phone
              </h3>
              <p className="text-farm-cocoa-brown mb-2" data-aos="fade-up" data-aos-delay="150">Weekdays 9am - 5pm</p>
              <a 
                href="tel:+11234567890" 
                className="text-lg font-medium text-farm-terracotta hover:underline"
                data-aos="fade-up" data-aos-delay="200"
              >
                0707253574
              </a>
            </div>
            
            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="50">
              <div className="mx-auto w-16 h-16 bg-farm-forest-green rounded-full flex items-center justify-center mb-4" data-aos="zoom-in" data-aos-delay="50">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-farm-forest-green" data-aos="fade-up" data-aos-delay="150">
                Email
              </h3>
              <p className="text-farm-cocoa-brown mb-2" data-aos="fade-up" data-aos-delay="200">We'll respond within 24 hours</p>
              <a 
                href="mailto:info@sustainablefarm.com" 
                className="text-lg font-medium text-farm-terracotta hover:underline"
                data-aos="fade-up" data-aos-delay="250"
              >
                bensonandako26@gmail.com
              </a>
            </div>
            
            {/* Location */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="mx-auto w-16 h-16 bg-farm-golden-yellow rounded-full flex items-center justify-center mb-4" data-aos="zoom-in" data-aos-delay="100">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-farm-forest-green" data-aos="fade-up" data-aos-delay="200">
                Location
              </h3>
              <p className="text-farm-cocoa-brown mb-2" data-aos="fade-up" data-aos-delay="250">Farm store hours: Sat-Sun 10am - 4pm</p>
              <address className="text-lg font-medium text-farm-terracotta not-italic" data-aos="fade-up" data-aos-delay="300">
                123 Farm Road<br />
                Sustainable Valley, SV 12345
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="bg-farm-light-olive p-6 md:p-8 rounded-lg shadow-md" data-aos="fade-right">
              <h2 className="text-2xl font-serif font-bold mb-6 text-farm-forest-green">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div data-aos="fade-up">
                  <label htmlFor="name" className="block text-farm-forest-green font-medium mb-1">
                    Name <span className="text-farm-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-farm-forest-green ${
                      errors.name ? "border-farm-terracotta" : "border-gray-300"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-farm-terracotta text-sm">{errors.name}</p>}
                </div>
                
                {/* Email */}
                <div data-aos="fade-up" data-aos-delay="50">
                  <label htmlFor="email" className="block text-farm-forest-green font-medium mb-1">
                    Email <span className="text-farm-terracotta">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-farm-forest-green ${
                      errors.email ? "border-farm-terracotta" : "border-gray-300"
                    }`}
                    placeholder="Your email address"
                  />
                  {errors.email && <p className="mt-1 text-farm-terracotta text-sm">{errors.email}</p>}
                </div>
                
                {/* Phone (optional) */}
                <div data-aos="fade-up" data-aos-delay="100">
                  <label htmlFor="phone" className="block text-farm-forest-green font-medium mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-farm-forest-green"
                    placeholder="Your phone number"
                  />
                </div>
                
                {/* Subject */}
                <div data-aos="fade-up" data-aos-delay="150">
                  <label htmlFor="subject" className="block text-farm-forest-green font-medium mb-1">
                    Subject <span className="text-farm-terracotta">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-farm-forest-green ${
                      errors.subject ? "border-farm-terracotta" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="products">Product Information</option>
                    <option value="wholesale">Wholesale Orders</option>
                    <option value="tours">Farm Tours</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="mt-1 text-farm-terracotta text-sm">{errors.subject}</p>}
                </div>
                
                {/* Message */}
                <div data-aos="fade-up" data-aos-delay="200">
                  <label htmlFor="message" className="block text-farm-forest-green font-medium mb-1">
                    Message <span className="text-farm-terracotta">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-farm-forest-green ${
                      errors.message ? "border-farm-terracotta" : "border-gray-300"
                    }`}
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && <p className="mt-1 text-farm-terracotta text-sm">{errors.message}</p>}
                </div>
                
                {/* Submit Button */}
                <button type="submit" className="btn-primary w-full py-3" data-aos="fade-up" data-aos-delay="250">
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-left">
              <div className="h-96">
                {/* In a real implementation, this would be a Google Maps embed */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-16 w-16 mx-auto text-farm-forest-green mb-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      data-aos="zoom-in"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                    <p className="text-farm-forest-green text-lg font-medium" data-aos="fade-up">
                      Interactive Map Would Be Here
                    </p>
                    <p className="text-gray-600 mt-2" data-aos="fade-up" data-aos-delay="50">
                      123 Farm Road, Sustainable Valley, SV 12345
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary inline-block mt-4"
                      data-aos="fade-up" data-aos-delay="100"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="section bg-farm-forest-green text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right">
              <h2 className="section-title">
                Visit Our Farm
              </h2>
              <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="50">
                We welcome visitors to our farm store where you can purchase our products directly 
                and see where your food comes from.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start" data-aos="fade-up" data-aos-delay="100">
                  <div className="bg-farm-terracotta rounded-full p-2 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Farm Store Hours</h3>
                    <p>Saturday & Sunday: 10am - 4pm</p>
                    <p>Weekdays: By appointment only</p>
                  </div>
                </div>
                
                <div className="flex items-start" data-aos="fade-up" data-aos-delay="150">
                  <div className="bg-farm-terracotta rounded-full p-2 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Farm Tours</h3>
                    <p>Guided tours available every Saturday from 10am - 2pm</p>
                    <p>ksh100 per person (free for children under 5)</p>
                    <p>Reservations required</p>
                  </div>
                </div>
              </div>
              <button 
                className="bg-white text-farm-forest-green py-2 px-6 rounded-lg transition-all duration-300 hover:bg-farm-golden-yellow hover:text-white hover:-translate-y-0.5 hover:shadow-md font-medium"
                data-aos="fade-up" data-aos-delay="200"
              >
                Book a Tour
              </button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg" data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1684415380830-e76371b1e601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcmdlJTIwZ3JlZW4lMjBwYXN0dXJlfGVufDB8fDB8fHww" 
                alt="Farm store" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title text-center text-farm-forest-green" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto mt-8">
            <div className="mb-6 border-b border-gray-200 pb-4" data-aos="fade-up" data-aos-delay="50">
              <h3 className="text-xl font-bold mb-2 text-farm-forest-green">
                Do you ship your products?
              </h3>
              <p className="text-farm-cocoa-brown">
                Yes, we ship throughout the continental United States using overnight shipping 
                to ensure freshness. Shipping rates are calculated at checkout based on your location.
              </p>
            </div>
            
            <div className="mb-6 border-b border-gray-200 pb-4" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-2 text-farm-forest-green">
                Can I place an order for pickup?
              </h3>
              <p className="text-farm-cocoa-brown">
                Absolutely! You can place an order through our website and select "Farm Pickup" 
                at checkout. We'll have your order ready for you to pick up at our farm store 
                during business hours.
              </p>
            </div>
            
            <div className="mb-6 border-b border-gray-200 pb-4" data-aos="fade-up" data-aos-delay="150">
              <h3 className="text-xl font-bold mb-2 text-farm-forest-green">
                Do you offer wholesale pricing?
              </h3>
              <p className="text-farm-cocoa-brown">
                Yes, we offer wholesale pricing for restaurants, grocery stores, and buying clubs. 
                Please contact us directly at wholesale@sustainablefarm.com for our current 
                wholesale price list and minimum order requirements.
              </p>
            </div>
            
            <div className="mb-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-2 text-farm-forest-green">
                Are your chickens certified organic?
              </h3>
              <p className="text-farm-cocoa-brown">
                Yes, our farm is NBA Certified Organic. Our chickens are raised on organic feed 
                and pasture, without antibiotics, hormones, or GMOs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;