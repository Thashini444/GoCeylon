import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MapPin, Clock, Star, ArrowRight, Camera, Compass } from 'lucide-react';

const Destinations = () => {
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
          stagger: 0.1,
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

  const destinations = [

    {
      name: 'Sigiriya',
      tagline: 'The Lion Rock',
      description: 'Rising dramatically from the central plains, the enigmatic rocky outcrop of Sigiriya is perhaps Sri Lanka\'s single most dramatic sight. Near-vertical walls soar to a flat-topped summit that contains the ruins of an ancient civilization.',
      image: '/destinations_card_sigiriya.jpg',
      location: 'Central Province',
      bestTime: 'January - April',
      duration: '2-3 hours climb',
      rating: 4.9,
      highlights: ['Ancient frescoes', 'Mirror Wall', 'Water gardens', 'Lion\'s paws'],
      activities: ['Rock climbing', 'Photography', 'History tour', 'Sunrise view'],
    },
    {
      name: 'Ella',
      tagline: 'Highland Paradise',
      description: 'Nestled in the hills at 1,041 meters above sea level, Ella is a small town with a big reputation. Famous for its stunning views, tea plantations, and the iconic Nine Arch Bridge.',
      image: '/destinations_ella.jpg',
      location: 'Uva Province',
      bestTime: 'March - May',
      duration: '2-3 days',
      rating: 4.8,
      highlights: ['Nine Arch Bridge', 'Little Adam\'s Peak', 'Tea factories', 'Ravana Falls'],
      activities: ['Hiking', 'Train rides', 'Tea tasting', 'Village walks'],
    },
    {
      name: 'Galle Fort',
      tagline: 'Colonial Heritage',
      description: 'A UNESCO World Heritage site, Galle Fort is a living monument to the island\'s colonial past. Walk along the ramparts at sunset, explore boutique shops, and dine in charming cafes.',
      image: '/destinations_galle.jpg',
      location: 'Southern Province',
      bestTime: 'November - April',
      duration: '1-2 days',
      rating: 4.7,
      highlights: ['Dutch Reformed Church', 'Flag Rock', 'Maritime Museum', 'Lighthouse'],
      activities: ['Walking tour', 'Shopping', 'Sunset watching', 'Dining'],
    },

    {
      name: 'Mirissa',
      tagline: 'Beach Paradise',
      description: 'Sri Lanka\'s premier beach destination, Mirissa offers golden sands, turquoise waters, and world-class whale watching. Perfect for surfing, swimming, or simply relaxing.',
      image: '/destinations_mirissa.jpg',
      location: 'Southern Province',
      bestTime: 'November - April',
      duration: '2-4 days',
      rating: 4.8,
      highlights: ['Whale watching', 'Coconut Tree Hill', 'Secret Beach', 'Sunset views'],
      activities: ['Surfing', 'Whale watching', 'Snorkeling', 'Beach dining'],
    },
    {
      name: 'Lotus Tower',
      tagline: 'Iconic Colombo Landmark',
      description: 'The tallest tower in Sri Lanka, offering panoramic views of Colombo and surrounding areas. A modern symbol of the city with observation decks, restaurants, and entertainment.',
      image: '/destinations_lotustower.jpg',
      location: 'Western Province',
      bestTime: 'January - April',
      duration: 'Half-day to 1 day',
      rating: 4.5,
      highlights: ['Observation deck', 'Restaurants', 'City skyline views', 'Light shows at night'],
      activities: ['Sightseeing', 'Photography', 'Dining', 'City tours'],
    },
    {
      name: 'Galle Face Green',
      tagline: 'Oceanfront Promenade',
      description: 'A large urban park by the Indian Ocean, popular for kite flying, street food, and sunset views.',
      image: '/destinations_galleface.jpg',
      location: 'Western Province',
      bestTime: 'December - April',
      duration: '2-3 hours',
      rating: 4.4,
      highlights: ['Sunsets', 'Street food', 'Ocean breeze', 'Family-friendly'],
      activities: ['Walking', 'Kite flying', 'Photography', 'Picnics'],
    },
    {
      name: 'Kandy',
      tagline: 'Cultural Capital',
      description: 'The last capital of the ancient kings, Kandy is home to the Temple of the Tooth Relic, one of Buddhism\'s most sacred shrines. Surrounded by hills and tea plantations.',
      image: '/destinations_kandy.jpg',
      location: 'Central Province',
      bestTime: 'December - April',
      duration: '2-3 days',
      rating: 4.7,
      highlights: ['Temple of the Tooth', 'Kandy Lake', 'Royal Botanical Gardens', 'Cultural dance'],
      activities: ['Temple visits', 'Garden tours', 'Cultural shows', 'Shopping'],
    },
    {
      name: 'Hikkaduwa',
      tagline: 'Coral Sanctuary',
      description: 'A vibrant beach town famous for its coral sanctuary, surfing waves, and lively nightlife. Perfect for underwater exploration and beach parties.',
      image: '/destinations_hikkaduwa.jpg',
      location: 'Southern Province',
      bestTime: 'November - April',
      duration: '2-3 days',
      rating: 4.6,
      highlights: ['Coral gardens', 'Sea turtle hatchery', 'Surf breaks', 'Beach parties'],
      activities: ['Snorkeling', 'Surfing', 'Turtle watching', 'Nightlife'],
    },
    {
      name: 'Adams Peak',
      tagline: 'Sacred Mountain',
      description: 'A spiritual pilgrimage site with breathtaking sunrise views from the summit.',
      image: '/destinations_adamspeak.jpg',
      location: 'Central Province',
      bestTime: 'December - May',
      duration: '1-2 days',
      rating: 4.8,
      highlights: ['Summit views', 'Pilgrimage steps', 'Sunrise', 'Nature'],
      activities: ['Hiking', 'Photography', 'Pilgrimage', 'Nature exploration'],
    },
    {
      name: 'Anuradhapura',
      tagline: 'Ancient Sacred City',
      description: 'One of the oldest cities in Sri Lanka, full of stupas, temples, and historical relics.',
      image: '/destinations_anuradhapura.jpg',
      location: 'North Central Province',
      bestTime: 'December - April',
      duration: '1 day',
      rating: 4.6,
      highlights: ['Ruwanwelisaya', 'Sri Maha Bodhi', 'Ancient stupas', 'Historical sites'],
      activities: ['Cycling', 'Sightseeing', 'Photography', 'Cultural tours'],
    }
  ];

  return (
    <div ref={pageRef} className="pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/destinations_bg_train_hills.jpg)' }}
        >
          <div className="absolute inset-0 bg-goteal/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="animate-item font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Explore Sri Lanka
          </h1>
          <p className="animate-item text-white/80 text-lg mt-4 max-w-2xl">
            Discover ancient ruins, pristine beaches, misty mountains, and vibrant culture across the island.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {destinations.map((dest, index) => (
              <div
                key={dest.name}
                className={`animate-item glass-card overflow-hidden ${index === 0 || index === 3 ? 'lg:col-span-2' : ''
                  }`}
              >
                <div className={`grid ${index === 0 || index === 3 ? 'md:grid-cols-2' : ''}`}>
                  <div className={`relative overflow-hidden ${index === 0 || index === 3 ? 'h-64 md:h-full' : 'h-56'}`}>
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gocoral text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star size={14} className="fill-white" /> {dest.rating}
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <span className="text-gocoral text-sm font-semibold uppercase tracking-wider">{dest.tagline}</span>
                    <h2 className="font-display font-bold text-2xl lg:text-3xl text-goteal mt-1">{dest.name}</h2>
                    <p className="text-gray-600 text-sm mt-3 line-clamp-3">{dest.description}</p>

                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {dest.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {dest.duration}</span>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs text-gray-400 mb-2">Highlights:</p>
                      <div className="flex flex-wrap gap-2">
                        {dest.highlights.map((highlight) => (
                          <span key={highlight} className="bg-gocream text-goteal text-xs px-3 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="mt-6 bg-gocoral text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gocoral/90 transition-colors inline-flex items-center gap-2">
                      Explore {dest.name} <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-goteal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="animate-item text-gocoral font-semibold text-sm uppercase tracking-wider">Travel Tips</span>
            <h2 className="animate-item font-display font-bold text-3xl md:text-4xl text-white mt-2">
              Plan Your Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="animate-item bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center">
              <div className="w-14 h-14 bg-gocoral rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="text-white" size={28} />
              </div>
              <h3 className="font-display font-bold text-white text-lg">Best Routes</h3>
              <p className="text-white/70 text-sm mt-2">
                Our experts have curated the most efficient routes to cover maximum destinations in minimum time.
              </p>
            </div>
            <div className="animate-item bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center">
              <div className="w-14 h-14 bg-gocoral rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="font-display font-bold text-white text-lg">Ideal Duration</h3>
              <p className="text-white/70 text-sm mt-2">
                We recommend 10-14 days to experience the best of Sri Lanka without rushing.
              </p>
            </div>
            <div className="animate-item bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center">
              <div className="w-14 h-14 bg-gocoral rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="text-white" size={28} />
              </div>
              <h3 className="font-display font-bold text-white text-lg">Photo Spots</h3>
              <p className="text-white/70 text-sm mt-2">
                Get insider tips on the best times and locations for those perfect Instagram shots.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
