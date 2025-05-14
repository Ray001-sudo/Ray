import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false, // Changed to false so animations play each time they scroll into view
      easing: 'ease-in-out',
      offset: 120 // Adjust when animations trigger
    });
  }, []);

  const handleVideoError = () => {
    if (videoRef.current) {
      videoRef.current.style.display = "none";
      videoRef.current.nextSibling.style.display = "block";
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onError={handleVideoError}
          >
            <source src="https://videos.pexels.com/video-files/3530247/3530247-sd_640_360_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Fallback Image */}
          <img
            src="https://images.unsplash.com/photo-1689697373821-b1b201830e84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGNoaWNrZW58ZW58MHx8MHx8fDA%3D"
            alt="Farm with chickens"
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ display: "none" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-2xl">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Ethically Raised Chickens for a Healthier Planet
            </h1>
            <p 
              className="text-lg md:text-xl mb-8 text-gray-100"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Our sustainable farming practices ensure the highest quality, ethically raised 
              chicken products while respecting the environment.
            </p>
            <div 
              className="flex flex-wrap gap-4"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <Link to="/products" className="btn-primary text-lg font-medium">
                Shop Our Products
              </Link>
              <Link to="/about" className="btn-secondary text-lg font-medium">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-farm-light-olive">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 
                className="section-title text-farm-forest-green"
                data-aos="fade-right"
              >
                Our Mission
              </h2>
              <p 
                className="text-lg mb-6"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                At Sustainable Farm, we believe in raising chickens the way nature intended - 
                with respect for the animals, the environment, and the communities we serve.
              </p>
              <p 
                className="text-lg mb-6"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Our mission is to provide the highest quality chicken products while 
                implementing regenerative agriculture practices that improve soil health, 
                conserve water, and reduce our carbon footprint.
              </p>
              <Link 
                to="/practices" 
                className="btn-secondary"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Learn About Our Practices
              </Link>
            </div>
            <div 
              className="rounded-lg overflow-hidden shadow-lg"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <img 
                src="https://images.unsplash.com/photo-1701717447276-d10d32220d56?w=500&auto=format&fit=crop&q=60"
                alt="A group of chickens walking around a yard"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section">
        <div className="container mx-auto">
          <h2 
            className="section-title text-center text-farm-forest-green"
            data-aos="fade-down"
          >
            Our Premium Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Whole Pasture-Raised Chicken",
                description: "Ethically raised with access to sunshine, fresh air, and natural diets.",
                imageUrl: "https://images.unsplash.com/photo-1518492104633-130d0cc84637",
                link: "/products",
                animation: "flip-left"
              },
              {
                title: "Farm Fresh Eggs",
                description: "Vibrant, nutritious eggs from hens raised on organic feed.",
                imageUrl: "https://images.unsplash.com/photo-1569127959161-2b1297b2d9a6",
                link: "/products",
                animation: "flip-up"
              },
              {
                title: "Premium Chicken Cuts",
                description: "Specialty cuts processed with care for superior quality and flavor.",
                imageUrl: "https://images.unsplash.com/photo-1605237750186-70933beb9f6f",
                link: "/products",
                animation: "flip-right"
              }
            ].map((product, index) => (
              <div 
                key={index} 
                className="farm-card" 
                data-aos={product.animation}
                data-aos-delay={index * 200}
              >
                <div 
                  className="h-60"
                  data-aos="zoom-in"
                  data-aos-delay={index * 300}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 
                    className="text-xl font-bold mb-2 text-farm-forest-green"
                    data-aos="fade-up"
                    data-aos-delay={index * 300 + 100}
                  >
                    {product.title}
                  </h3>
                  <p 
                    className="text-gray-700 mb-3"
                    data-aos="fade-up"
                    data-aos-delay={index * 300 + 200}
                  >
                    {product.description}
                  </p>
                  <Link 
                    to={product.link} 
                    className="btn-primary"
                    data-aos="zoom-in"
                    data-aos-delay={index * 300 + 300}
                  >
                    View Products
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;