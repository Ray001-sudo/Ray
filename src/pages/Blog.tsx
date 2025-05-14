
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

// Define blog post type
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}


const blogPosts: BlogPost[] = [
  {
    id: "organic-feed-benefits",
    title: "The Benefits of Organic Feed for Chickens",
    excerpt: "Discover why we choose organic feed and how it impacts the health of our chickens and the environment.",
    content: `
        When it comes to raising healthy, happy chickens, the quality of their feed plays a crucial role. At our farm, we are committed to using only **organic feed** for our chickens, and for good reason. Here’s why choosing organic feed is better for the chickens, the environment, and ultimately, the food you eat:  

        <br><strong>1. Healthier, Happier Chickens</strong>  
        Organic feed is free from synthetic pesticides, antibiotics, and genetically modified ingredients. This means our chickens are getting a diet that’s closer to what nature intended, promoting stronger immune systems and overall better health. Chickens that eat organic feed are less likely to suffer from digestive issues, respiratory problems, or other common poultry illnesses.  

        <br><strong>2. Better Quality Eggs and Meat</strong>  
        The saying “you are what you eat” holds true for chickens as well. Chickens fed organic diets produce eggs and meat that are richer in essential nutrients, including omega-3 fatty acids, vitamins, and antioxidants. This translates to tastier, healthier food for you and your family.  

        <br><strong>3. Improved Animal Welfare</strong>  
        Organic feed is just one part of our commitment to animal welfare. It’s part of a larger system that prioritizes the well-being of our chickens. Along with free-range living and spacious coops, organic feed ensures our birds lead happier, stress-free lives.  

        <br><strong>4. Environmental Benefits</strong>  
        By choosing organic feed, we also reduce the environmental impact of our farm. Organic farming practices help protect soil health, conserve water, and reduce pollution. This means fewer harmful chemicals in the soil and waterways, creating a healthier ecosystem for all.  

        <br><strong>5. Supporting Sustainable Agriculture</strong>  
        When you buy our chicken products, you’re supporting a more sustainable and ethical way of farming. Organic feed supports biodiversity, reduces the carbon footprint, and promotes a healthier planet.  

        Choosing organic feed isn’t just about healthier chickens – it’s about creating a more sustainable food system for everyone. We believe that investing in high-quality, organic feed is a vital part of producing the best possible poultry products for our customers.  

        <br><strong>Ready to taste the difference?</strong> Check out our range of organic, free-range chicken products in our online store.  
    `,
    author: "Jane Beryl",
    date: "May 12, 2025",
    image: "https://images.unsplash.com/photo-1569466593977-94ee7ed02ec9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JnYW5pYyUyMGZlZWQlMjBmb3IlMjBjaGlja2VufGVufDB8fDB8fHww",
    category: "Farming Practices"
  },
  {
    id: "pasture-rotation",
    title: "Pasture Rotation: Why It Matters",
    excerpt: "Learn about our pasture rotation system and how it improves soil health while providing optimal nutrition for our chickens.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Emmanuel Victorson",
    date: "May 5, 2025",
    image: "https://plus.unsplash.com/premium_photo-1661811913370-fa169096b4d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdHVyZSUyMHJvdGF0aW9uJTIwZm9yJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Sustainability"
  },
  {
    id: "herb-roasted-chicken-recipe",
    title: "Recipe: Herb Roasted Chicken",
    excerpt: "A simple but delicious recipe to bring out the natural flavors of our pasture-raised chicken.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Chef Daniel",
    date: "May 5, 2025",
    image: "https://plus.unsplash.com/premium_photo-1695799627960-813d4e61a0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVyYiUyMHJvYXN0ZWQlMjBjaGlja2VufGVufDB8fDB8fHww",
    category: "Sustainability"
    },
  {
    id: "sustainable-packaging",
    title: "Our Journey to Sustainable Packaging",
    excerpt: "How we're reducing our environmental footprint through eco-friendly packaging solutions.",
    content: `
        At our farm, sustainability isn’t just about how we raise our chickens – it’s also about how we deliver our products to you. Here’s how we’re reducing our environmental footprint through eco-friendly packaging solutions:  

        1. **Biodegradable and Compostable Materials**  
        We use packaging made from biodegradable and compostable materials, such as recycled paper and plant-based plastics. These materials break down naturally over time, reducing the waste that ends up in landfills.  

        2. **Minimalist Design for Maximum Impact**  
        Our packaging is designed to use as little material as possible while still protecting our products. This reduces the amount of raw materials needed and cuts down on waste.  

        3. **Recyclable Options**  
        Wherever possible, we choose fully recyclable packaging, ensuring that our customers can easily dispose of it responsibly. This includes using cardboard, paper, and recyclable plastics for our product containers.  

        4. **Reduced Carbon Footprint**  
        By sourcing our packaging materials locally and choosing lightweight options, we reduce the carbon emissions associated with transportation and manufacturing.  

        5. **Closing the Loop**  
        We encourage our customers to return or reuse our packaging whenever possible, creating a more circular approach to packaging waste.  

        **Why It Matters:**  
        Sustainable packaging is a small but important step towards reducing our overall environmental impact. It’s part of our commitment to creating a better world for future generations – and providing you with the freshest, most responsibly produced poultry products possible.  

        Thank you for supporting our journey toward a more sustainable future. Together, we can make a real difference.  

        Want to learn more about our sustainability efforts? Check out our other blog posts and discover how we’re working to create a greener tomorrow.  
    `,
    author: "Sarah Williams",
    date: "April 20, 2025",
    image: "https://images.unsplash.com/photo-1720960648298-98d21369ddf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1c3RhaW5hYmxlJTIwY2hpY2tlbiUyMHBhY2thZ2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Sustainability"
  },
  {
    id: "chicken-health-guide",
    title: "A Guide to Chicken Health and Wellness",
    excerpt: "Learn how we keep our chickens healthy through natural preventative care practices.",
    content: `
        Keeping our chickens healthy and happy is at the core of everything we do. Healthy chickens produce better eggs, grow stronger, and live more fulfilling lives. Here’s a look at some of the natural preventative care practices we use to ensure our flocks thrive:  

        1. **Proper Nutrition**  
        A balanced diet is the foundation of good health. We feed our chickens high-quality, organic feed packed with essential nutrients, including protein, vitamins, and minerals. This supports strong immune systems and healthy growth.  

        2. **Clean, Comfortable Housing**  
        We provide our chickens with spacious, well-ventilated coops that are cleaned regularly to reduce the risk of disease. Proper airflow, dry bedding, and ample space for roosting are essential for their comfort.  

        3. **Natural Pest Control**  
        Instead of relying on harsh chemicals, we use natural methods like diatomaceous earth and herbal repellents to keep parasites at bay. Rotating pastures also helps reduce the buildup of harmful pests.  

        4. **Fresh Air and Sunshine**  
        Our chickens have plenty of outdoor time to forage, dust bathe, and soak up the sun. This reduces stress and keeps their immune systems strong. Natural sunlight is also a critical source of vitamin D, essential for strong bones and overall health.  

        5. **Regular Health Checks**  
        We conduct regular health checks to monitor for early signs of illness. This proactive approach helps us address any issues before they become serious, reducing the need for antibiotics.  

        6. **Stress Reduction**  
        Happy chickens are healthy chickens. We provide enriching environments with plenty of space, perches, and stimulating activities to keep our flocks mentally and physically fit.  

        **Why It Matters:**  
        Investing in the health and well-being of our chickens not only improves their quality of life but also ensures the quality of the eggs and meat they produce. Healthy chickens mean better food for you and a more sustainable farming system overall.  

        Ready to taste the difference that healthy, naturally raised chickens make? Check out our range of premium, ethically produced poultry products.  

        Thank you for supporting animal welfare and sustainable farming. Together, we can make a real difference.  
    `,
    author: "Dr. Ben Ray",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7",
    category: "Animal Welfare"
  },
  {
    id: "farm-to-table-movement",
    title: "The Farm-to-Table Movement: Why It Matters",
    excerpt: "Exploring the benefits of knowing where your food comes from and supporting local agriculture.",
    content: `
        The farm-to-table movement has gained popularity in recent years, and for good reason. It’s about reconnecting people with the origins of their food, supporting local farmers, and making more sustainable food choices. Here’s why it matters:  

        1. **Fresher, Healthier Food**  
        When you buy directly from local farms, you get produce and meat that is fresher and often more nutrient-dense than what you’d find in supermarkets. Shorter supply chains mean fewer preservatives and a fresher taste.  

        2. **Support for Local Farmers**  
        Choosing farm-to-table means you’re directly supporting small-scale farmers, helping them thrive in an industry often dominated by large corporations. This keeps more money in local economies and creates jobs in rural areas.  

        3. **Reduced Environmental Impact**  
        Food that travels fewer miles has a smaller carbon footprint. Farm-to-table practices often involve more sustainable farming methods, like pasture rotation and organic feed, which are better for the environment.  

        4. **Stronger Local Communities**  
        By supporting local farmers, you’re also supporting your local community. It fosters connections between farmers and consumers, creating a sense of shared responsibility for the food we eat.  

        5. **Transparency and Trust**  
        Knowing where your food comes from builds trust and confidence in its quality. You can see firsthand how animals are raised and crops are grown, ensuring they meet your standards for health and sustainability.  

        **Why It Matters:**  
        Choosing farm-to-table isn’t just a trend – it’s a way to create a more sustainable, ethical, and community-focused food system. At our farm, we’re proud to be part of this movement, offering fresh, locally produced poultry that you can trust.  

        Ready to make a difference with every meal? Check out our range of locally raised, ethically produced chicken products and taste the farm-to-table difference.  

        Thank you for supporting small farms and sustainable food systems. Together, we can create a healthier, more connected world.  
    `,
    author: "Jane Beryl",
    date: "April 7, 2025",
    image: "https://images.unsplash.com/photo-1689356156827-98685f1422bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybSUyMHRvJTIwdGFibGUlMjBtb3ZlbWVudCUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D",
    category: "Food Philosophy"
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  
  // Extract unique categories
  const categories = ["all", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === "all" || post.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-72 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1499744937866-d7e566a20a61"
            alt="Farm Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Farm Stories
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            News, insights, and recipes from our sustainable farming journey.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section bg-white">
        <div className="container mx-auto">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Category Filter */}
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full md:w-auto px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-farm-forest-green"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Search */}
            <div className="w-full md:w-64 relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-farm-forest-green"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article key={post.id} className="farm-card">
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-farm-terracotta text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-farm-forest-green hover:text-farm-terracotta transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-farm-cocoa-brown mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center">
                      <div className="mr-3">
                        <div className="w-8 h-8 bg-farm-light-olive rounded-full flex items-center justify-center">
                          <span className="text-farm-forest-green font-bold">
                            {post.author.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <span className="text-gray-600 text-sm">{post.author}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2 text-farm-forest-green">No articles found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter to find what you're looking for.</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                }}
                className="text-farm-terracotta hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-farm-olive-green text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg mb-8">
            Stay updated with our latest farming practices, recipes, and sustainable 
            living tips delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded flex-grow text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-farm-terracotta hover:bg-farm-golden-yellow transition-colors text-white px-6 py-2 rounded font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;
