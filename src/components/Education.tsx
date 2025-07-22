import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
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
              }, index * 200); // Stagger animation by 200ms for each item
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

  const education = [
    {
      institution: "International Islamic University Chittagong",
      degree: "B.Sc in Computer Science and Engineering",
      grade: "CGPA: 3.625/4.00",
      period: "January 2021 – January 2025",
      location: "Chittagong, Bangladesh",
      type: "Bachelor's Degree",
      icon: "🎓"
    },
    {
      institution: "Chittagong Cantonment Public College",
      degree: "Higher Secondary Certificate (HSC)",
      grade: "GPA: 4.33/5.00",
      period: "July 2017 – July 2019",
      location: "Chittagong, Bangladesh",
      type: "Higher Secondary",
      icon: "📚"
    },
    {
      institution: "Al Zaber Institute",
      degree: "Secondary School Certificate (SSC)",
      grade: "GPA: 5.00/5.00",
      period: "January 2010 – July 2017",
      location: "Chittagong, Bangladesh",
      type: "Secondary School",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Academic foundation that shaped my technical expertise and design thinking
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              ref={(el) => itemRefs.current[index] = el}
              key={index}
              className={`group bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-white/10 hover:border-white/20 hover:bg-white/10 transform ${
                visibleItems.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: visibleItems.includes(index) ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className="grid lg:grid-cols-4 gap-6 items-center">
                {/* Institution Icon & Type */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {edu.icon}
                    </div>
                    <div className="lg:hidden">
                      <div className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm text-cyan-300 text-sm rounded-full border border-white/20">
                        {edu.type}
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm text-cyan-300 text-sm rounded-full border border-white/20 inline-block">
                      {edu.type}
                    </div>
                  </div>
                </div>

                {/* Institution & Degree */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {edu.institution}
                  </h3>
                  <p className="text-gray-200 font-medium mb-3">
                    {edu.degree}
                  </p>
                  
                  {/* Grade with Award Icon */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">
                      {edu.grade}
                    </span>
                  </div>

                  {/* Period & Location for mobile */}
                  <div className="lg:hidden space-y-2">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Period & Location for desktop */}
                <div className="hidden lg:block lg:col-span-1 text-right">
                  <div className="space-y-3">
                    <div className="flex items-center justify-end text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>
                    <div className="flex items-center justify-end text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievements Summary */}
        <div 
          ref={(el) => itemRefs.current[education.length] = el}
          className={`mt-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-8 text-white transition-all duration-700 transform ${
            visibleItems.includes(education.length) 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
          style={{
            transitionDelay: visibleItems.includes(education.length) ? `${education.length * 100}ms` : '0ms'
          }}
        >
          <div className="text-center mb-8">
            <GraduationCap className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Academic Excellence</h3>
            <p className="text-cyan-100">Consistent high performance throughout my educational journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">3.625</div>
              <div className="text-cyan-100">University CGPA</div>
              <div className="text-sm text-cyan-200 mt-1">out of 4.00</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.33</div>
              <div className="text-cyan-100">HSC GPA</div>
              <div className="text-sm text-cyan-200 mt-1">out of 5.00</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5.00</div>
              <div className="text-cyan-100">SSC GPA</div>
              <div className="text-sm text-cyan-200 mt-1">Perfect Score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}