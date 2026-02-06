import { Link } from 'react-router-dom';
import { FiArrowRight, FiInstagram, FiMapPin } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white pt-20">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-6 animate-fade-in-up">
            Bespoke Tailoring • Nairobi, Kenya
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight animate-fade-in-up animation-delay-100">
            Where Quality<br />
            <span className="italic text-amber-400">Meets Craftsmanship</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light animate-fade-in-up animation-delay-200">
            Creating timeless, perfectly tailored garments for the distinguished gentleman
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-300">
            <Link to="/catalogue" className="btn-primary inline-flex items-center justify-center">
              View Collection
              <FiArrowRight className="ml-3" />
            </Link>
            <a
              href="https://wa.me/254726539925"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold inline-flex items-center justify-center"
            >
              Book Consultation
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <p className="section-subtitle">Our Expertise</p>
              <h2 className="section-title text-gray-900 mb-8 line-decoration">
                Crafted with Precision & Passion
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At AdalaDesigns, we believe that every stitch tells a story. 
                Our master tailors combine traditional craftsmanship with contemporary 
                design to create garments that are uniquely yours.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                From luxurious suits to elegant traditional wear, each piece is 
                meticulously crafted to ensure the perfect fit, exceptional comfort, 
                and timeless style.
              </p>
              <Link to="/about" className="btn-secondary inline-flex items-center">
                Our Story
                <FiArrowRight className="ml-3" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="image-zoom aspect-[3/4] bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=600&fit=crop" 
                    alt="Tailored Suit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="image-zoom aspect-square bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=400&fit=crop" 
                    alt="Fabric Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="image-zoom aspect-square bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop" 
                    alt="Craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="image-zoom aspect-[3/4] bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=600&fit=crop" 
                    alt="Suit Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="section-subtitle text-amber-400">Our Services</p>
            <h2 className="section-title">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bespoke Suits',
                description: 'Custom-tailored suits made with premium fabrics, designed to your exact measurements and style preferences.',
                image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=400&fit=crop',
                category: 'suits'
              },
              {
                title: 'Traditional Wear',
                description: 'Elegant African traditional garments that blend cultural heritage with modern sophistication.',
                image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&h=400&fit=crop',
                category: 'traditional'
              },
              {
                title: 'Custom Designs',
                description: 'Unique pieces designed specifically for your vision, from formal occasions to everyday elegance.',
                image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
                category: 'custom'
              }
            ].map((service, index) => (
              <Link
                key={index}
                to={`/catalogue?category=${service.category}`}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-2xl mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-amber-400 text-sm uppercase tracking-widest inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Explore <FiArrowRight className="ml-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '10+', label: 'Years Experience' },
              { number: '1000+', label: 'Garments Crafted' },
              { number: '100%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-serif text-4xl md:text-5xl font-light mb-2">{stat.number}</div>
                <div className="text-sm uppercase tracking-widest text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <p className="section-subtitle text-amber-400">Ready to Begin?</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-8">
            Let's Create Something<br />
            <span className="italic">Extraordinary</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
            Schedule a consultation and let us bring your vision to life with our expert craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/254726539925?text=Hi! I'd like to book a consultation for bespoke tailoring."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Consultation
            </a>
            <a
              href="https://www.instagram.com/adaborafashion"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold inline-flex items-center justify-center"
            >
              <FiInstagram className="mr-2" />
              Follow Us
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle">Visit Us</p>
              <h2 className="section-title text-gray-900 mb-8 line-decoration">
                Our Atelier
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FiMapPin className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">
                      SUPERIOR CENTER, 6TH FLOOR, SHOP M6<br />
                      Junction of Kenyatta Avenue & Kimathi Street<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <a
                    href="https://maps.app.goo.gl/gLQgACxQvhs4G62s9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center"
                  >
                    Get Directions
                    <FiArrowRight className="ml-3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176510825786!2d36.82082!3d-1.28333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNTkuOSJTIDM2wrA0OScxNS4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;