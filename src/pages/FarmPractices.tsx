import React, { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";

const FarmPractices = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542189800-ffe910d48d28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNoaWNrZW58ZW58MHx8MHx8fDA%3D"
            alt="Sustainable farming practices"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our Farming Practices
          </h1>
          <p className="text-xl max-w-2xl" data-aos="fade-up" data-aos-delay="200">
            Learn about our commitment to sustainability and ethical treatment of animals.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title text-farm-forest-green" data-aos="fade-up">
              Ethical Farming for a Better World
            </h2>
            <p className="text-farm-cocoa-brown text-lg mb-6" data-aos="fade-up" data-aos-delay="100">
              At Sustainable Farm, we believe that how we raise our animals has a direct impact on 
              the quality of our food, the health of our environment, and the sustainability of our 
              agricultural system for future generations.
            </p>
            <p className="text-farm-cocoa-brown text-lg" data-aos="fade-up" data-aos-delay="200">
              Our farming practices are designed to work in harmony with nature, respecting natural 
              cycles and the innate behaviors of our animals, while regenerating the land and 
              contributing positively to our local ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Core Practices */}
      <section className="section bg-farm-light-olive">
        <div className="container mx-auto">
          <h2 className="section-title text-center text-farm-forest-green mb-12" data-aos="fade-up">
            Our Core Practices
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-serif font-bold mb-4 text-farm-forest-green">
                Pasture Rotation
              </h3>
              <p className="text-farm-cocoa-brown mb-4">
                Our chickens are moved to fresh pasture regularly in mobile coops, ensuring 
                they always have access to fresh grass, insects, and space to express their 
                natural behaviors.
              </p>
              <p className="text-farm-cocoa-brown">
                This rotation also prevents overgrazing, distributes manure evenly for natural 
                fertilization, and breaks pest cycles without chemicals.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg" data-aos="fade-left" data-aos-delay="200">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef" 
                alt="Chickens on rotating pasture" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="order-2 md:order-1" data-aos="fade-right" data-aos-delay="200">
              <img 
                src="https://images.unsplash.com/photo-1738394595307-1f2b89ace0df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3JnYW5pYyUyMGZlZWQlMjBmb3IlMjBjaGlja2Vuc3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="Organic feed for chickens" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <h3 className="text-2xl font-serif font-bold mb-4 text-farm-forest-green">
                Organic Feed & Natural Diet
              </h3>
              <p className="text-farm-cocoa-brown mb-4">
                In addition to what they forage on pasture, our chickens receive certified organic feed 
                made from non-GMO grains grown without synthetic pesticides or fertilizers.
              </p>
              <p className="text-farm-cocoa-brown">
                We supplement their diet with organic vegetables from our garden and locally sourced 
                grains to ensure optimal nutrition and flavor.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-serif font-bold mb-4 text-farm-forest-green">
                No Antibiotics or Hormones
              </h3>
              <p className="text-farm-cocoa-brown mb-4">
                We never administer antibiotics, hormones, or growth promoters to our chickens. 
                Instead, we focus on preventive health through good nutrition, clean water, 
                fresh air, and low-stress living conditions.
              </p>
              <p className="text-farm-cocoa-brown">
                In the rare case of illness, we treat affected birds naturally whenever possible, 
                and if antibiotics are absolutely necessary for humane treatment, those birds are 
                removed from our food production.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg" data-aos="fade-left" data-aos-delay="200">
              <img 
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7" 
                alt="Healthy chickens on pasture" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section bg-farm-forest-green text-white">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-12" data-aos="fade-up">
            Environmental Sustainability
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg" 
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              <div className="h-16 w-16 bg-farm-golden-yellow rounded-full text-farm-forest-green flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Carbon Sequestration
              </h3>
              <p className="text-center">
                Our rotational grazing practices help build organic matter in the soil, 
                sequestering carbon and mitigating climate change.
              </p>
            </div>
            
            <div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg" 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <div className="h-16 w-16 bg-farm-golden-yellow rounded-full text-farm-forest-green flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Water Conservation
              </h3>
              <p className="text-center">
                Our improved soil health increases water retention, reducing runoff and 
                erosion while conserving this precious resource.
              </p>
            </div>
            
            <div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg" 
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <div className="h-16 w-16 bg-farm-golden-yellow rounded-full text-farm-forest-green flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Biodiversity
              </h3>
              <p className="text-center">
                We maintain hedgerows, wildflower meadows, and natural areas to provide habitat 
                for beneficial insects, birds, and wildlife.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title text-center text-farm-forest-green" data-aos="fade-up">
            Our Certifications
          </h2>
          <p className="text-lg text-center text-farm-cocoa-brown max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
            We're proud to maintain the highest standards of sustainable and ethical farming, 
            verified by these third-party certifications:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="p-6 border border-gray-200 rounded-lg text-center" 
              data-aos="zoom-in" 
              data-aos-delay="0"
            >
              <div className="h-24 w-24 bg-farm-light-olive rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-farm-forest-green font-bold">KEBS</span>
              </div>
              <h3 className="text-xl font-bold text-farm-forest-green mb-3">Kenya Bureau of Standards (KEBS)</h3>
              <p className="text-farm-cocoa-brown">
                Certified organic by the KEBS, ensuring our farming practices meet strict national standards 
                for organic production.
              </p>
            </div>
            
            <div 
              className="p-6 border border-gray-200 rounded-lg text-center" 
              data-aos="zoom-in" 
              data-aos-delay="100"
            >
              <div className="h-24 w-24 bg-farm-light-olive rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-farm-forest-green font-bold">AWS</span>
              </div>
              <h3 className="text-xl font-bold text-farm-forest-green mb-3">Animal Welfare Standards</h3>
              <p className="text-farm-cocoa-brown">
                Certified by A Greener World for meeting the highest animal welfare in poultry production.
              </p>
            </div>
            
            <div 
              className="p-6 border border-gray-200 rounded-lg text-center" 
              data-aos="zoom-in" 
              data-aos-delay="200"
            >
              <div className="h-24 w-24 bg-farm-light-olive rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-farm-forest-green font-bold">NBA</span>
              </div>
              <h3 className="text-xl font-bold text-farm-forest-green mb-3">NBA Verified</h3>
              <p className="text-farm-cocoa-brown">
                Verified by the National Biosafety Authority, ensuring all our feed and products are free from 
                genetically modified organisms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section bg-farm-terracotta text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right">
              <h2 className="section-title">
                Farm Transparency
              </h2>
              <p className="text-lg mb-6">
                We believe in complete transparency about our farming practices. We invite our customers 
                to see firsthand how we raise our chickens and the positive impact our methods have 
                on the animals and the land.
              </p>
              <p className="text-lg mb-6">
                Join us for a guided farm tour every Saturday from 10am to 2pm, where you can:
              </p>
              <ul className="list-disc list-inside mb-6">
                <li className="mb-2">See our pastured chickens in their natural environment</li>
                <li className="mb-2">Learn about our rotational grazing system</li>
                <li className="mb-2">Understand our organic feed program</li>
                <li>Ask questions and connect with our farming team</li>
              </ul>
              <button 
                className="bg-white text-farm-terracotta py-2 px-6 rounded-lg transition-all duration-300 hover:bg-farm-golden-yellow hover:text-white hover:-translate-y-0.5 hover:shadow-md font-medium"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                Book a Farm Tour
              </button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg" data-aos="fade-left" data-aos-delay="200">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef" 
                alt="Transparent farming practices" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FarmPractices;