import React, { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Changed `once: true` to `false` for up/down animation
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center" data-aos="fade-in">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1588433548732-cfaca6a7022f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNoaWNrZW58ZW58MHx8MHx8fDA%3D"
            alt="Sustainable farm landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6" data-aos="fade-up">
            Our Story
          </h1>
          <p className="text-xl max-w-2xl" data-aos="fade-up" data-aos-delay="200">
            Learn about our farm's journey, our values, and our commitment to sustainable farming practices.
          </p>
        </div>
      </section>

      {/* Our Beginning */}
      <section className="section bg-white" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right">
              <h2 className="section-title text-farm-forest-green">Our Beginning</h2>
              <p className="text-farm-cocoa-brown text-lg mb-4">
                Sustainable Farm began in 2021 with a simple vision: to raise chickens the way 
                nature intended, while being stewards of the land for future generations.
              </p>
              <p className="text-farm-cocoa-brown text-lg mb-4">
                Founded by the Owade family, our farm started with just 2 acres and 50 chickens. 
                What began as a small family project quickly grew into a passionate mission to 
                provide the community with ethically raised poultry.
              </p>
              <p className="text-farm-cocoa-brown text-lg">
                Today, our 30-acre farm is home to thousands of happy chickens, several dedicated 
                staff members, and sustainable farming practices that have become a model in our region.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg" data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1518492104633-130d0cc84637" 
                alt="The Owade family on their farm" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-farm-olive-green text-white" data-aos="fade-up">
        <div className="container mx-auto">
          <h2 className="section-title text-center" data-aos="fade-up">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Sustainability",
                description: "We implement regenerative farming practices that restore soil health, conserve water, and reduce our carbon footprint.",
                icon: "fa-leaf",
                color: "text-farm-light-green",
              },
              {
                title: "Animal Welfare",
                description: "Our chickens live stress-free lives with access to sunshine, fresh air, organic feed, and room to express their natural behaviors.",
                icon: "fa-egg",
                color: "text-farm-golden-yellow",
              },
              {
                title: "Community",
                description: "We believe in supporting our local economy, providing education about sustainable farming, and fostering connections with our customers.",
                icon: "fa-people-group",
                color: "text-farm-terracotta-light",
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="text-center bg-white/10 p-8 rounded-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                data-aos="fade-up" 
                data-aos-delay={index * 200}
              >
                <div className={`${value.color} text-4xl mb-6`}>
                  <i className={`fas ${value.icon}`} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{value.title}</h3>
                <p className="text-white/90">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="section bg-farm-light-olive" data-aos="fade-up">
        <div className="container mx-auto">
          <h2 className="section-title text-farm-forest-green" data-aos="fade-up">
            Our Facilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-serif font-bold mb-4 text-farm-forest-green">
                Pasture Areas
              </h3>
              <p className="text-farm-cocoa-brown text-lg mb-4">
                Our chickens have access to 25 acres of lush, diverse pasture that we rotate 
                regularly to ensure optimal soil health and fresh foraging opportunities.
              </p>
              <p className="text-farm-cocoa-brown text-lg">
                The pastures include a variety of grasses, legumes, and herbs that provide natural 
                nutrition for our chickens and support beneficial insects and pollinators.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg" data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1708254837326-8cd56e4fad41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMGZvcmFnaW5nJTIwaW4lMjBwYXN0dXJlfGVufDB8fDB8fHww" 
                alt="Chickens foraging in pasture" 
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-farm-terracotta text-white" data-aos="zoom-in">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" data-aos="fade-up">
            Experience Our Farm's Products
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
            Now that you know our story, try our ethically raised chicken products and taste 
            the difference that sustainable farming makes.
          </p>
          <a 
            href="/products" 
            className="bg-white text-farm-terracotta py-2 px-6 rounded-lg transition-all duration-300 hover:bg-farm-golden-yellow hover:text-white hover:-translate-y-0.5 hover:shadow-md text-lg font-medium inline-block"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Shop Now
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
