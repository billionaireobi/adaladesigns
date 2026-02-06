import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#1A1A1A]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80')`,
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-amber-400 uppercase tracking-[0.4em] text-sm mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-4">About Us</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A legacy of craftsmanship, precision, and timeless elegance
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle">Our Journey</p>
              <h2 className="section-title text-gray-900 mb-8 line-decoration">
                A Tradition of Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  AdalaDesigns was founded with a singular vision: to bring the art of 
                  bespoke tailoring to Nairobi and beyond. What began as a passion for perfect 
                  fits and impeccable craftsmanship has grown into a trusted name in custom fashion.
                </p>
                <p>
                  Our journey started in 2013, and since then, we've had the privilege of dressing 
                  hundreds of distinguished gentlemen, from business leaders and entrepreneurs to 
                  grooms celebrating their most special day.
                </p>
                <p>
                  Every piece we create tells a story of precision, dedication, and the timeless 
                  art of tailoring. We believe that clothing is more than fabric and thread — it's 
                  an expression of personality, confidence, and success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
                  alt="Master Tailor at Work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-amber-600 flex items-center justify-center text-white text-center p-6">
                <div>
                  <div className="font-serif text-4xl font-light">10+</div>
                  <div className="text-xs uppercase tracking-widest mt-2">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-subtitle">What Defines Us</p>
            <h2 className="section-title text-gray-900">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: '✂️',
                title: 'Expert Craftsmanship',
                description: 'Every stitch is placed with precision by our master tailors who have honed their skills over decades.',
              },
              {
                icon: '🎯',
                title: 'Perfect Fit',
                description: 'We take over 30 measurements to ensure your garment fits like a second skin, tailored just for you.',
              },
              {
                icon: '✨',
                title: 'Premium Materials',
                description: 'We source only the finest fabrics from around the world — Italian wool, Egyptian cotton, and more.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-4xl bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {value.icon}
                </div>
                <h3 className="font-serif text-2xl text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-subtitle text-amber-400">The Journey</p>
            <h2 className="section-title">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your style, preferences, and requirements' },
              { step: '02', title: 'Measurement', desc: 'Precise measurements for the perfect fit' },
              { step: '03', title: 'Crafting', desc: 'Your garment is meticulously handcrafted' },
              { step: '04', title: 'Fitting', desc: 'Final adjustments for perfection' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-5xl text-amber-500/30 mb-4">{item.step}</div>
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-subtitle">Ready?</p>
          <h2 className="section-title text-gray-900 mb-8">
            Let's Create Your<br />
            <span className="italic text-amber-600">Perfect Garment</span>
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Schedule a consultation and experience the art of bespoke tailoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/254726539925?text=Hi! I'd like to book a consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center"
            >
              Book Consultation
              <FiArrowRight className="ml-3" />
            </a>
            <Link to="/catalogue" className="btn-secondary inline-flex items-center justify-center">
              View Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;