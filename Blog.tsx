import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.animate-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: pageRef.current,
            start: 'top 80%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const featuredPost = {
    title: 'The Ultimate Sri Lanka Travel Guide for 2024',
    excerpt: 'Everything you need to know before visiting the Pearl of the Indian Ocean. From visa requirements to must-visit destinations, we\'ve got you covered.',
    image: '/hero_bg_tea_hills.jpg',
    author: 'GoCeylon Team',
    date: 'December 20, 2024',
    readTime: '12 min read',
    category: 'Travel Guide',
  };

  const posts = [
    {
      id: 1,
      title: 'Best Time to Visit Sri Lanka: A Season-by-Season Guide',
      excerpt: 'Discover the ideal seasons for your tropical getaway, from the dry season on the west coast to the monsoon patterns in the east.',
      image: '/destinations_ella.jpg',
      author: 'Sarah Johnson',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'Planning',
    },
    {
      id: 2,
      title: 'Top 10 Hidden Beaches Only Locals Know About',
      excerpt: 'Escape the crowds and discover pristine beaches where you can have the sand all to yourself.',
      image: '/destinations_mirissa.jpg',
      author: 'Ishan Perera',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Beaches',
    },
    {
      id: 3,
      title: 'The World\'s Most Scenic Train Journey: Kandy to Ella',
      excerpt: 'A complete guide to experiencing one of the most beautiful railway routes on the planet.',
      image: '/tours_bg_highlands.jpg',
      author: 'Amara Silva',
      date: 'December 5, 2024',
      readTime: '10 min read',
      category: 'Experiences',
    },
    {
      id: 4,
      title: 'Sri Lankan Food: A Culinary Journey',
      excerpt: 'From rice and curry to street food delights, explore the flavors that make Sri Lankan cuisine unique.',
      image: '/food_card_curry.jpg',
      author: 'Dilan Fernando',
      date: 'November 28, 2024',
      readTime: '7 min read',
      category: 'Food',
    },
    {
      id: 5,
      title: 'Wildlife Safari Guide: Yala vs Udawalawe',
      excerpt: 'Which national park should you visit? We break down the differences to help you decide.',
      image: '/destinations_card_sigiriya.jpg',
      author: 'Nisha Rajapakse',
      date: 'November 22, 2024',
      readTime: '9 min read',
      category: 'Wildlife',
    },
    {
      id: 6,
      title: 'Budget Travel: Sri Lanka for Under $50 a Day',
      excerpt: 'How to experience the best of Sri Lanka without breaking the bank. Tips from a backpacker.',
      image: '/destinations_kandy.jpg',
      author: 'Tom Williams',
      date: 'November 15, 2024',
      readTime: '8 min read',
      category: 'Budget',
    },
  ];

  const categories = [
    { name: 'All', count: 24 },
    { name: 'Travel Guide', count: 5 },
    { name: 'Planning', count: 4 },
    { name: 'Experiences', count: 6 },
    { name: 'Food', count: 3 },
    { name: 'Wildlife', count: 2 },
    { name: 'Budget', count: 2 },
    { name: 'Beaches', count: 2 },
  ];

  return (
    <div ref={pageRef} className="pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/plan_card_map.jpg)' }}
        >
          <div className="absolute inset-0 bg-goteal/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="animate-item font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Travel Blog
          </h1>
          <p className="animate-item text-white/80 text-lg mt-4 max-w-2xl">
            Insider guides, hidden gems, and stories from the road to inspire your journey.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 px-6 lg:px-12 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button 
                key={cat.name}
                className="px-4 py-2 bg-gocream text-goteal rounded-full text-sm font-medium hover:bg-gocoral hover:text-white transition-colors"
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 lg:py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="animate-item glass-card overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-full overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gocoral text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-gocoral text-sm font-semibold uppercase tracking-wider">{featuredPost.category}</span>
                <h2 className="font-display font-bold text-2xl lg:text-3xl text-goteal mt-2">{featuredPost.title}</h2>
                <p className="text-gray-600 mt-4">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><User size={14} /> {featuredPost.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> {featuredPost.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {featuredPost.readTime}</span>
                </div>
                <Link to="#" className="mt-6 text-gocoral font-semibold inline-flex items-center gap-2 hover:underline">
                  Read Article <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 lg:py-16 px-6 lg:px-12 bg-gocream">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-bold text-2xl text-goteal">Latest Articles</h2>
            <Link to="#" className="text-gocoral font-semibold hover:underline inline-flex items-center gap-2">
              View All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="animate-item bg-white rounded-3xl overflow-hidden card-hover">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-goteal">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-goteal hover:text-gocoral transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-8 h-8 bg-gocream rounded-full flex items-center justify-center">
                      <User size={14} className="text-goteal" />
                    </div>
                    <span className="text-sm text-gray-500">{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="animate-item bg-goteal rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Get Travel Tips Delivered
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Subscribe to our newsletter for exclusive travel tips, hidden gems, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-gocoral"
              />
              <button className="bg-gocoral text-white px-8 py-3 rounded-full font-semibold hover:bg-gocoral/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-12 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display font-bold text-xl text-goteal mb-6 text-center">Popular Topics</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Sri Lanka', 'Travel Tips', 'Beaches', 'Wildlife', 'Food', 'Culture', 'Adventure', 'Hotels', 'Budget Travel', 'Luxury', 'Family', 'Honeymoon'].map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-gocream text-goteal rounded-full text-sm hover:bg-gocoral hover:text-white transition-colors cursor-pointer"
              >
                <Tag size={12} className="inline mr-1" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
