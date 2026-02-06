import { FiMapPin, FiPhone, FiMail, FiInstagram, FiClock, FiArrowRight } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-[#1A1A1A]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-amber-400 uppercase tracking-[0.4em] text-sm mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            We'd love to hear from you. Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p className="section-subtitle">Visit Our Atelier</p>
              <h2 className="section-title text-gray-900 mb-10 line-decoration">
                Let's Meet
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-amber-600 text-white flex-shrink-0">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      SUPERIOR CENTER, 6TH FLOOR, SHOP M6<br />
                      Junction of Kenyatta Avenue & Kimathi Street<br />
                      Nairobi, Kenya
                    </p>
                    <a
                      href="https://maps.app.goo.gl/gLQgACxQvhs4G62s9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-amber-600 mt-3 text-sm uppercase tracking-widest hover:text-amber-700 transition-colors"
                    >
                      Get Directions <FiArrowRight className="ml-2" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-amber-600 text-white flex-shrink-0">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">Phone</h3>
                    <a
                      href="tel:+254726539925"
                      className="text-gray-600 hover:text-amber-600 transition-colors text-lg"
                    >
                      +254 726 539 925
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-amber-600 text-white flex-shrink-0">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">Email</h3>
                    <a
                      href="mailto:info@ti-worldwide.com"
                      className="text-gray-600 hover:text-amber-600 transition-colors text-lg"
                    >
                      info@ti-worldwide.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-amber-600 text-white flex-shrink-0">
                    <FiClock size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-8">
              {/* WhatsApp Card */}
              <div className="bg-green-50 border border-green-200 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-gray-900">WhatsApp</h3>
                    <p className="text-green-600 text-sm">Fastest Response</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Get instant responses and browse our latest designs directly on WhatsApp.
                </p>
                <a
                  href="https://wa.me/254726539925?text=Hi! I'm interested in your tailoring services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 transition-colors duration-300 uppercase tracking-widest text-sm"
                >
                  Message on WhatsApp
                </a>
              </div>

              {/* Instagram Card */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <FiInstagram className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-gray-900">Instagram</h3>
                    <p className="text-purple-600 text-sm">@adaborafashion</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Follow us for the latest designs, behind-the-scenes, and style inspiration.
                </p>
                <a
                  href="https://www.instagram.com/adaborafashion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-4 px-6 transition-colors duration-300 uppercase tracking-widest text-sm"
                >
                  Follow on Instagram
                </a>
              </div>

              {/* Services */}
              <div className="bg-gray-50 p-8">
                <h3 className="font-serif text-xl text-gray-900 mb-6">Our Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Bespoke Suits', 'Traditional Wear', 'Custom Designs', 'Alterations', 'Wedding Attire', 'Corporate Wear'].map((service) => (
                    <div key={service} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-600"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176510825786!2d36.82082!3d-1.28333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNTkuOSJTIDM2wrA0OScxNS4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle">Common Questions</p>
            <h2 className="section-title text-gray-900">FAQ</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How long does it take to complete a bespoke suit?',
                answer: 'A bespoke suit typically takes 2-4 weeks to complete, depending on the complexity of the design and current orders. Rush orders may be accommodated for an additional fee.',
              },
              {
                question: 'Do you provide measurements and fittings?',
                answer: 'Yes! We provide complimentary consultations and fittings at our atelier. Our master tailors will take precise measurements to ensure the perfect fit.',
              },
              {
                question: 'What fabrics do you work with?',
                answer: 'We work with premium fabrics sourced from around the world, including Italian wool, Egyptian cotton, English tweeds, and specialty materials for every occasion.',
              },
              {
                question: 'Can you create custom designs?',
                answer: 'Absolutely! We specialize in bringing your unique vision to life. Our designers will work closely with you to create something truly one-of-a-kind.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-8">
                <h3 className="font-serif text-xl text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;