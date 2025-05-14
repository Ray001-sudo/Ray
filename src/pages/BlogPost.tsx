
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

// Define blog post type (same as in Blog.tsx)
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

// Sample blog posts data (in a real app, this would come from an API or CMS)
// Using the same data as in Blog.tsx
const blogPosts: BlogPost[] = [
  {
    id: "organic-feed-benefits",
    title: "The Benefits of Organic Feed for Chickens",
    excerpt: "Discover why we choose organic feed and how it impacts the health of our chickens and the environment.",
    content: `<p>At Sustainable Farm, we're committed to providing our chickens with the highest quality organic feed. This commitment stems from our understanding of how feed quality directly impacts not only the health of our chickens but also the nutritional profile of the eggs and meat they produce, and ultimately the health of our consumers and the environment.</p>
    
    <h1><b>What Makes Feed Organic?</b></h1>
    
    <p>Organic feed is produced without synthetic pesticides, herbicides, or fertilizers. The grains and other ingredients are grown on certified organic land, ensuring that our chickens aren't exposed to harmful chemicals through their diet. Additionally, organic feed does not contain animal by-products, antibiotics, or genetically modified organisms (GMOs).</p>
    
    <b><h2>Health Benefits for Chickens</h2></b>
    
    <p>Chickens fed organic diets typically show stronger immune systems and lower stress levels. The absence of pesticides and chemical residues means their livers and other detoxifying organs don't have to work as hard, allowing their bodies to focus on natural growth and development. We've observed that our organically fed chickens have:
    <ul>
    <li>Better feather quality and coverage</li>
    <li>Stronger bones and fewer leg issues</li>
    <li>More natural foraging behaviors</li>
    <li>Longer, healthier lives overall</li>
    </ul></p>
    
    <b><h2>Nutritional Benefits for Consumers</h2></b>
    
    <p>Research has shown that meat and eggs from chickens raised on organic feed and pasture contain higher levels of beneficial nutrients compared to conventionally raised products:
    <ul>
    <li>More omega-3 fatty acids</li>
    <li>Higher levels of vitamins A and E</li>
    <li>Better omega-3 to omega-6 ratio</li>
    <li>More antioxidants</li>
    </ul></p>
    
    <b><h2>Environmental Benefits</h2></b>
    
    <p>Choosing organic feed also supports broader environmental sustainability goals:
    <ul>
    <li>Reduced pesticide and herbicide runoff into waterways</li>
    <li>Improved soil health on organic grain farms</li>
    <li>Support for diverse crop rotations</li>
    <li>Lower carbon footprint compared to conventional feed production</li>
    </ul></p>
    
    <b><h2>Our Feed Program</h2></b>
    
    <p>Our chickens' diet consists of:
    <ul>
    <li>Certified organic grain mix (corn, wheat, barley, and oats)</li>
    <li>Organic soybean meal and flaxseed for protein and omega-3s</li>
    <li>Natural vitamins and mineral supplements</li>
    <li>Fresh pasture forage (grass, legumes, insects, and seeds)</li>
    </ul></p>
    
    <p>We adjust our feed formulations seasonally to account for changes in pasture quality and the nutritional needs of our flock throughout the year.</p>
    
    <b><h2>Cost Considerations</h2></b>
    
    <p>While organic feed costs more than conventional options, we believe this investment is essential to our mission of producing the highest quality, healthiest chicken products. The premium we pay for feed is reflected in the superior taste and nutrition of our products—a difference our customers can taste.</p>
    
    <b><h2>Conclusion</h2></b>
    
    <p>By choosing organic feed for our chickens, we're making a commitment to health at every level—from the soil where the feed is grown, to the chickens that consume it, to the people who enjoy our products. It's a cornerstone of our sustainable farming practices and our promise to our customers.</p>`,
    
    author: "Jane Beryl",
    date: "May 12, 2025",
    image: "https://images.unsplash.com/photo-1569466593977-94ee7ed02ec9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JnYW5pYyUyMGZlZWQlMjBmb3IlMjBjaGlja2VufGVufDB8fDB8fHww",
    category: "Farming Practices"
  },
  {
    id: "pasture-rotation",
    title: "Pasture Rotation: Why It Matters",
    excerpt: "Learn about our pasture rotation system and how it improves soil health while providing optimal nutrition for our chickens.",
    content: `<p>Pasture rotation is at the heart of our sustainable farming system at Sustainable Farm. This practice involves systematically moving our chickens to fresh pasture areas, which benefits the animals, the soil, and ultimately the quality of our food products.</p>
    
    <b><h2>What is Pasture Rotation?</h2></b>
    
    <p>Our pasture rotation system uses mobile chicken coops and portable electric fencing to create a controlled movement pattern across our farm. We move our chickens to new grass every 1-3 days, depending on flock size, weather conditions, and grass growth rates. This ensures the birds always have access to fresh forage while preventing overgrazing or excessive manure accumulation in any one area.</p>
    
    <b><h2>Benefits for Soil Health</h2></b>
    
    <p>When managed properly, chickens can be powerful allies in building soil fertility:
    <ul>
    <li>Their manure adds organic matter and nutrients, particularly nitrogen, phosphorus, and potassium</li>
    <li>Their scratching behavior incorporates manure into the topsoil</li>
    <li>They help control insects and consume weed seeds</li>
    <li>Moving them prevents soil compaction and allows vegetation to recover</li>
    </ul></p>
    
    <p>Over time, we've observed significant improvements in our pastures—better water retention, more diverse plant species, increased earthworm activity, and deeper topsoil.</p>
    
    <b><h2>Benefits for Chickens</h2></b>
    
    <p>Chickens on rotated pasture enjoy numerous advantages:
    <ul>
    <li>Access to fresh, clean ground free of parasite buildup</li>
    <li>Diverse nutrition from insects, seeds, grasses, and forbs</li>
    <li>Natural exercise and the ability to express innate behaviors</li>
    <li>Reduced disease pressure and improved overall health</li>
    </ul></p>
    
    <p>Our pasture-raised chickens show better feather quality, stronger legs, and more natural behaviors compared to confined birds.</p>
    
    <b><h2>Carbon Sequestration</h2></b>
    
    <p>A well-managed rotation system can actually help fight climate change by sequestering carbon in the soil. The combination of:
    <ul>
    <li>Diverse plant growth with extensive root systems</li>
    <li>Addition of organic matter through manure</li>
    <li>Minimal soil disturbance</li>
    <li>Year-round living plants</li>
    </ul>
    all contribute to building carbon-rich soil that pulls CO₂ from the atmosphere.</p>
    
    <h2>Implementation Challenges</h2>
    
    <p>While the benefits are clear, implementing an effective rotation system requires:
    <ul>
    <li>Significant planning and management</li>
    <li>Investment in portable infrastructure</li>
    <li>Regular monitoring of soil and plant health</li>
    <li>Adaptation to weather conditions and seasonal changes</li>
    </ul></p>
    
    <b><h2>Our Rotation System</h2></b>
    
    <p>We've developed a 30-paddock system that allows each area to rest for approximately 45-60 days before chickens return. This rest period is crucial for:
    <ul>
    <li>Complete vegetation recovery</li>
    <li>Breaking parasite lifecycles</li>
    <li>Allowing beneficial insects to reestablish</li>
    <li>Optimizing nutrient cycling</li>
    </ul></p>
    
    <b><h2>The Taste Difference</h2></b>
    
    <p>Perhaps the most convincing argument for pasture rotation comes from the quality of the final product. Meat and eggs from chickens raised on diverse, rotating pastures consistently show:
    <ul>
    <li>Better flavor profiles</li>
    <li>Deeper yolk color in eggs</li>
    <li>Improved texture</li>
    <li>Superior nutritional content</li>
    </ul></p>
    
    <p>In conclusion, our pasture rotation system represents a win-win-win approach: better land, healthier animals, and superior food products. It's labor-intensive and requires careful planning, but the results are worth the effort for our farm, our customers, and the planet.</p>`,
    author: "Emmanuel Victorson",
    date: "May 5, 2025",
    image: "https://plus.unsplash.com/premium_photo-1661811913370-fa169096b4d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdHVyZSUyMHJvdGF0aW9uJTIwZm9yJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Sustainability"
  },
  {
    id: "herb-roasted-chicken-recipe",
    title: "Recipe: Herb Roasted Chicken",
    excerpt: "A simple but delicious recipe to bring out the natural flavors of our pasture-raised chicken.",
    content: `<p>There's nothing quite like a perfectly roasted chicken—crispy skin, tender meat, and amazing flavor that can only come from pasture-raised birds. This simple herb-roasted chicken recipe highlights the natural quality of our chicken without overwhelming its flavor.</p>
    
    <b><h2>Ingredients</h2></b>
    
    <ul>
    <li>1 whole Sustainable Farm pasture-raised chicken (4-5 pounds)</li>
    <li>2 tablespoons unsalted butter, softened</li>
    <li>3 cloves garlic, minced</li>
    <li>1 tablespoon fresh rosemary, finely chopped</li>
    <li>1 tablespoon fresh thyme leaves</li>
    <li>1 tablespoon fresh sage, finely chopped</li>
    <li>1 lemon</li>
    <li>2 tablespoons olive oil</li>
    <li>Salt and freshly ground black pepper</li>
    <li>1 yellow onion, quartered</li>
    <li>1 head of garlic, halved horizontally</li>
    </ul>
    
    <h2>Instructions</h2>
    
    <ol>
    <li><strong>Prepare the chicken:</strong> Remove the chicken from the refrigerator 30 minutes before cooking to bring it to room temperature. Preheat your oven to 425°F (220°C). Pat the chicken dry thoroughly with paper towels, inside and out.</li>
    
    <li><strong>Make herb butter:</strong> In a small bowl, mix the softened butter with minced garlic, rosemary, thyme, and sage until well combined.</li>
    
    <li><strong>Season the chicken:</strong> Carefully loosen the skin over the breast and thighs without tearing it. Gently spread about two-thirds of the herb butter under the skin, covering the breast and thigh meat. Zest the lemon over the remaining herb butter and mix well, then rub this mixture over the outside of the chicken.</li>
    
    <li><strong>Stuff and truss:</strong> Cut the zested lemon in half and place it inside the chicken cavity along with a few sprigs of herbs if you have extra. Tie the legs together with kitchen twine and tuck the wing tips under the body.</li>
    
    <li><strong>Prepare the roasting pan:</strong> Arrange the quartered onion and halved garlic head in the center of a roasting pan. Place the chicken breast-side up on top of the vegetables. Drizzle olive oil over the chicken and sprinkle generously with salt and freshly ground pepper.</li>
    
    <li><strong>Roast:</strong> Place the chicken in the preheated oven and roast for 50-60 minutes, or until an instant-read thermometer inserted into the thickest part of the thigh registers 165°F (74°C) and the juices run clear. If the skin is browning too quickly, loosely tent with foil.</li>
    
    <li><strong>Rest:</strong> Remove the chicken from the oven and let it rest, uncovered, for 15 minutes before carving. This allows the juices to redistribute throughout the meat.</li>
    
    <li><strong>Serve:</strong> Carve the chicken and serve with the roasted garlic and onions from the pan and any collected juices.</li>
    </ol>
    
    <h2>Serving Suggestions</h2>
    
    <p>This herb-roasted chicken pairs beautifully with:
    <ul>
    <li>Roasted root vegetables</li>
    <li>Mashed potatoes</li>
    <li>A simple green salad with vinaigrette</li>
    <li>Steamed seasonal vegetables</li>
    </ul></p>
    
    <b><h2>Why Pasture-Raised Makes a Difference</h2></b>
    
    <p>When using pasture-raised chicken for this recipe, you'll notice:
    <ul>
    <li>A richer flavor that comes from the chicken's diverse natural diet</li>
    <li>Better texture in the meat</li>
    <li>A balanced fat content that keeps the meat moist</li>
    <li>More vibrant color in both the meat and skin</li>
    </ul></p>
    
    <p>The quality of the chicken truly makes this simple recipe shine. While conventional chicken often needs extensive seasoning or sauces to impart flavor, our pasture-raised chicken has its own distinctive taste that's enhanced, not masked, by the herbs in this recipe.</p>
    
    <b><h2>Storage and Leftovers</h2></b>
    
    <p>Leftover chicken can be stored in the refrigerator for up to 3 days. It's excellent for:
    <ul>
    <li>Chicken salad</li>
    <li>Sandwiches</li>
    <li>Soups (and don't forget to make stock from the carcass!)</li>
    <li>Grain bowls</li>
    </ul></p>
    
    <p>We hope you enjoy this simple recipe that lets the natural quality of our pasture-raised chicken shine through. Happy cooking!</p>`,
    author: "Chef Daniel",
    date: "April 28, 2025",
    image: "https://plus.unsplash.com/premium_photo-1695799627960-813d4e61a0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVyYiUyMHJvYXN0ZWQlMjBjaGlja2VufGVufDB8fDB8fHww",
    category: "Recipes"
  },
  {
    id: "sustainable-packaging",
    title: "Our Journey to Sustainable Packaging",
    excerpt: "How we're reducing our environmental footprint through eco-friendly packaging solutions.",
    content: `
        At our farm, sustainability isn’t just about how we raise our chickens – it’s also about how we deliver our products to you. Here’s how we’re reducing our environmental footprint through eco-friendly packaging solutions:  

        <br><strong>1. Biodegradable and Compostable Materials</strong>  
        We use packaging made from biodegradable and compostable materials, such as recycled paper and plant-based plastics. These materials break down naturally over time, reducing the waste that ends up in landfills.  

        <br><strong>2. Minimalist Design for Maximum Impact</strong>  
        Our packaging is designed to use as little material as possible while still protecting our products. This reduces the amount of raw materials needed and cuts down on waste.  

        <br><strong>3. Recyclable Options</strong>  
        Wherever possible, we choose fully recyclable packaging, ensuring that our customers can easily dispose of it responsibly. This includes using cardboard, paper, and recyclable plastics for our product containers.  

        <br><strong>4. Reduced Carbon Footprint</strong>  
        By sourcing our packaging materials locally and choosing lightweight options, we reduce the carbon emissions associated with transportation and manufacturing.  

        <br><strong>5. Closing the Loop</strong>  
        We encourage our customers to return or reuse our packaging whenever possible, creating a more circular approach to packaging waste.  

        <br><strong>Why It Matters:</strong>  
        Sustainable packaging is a small but important step towards reducing our overall environmental impact. It’s part of our commitment to creating a better world for future generations – and providing you with the freshest, most responsibly produced poultry products possible.  

        Thank you for supporting our journey toward a more sustainable future. Together, we can make a real difference.  

        <br>Want to learn more about our sustainability efforts? Check out our other blog posts and discover how we’re working to create a greener tomorrow.  
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

        <br><strong>1. Proper Nutrition</strong>  
        A balanced diet is the foundation of good health. We feed our chickens high-quality, organic feed packed with essential nutrients, including protein, vitamins, and minerals. This supports strong immune systems and healthy growth.  

        <br><strong>2. Clean, Comfortable Housing</strong>  
        We provide our chickens with spacious, well-ventilated coops that are cleaned regularly to reduce the risk of disease. Proper airflow, dry bedding, and ample space for roosting are essential for their comfort.  

        <br><strong>3. Natural Pest Control</strong>  
        Instead of relying on harsh chemicals, we use natural methods like diatomaceous earth and herbal repellents to keep parasites at bay. Rotating pastures also helps reduce the buildup of harmful pests.  

        <br><strong>4. Fresh Air and Sunshine</strong>  
        Our chickens have plenty of outdoor time to forage, dust bathe, and soak up the sun. This reduces stress and keeps their immune systems strong. Natural sunlight is also a critical source of vitamin D, essential for strong bones and overall health.  

        <br><strong>5. Regular Health Checks</strong>  
        We conduct regular health checks to monitor for early signs of illness. This proactive approach helps us address any issues before they become serious, reducing the need for antibiotics.  

        <br><strong>6. Stress Reduction</strong>  
        Happy chickens are healthy chickens. We provide enriching environments with plenty of space, perches, and stimulating activities to keep our flocks mentally and physically fit.  

        <br><strong>Why It Matters:</strong>  
        Investing in the health and well-being of our chickens not only improves their quality of life but also ensures the quality of the eggs and meat they produce. Healthy chickens mean better food for you and a more sustainable farming system overall.  

        <br>Ready to taste the difference that healthy, naturally raised chickens make? Check out our range of premium, ethically produced poultry products.  

        <br>Thank you for supporting animal welfare and sustainable farming. Together, we can make a real difference.  
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

        <br><strong>1. Fresher, Healthier Food</strong>  
        When you buy directly from local farms, you get produce and meat that is fresher and often more nutrient-dense than what you’d find in supermarkets. Shorter supply chains mean fewer preservatives and a fresher taste.  

        <br><strong>2. Support for Local Farmers</strong>  
        Choosing farm-to-table means you’re directly supporting small-scale farmers, helping them thrive in an industry often dominated by large corporations. This keeps more money in local economies and creates jobs in rural areas.  

        <br><strong>3. Reduced Environmental Impact</strong>  
        Food that travels fewer miles has a smaller carbon footprint. Farm-to-table practices often involve more sustainable farming methods, like pasture rotation and organic feed, which are better for the environment.  

        <br><strong>4. Stronger Local Communities</strong>  
        By supporting local farmers, you’re also supporting your local community. It fosters connections between farmers and consumers, creating a sense of shared responsibility for the food we eat.  

        <br><strong>5. Transparency and Trust</strong>  
        Knowing where your food comes from builds trust and confidence in its quality. You can see firsthand how animals are raised and crops are grown, ensuring they meet your standards for health and sustainability.  

        <br><strong>Why It Matters:</strong>  
        Choosing farm-to-table isn’t just a trend – it’s a way to create a more sustainable, ethical, and community-focused food system. At our farm, we’re proud to be part of this movement, offering fresh, locally produced poultry that you can trust.  

        <br>Ready to make a difference with every meal? Check out our range of locally raised, ethically produced chicken products and taste the farm-to-table difference.  

        <br>Thank you for supporting small farms and sustainable food systems. Together, we can create a healthier, more connected world.  
    `,
    author: "Jane Beryl",
    date: "April 7, 2025",
    image: "https://images.unsplash.com/photo-1689356156827-98685f1422bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybSUyMHRvJTIwdGFibGUlMjBtb3ZlbWVudCUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D",
    category: "Food Philosophy"
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Find the post with the matching ID
    const foundPost = blogPosts.find(post => post.id === id);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts (same category but not the same post)
      const related = blogPosts
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 2); // Get up to 2 related posts
      
      setRelatedPosts(related);
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <MainLayout>
        <div className="section container mx-auto text-center">
          <h1 className="section-title text-farm-forest-green">Post Not Found</h1>
          <p className="mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Return to Blog
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-farm-terracotta px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <div className="w-10 h-10 bg-farm-light-olive rounded-full flex items-center justify-center">
                  <span className="text-farm-forest-green font-bold">
                    {post.author.charAt(0)}
                  </span>
                </div>
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-gray-300">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-farm-cocoa-brown"
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Category:</span>
                <span className="bg-farm-light-olive text-farm-forest-green px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Social Sharing */}
            <div className="mt-8 flex items-center">
              <span className="text-gray-600 mr-4">Share:</span>
              <div className="flex space-x-3">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"><button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </button></a>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Check this out!')}&url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"><button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button></a>
                <a href={`https://wa.me/?text=${encodeURIComponent('Check this out! ' + window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"><button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                  </svg>
                </button></a>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 bg-farm-light-olive rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 bg-farm-forest-green rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {post.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-farm-forest-green">
                    {post.author}
                  </h3>
                  <p className="text-farm-cocoa-brown">
                    {post.author === "Dr. Ben Ray" 
                      ? "Co-Founder & Operations Manager" 
                      : post.author === "Emmanuel Victorson" 
                        ? "Founder & Farm Director" 
                        : post.author === "Chef Daniel" 
                          ? "Culinary Partner"
                          : "Farm Team Member"}
                  </p>
                </div>
              </div>
              <p className="text-farm-cocoa-brown">
                {post.author === "Emily Johnson" 
                  ? "Emily oversees our day-to-day operations while championing sustainable agriculture practices in our community." 
                  : post.author === "Dr. Ben Ray" 
                    ? "With over 20 years of experience in regenerative farming, Ray leads our sustainability initiatives." 
                    : post.author === "Chef Daniel" 
                      ? "Chef Daniel partners with our farm to create delicious recipes that showcase our ethically raised chicken."
                      : "A dedicated member of our farm team who is passionate about sustainable farming and animal welfare."}
              </p>
            </div>

            {/* Comments Section (simplified) */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-farm-forest-green mb-6">
                Comments
              </h3>
              
              {/* Comment Form */}
              <form className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold text-farm-forest-green mb-4">
                  Leave a Comment
                </h4>
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-gray-700 mb-2">
                    Your Comment
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-farm-forest-green"
                    placeholder="Share your thoughts..."
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-farm-forest-green"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-farm-forest-green"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary">
                  Submit Comment
                </button>
              </form>

              {/* Sample Comments */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                        J
                      </div>
                    </div>
                    <div>
                      <h5 className="font-bold">Jane Smith</h5>
                      <p className="text-sm text-gray-500">May 10, 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-800">
                    Thank you for sharing this informative article! I've been considering switching to organic feed for my backyard chickens and this has given me the motivation to make the change.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                        R
                      </div>
                    </div>
                    <div>
                      <h5 className="font-bold">Robert Johnson</h5>
                      <p className="text-sm text-gray-500">May 8, 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-800">
                    I've been buying your chicken for months and can definitely taste the difference. It's nice to understand more about what goes into raising them so well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section bg-farm-light-olive">
          <div className="container mx-auto">
            <h2 className="section-title text-center text-farm-forest-green">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="farm-card">
                  <Link to={`/blog/${relatedPost.id}`} className="block">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-farm-terracotta text-sm font-medium">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-xl font-bold my-2 text-farm-forest-green hover:text-farm-terracotta transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-farm-cocoa-brown mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <span className="text-farm-terracotta font-medium hover:underline">
                        Read More
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/blog" className="btn-secondary inline-block">
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default BlogPost;
