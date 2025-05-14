import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";
import AOS from "aos";
import "aos/dist/aos.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const Products = () => {
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [category, setCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false // Ensures animation on scroll up and down
    });
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: "Whole Pasture-Raised Chicken",
      description: "Our signature product, ethically raised with access to sunshine, fresh air, and natural diets.",
      price: 1200.00,
      image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
      category: "whole"
    },
    {
      id: 2,
      name: "Chicken Breast",
      description: "Boneless, skinless chicken breasts from our pasture-raised chickens.",
      price: 450.00,
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
      category: "parts"
    },
    {
      id: 3,
      name: "Chicken Thighs",
      description: "Juicy, flavorful chicken thighs, perfect for grilling or slow cooking.",
      price: 300.00,
      image: "data:image/jpeg;base64,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",
      category: "parts"
    },
    {
      id: 4,
      name: "Chicken Wings",
      description: "Perfect for parties or as a delicious snack any time.",
      price: 350.00,
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
      category: "parts"
    },
    {
      id: 5,
      name: "Farm Fresh Eggs (Dozen)",
      description: "Vibrant, nutritious eggs from hens raised on organic feed with room to roam.",
      price: 420.00,
      image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc",
      category: "eggs"
    },
    {
      id: 6,
      name: "Chicken Gizzard",
      description: "Tender, protein-rich, and perfect for frying or adding to stews.",
      price: 120.00,
      image: "data:image/jpeg;base64,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",
      category: "specialty"
    },
    {
      id: 7,
      name: "Chicken Liver",
      description: "Sourced from ethically raised, pasture-fed chickens.",
      price: 370.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDs-Hn35hONXCFfePQrVZmFNK4V5GzFj9Z-wAdVr1YtPzGQ30QvrbOyLp1-aRj5HULhjc&usqp=CAUs",
      category: "specialty"
    },
    {
      id: 8,
      name: "Chicken feet (16 oz)",
      description: "Nutrient-rich and perfect for soups, broths, or crispy snacks.",
      price: 450.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQZDda3DcWsZ1xsoQ72L1hDRuQ_yvA2UFaw&s",
      category: "specialty"
    }
  ];


  const filteredProducts = products.filter(product => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Categories for filter
  const categories = [
    { value: "all", label: "All Products" },
    { value: "whole", label: "Whole Chickens" },
    { value: "parts", label: "Chicken Parts" },
    { value: "eggs", label: "Eggs" },
    { value: "specialty", label: "Specialty Items" }
  ];

  // Handle adding product to cart with toast notification
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000
    });
  };

  return (
    <MainLayout>
      {/* Hero Banner with AOS */}
      <section
        className="relative h-72 flex items-center"
        data-aos="fade-down"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1698494496967-d5754b2d9d26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxjaGlja2VufGVufDB8fDB8fHww"
            alt="Farm products banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div
          className="container mx-auto px-4 z-10 text-white text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Our Products
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Ethically raised, sustainably farmed chicken products for your table.
          </p>
        </div>
      </section>

      {/* Products Section with AOS */}
      <section
        className="section bg-white"
        data-aos="fade-up"
      >
        <div className="container mx-auto">
          {/* Filters and Search with AOS */}
          <div
            className="flex flex-col md:flex-row justify-between items-center mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full md:w-auto px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-farm-forest-green"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-farm-forest-green"
              />
            </div>
          </div>

          {/* Products Grid with AOS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="farm-card group"
                data-aos="fade-up"
                data-aos-delay={100 + (index % 4) * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 right-2 bg-farm-terracotta text-white py-1 px-3 rounded-full text-sm">
                    ksh{product.price.toFixed(2)}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-farm-forest-green">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn-primary w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State with AOS */}
          {filteredProducts.length === 0 && (
            <div
              className="text-center py-8"
              data-aos="fade-up"
            >
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setCategory("all");
                  setSearchTerm("");
                }}
                className="mt-4 text-farm-terracotta hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Farm-to-Table Section with AOS */}
      <section
        className="section bg-farm-light-olive"
        data-aos="fade-up"
      >
        <div className="container mx-auto">
          <h2
            className="section-title text-center text-farm-forest-green"
            data-aos="fade-up"
          >
            From Our Farm to Your Table
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="h-14 w-14 bg-farm-forest-green rounded-full text-white flex items-center justify-center text-xl font-bold mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold mb-3 text-center text-farm-forest-green">
                Humanely Raised
              </h3>
              <p className="text-center text-farm-cocoa-brown">
                Our chickens are raised with care on pasture, with access to sunshine, fresh air,
                and a natural diet of grass, bugs, and organic feed.
              </p>
            </div>

            <div
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-14 w-14 bg-farm-forest-green rounded-full text-white flex items-center justify-center text-xl font-bold mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold mb-3 text-center text-farm-forest-green">
                Responsibly Processed
              </h3>
              <p className="text-center text-farm-cocoa-brown">
                We process our chickens on-farm in small batches, ensuring respect for the animals
                and the highest quality standards for our products.
              </p>
            </div>

            <div
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="h-14 w-14 bg-farm-forest-green rounded-full text-white flex items-center justify-center text-xl font-bold mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold mb-3 text-center text-farm-forest-green">
                Directly to You
              </h3>
              <p className="text-center text-farm-cocoa-brown">
                We sell directly to consumers to ensure freshness and maintain a connection
                with the people who enjoy our products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with AOS */}
      <section
        className="section bg-farm-forest-green text-white"
        data-aos="fade-up"
      >
        <div className="container mx-auto">
          <h2
            className="section-title text-center"
            data-aos="fade-up"
          >
            Customer Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="italic mb-4">
                "I've been buying chicken from Sustainable Farm for over a year now, and I can't
                go back to store-bought. The difference in taste and quality is remarkable."
              </p>
              <p className="font-bold">- Maria T., Regular Customer</p>
            </div>

            <div
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="italic mb-4">
                "As a chef, I'm particular about my ingredients. The chicken from this farm has
                a flavor and texture that you just can't find elsewhere. My customers always notice."
              </p>
              <p className="font-bold">- Chef Daniel P., Local Restaurant Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs with AOS */}
      <section 
        className="section bg-white"
        data-aos="fade-up"
      >
        <div className="container mx-auto">
          <h2 
            className="section-title text-center text-farm-forest-green"
            data-aos="fade-up"
          >
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto mt-8">
            <div 
              className="mb-6 border-b border-gray-200 pb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold mb-2 text-farm-forest-green">
                How do you ship your products?
              </h3>
              <p className="text-farm-cocoa-brown">
                We ship all products in eco-friendly insulated packaging with ice packs to ensure 
                they arrive fresh. Local deliveries are made by our farm team, while we use 
                overnight shipping for longer distances.
              </p>
            </div>
            
            <div 
              className="mb-6 border-b border-gray-200 pb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold mb-2 text-farm-forest-green">
                Are your chickens certified organic?
              </h3>
              <p className="text-farm-cocoa-brown">
                Yes, our farm is certified organic by the USDA. Our chickens are raised on organic 
                feed and have access to organic pasture. We never use antibiotics, hormones, or GMOs.
              </p>
            </div>
            
            <div 
              className="mb-6 border-b border-gray-200 pb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-bold mb-2 text-farm-forest-green">
                What's the difference between your chicken and store-bought?
              </h3>
              <p className="text-farm-cocoa-brown">
                Our chickens are raised on pasture where they can forage for insects and plants, 
                resulting in meat that's more flavorful and nutritionally dense than conventional 
                chicken. They also grow at a natural rate, unlike fast-growing commercial breeds.
              </p>
            </div>
            
            <div 
              className="mb-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-xl font-bold mb-2 text-farm-forest-green">
                Do you offer bulk discounts?
              </h3>
              <p className="text-farm-cocoa-brown">
                Yes, we offer discounts on bulk orders. Please contact us directly for pricing on 
                large orders for restaurants, buying clubs, or large families.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;