import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 250);
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px'
        }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content: "Anamul's design work exceeded our expectations. His ability to understand complex user needs and translate them into intuitive interfaces is remarkable.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      content: "Working with Anamul was a game-changer for our product. His technical background helped bridge the gap between design and development seamlessly.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content: "The user experience improvements Anamul implemented resulted in a 40% increase in our conversion rates. Highly recommend his services!",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              ref={(el) => itemRefs.current[index] = el}
              key={index}
              className={`group bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 relative border border-white/10 hover:border-white/20 hover:bg-white/10 transform ${
                visibleItems.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: visibleItems.includes(index) ? `${index * 200}ms` : '0ms'
              }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-200 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}