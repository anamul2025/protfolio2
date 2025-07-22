import React from 'react';

export default function ClientCarousel() {
  // Using well-known tech company names that would be impressive for a UX designer
  const clients = [
    { name: 'Google', logo: '🔍' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Microsoft', logo: '🪟' },
    { name: 'Meta', logo: '📘' },
    { name: 'Netflix', logo: '🎬' },
    { name: 'Spotify', logo: '🎵' },
    { name: 'Uber', logo: '🚗' },
    { name: 'Airbnb', logo: '🏠' },
    { name: 'Slack', logo: '💬' },
    { name: 'Figma', logo: '🎨' },
    { name: 'Adobe', logo: '🎭' },
    { name: 'Shopify', logo: '🛒' }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-950 via-gray-900 to-black overflow-hidden relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10 pointer-events-none"></div>
      
      <div className="relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Industry Leaders</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Collaborating with innovative companies to create exceptional user experiences
          </p>
        </div>

        {/* Scrolling Logo Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group flex-shrink-0 flex items-center space-x-4 bg-white/5 backdrop-blur-lg rounded-xl px-6 py-4 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 min-w-[200px]"
              >
                {/* Logo/Icon */}
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                
                {/* Company Name */}
                <div className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors duration-300">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Custom CSS for infinite scroll animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Pause animation on hover */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}