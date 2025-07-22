import React, { useEffect, useRef, useState } from 'react';
import { Palette, Code, Database, Smartphone, Globe, Users } from 'lucide-react';

export default function Skills() {
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
              }, index * 200);
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

  const skillCategories = [
    {
      title: "Design Tools",
      icon: Palette,
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe XD", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "Principle", level: 80 }
      ]
    },
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS Design", level: 90 },
        { name: "Android Design", level: 88 }
      ]
    },
    {
      title: "Backend & APIs",
      icon: Database,
      skills: [
        { name: "REST APIs", level: 85 },
        { name: "GraphQL", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "Database Design", level: 80 }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "Responsive Design", level: 98 },
        { name: "Progressive Web Apps", level: 85 },
        { name: "SEO Optimization", level: 80 },
        { name: "Web Performance", level: 88 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "User Research", level: 92 },
        { name: "Problem Solving", level: 95 },
        { name: "Team Collaboration", level: 90 },
        { name: "Client Communication", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-950 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive skill set spanning design, development, and user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                ref={(el) => itemRefs.current[index] = el}
                key={index}
                className={`group bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:shadow-lg transition-all duration-700 hover:-translate-y-2 border border-white/10 hover:border-white/20 hover:bg-white/10 transform ${
                  visibleItems.includes(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: visibleItems.includes(index) ? `${index * 150}ms` : '0ms'
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <IconComponent className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out shadow-lg"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Overview */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-cyan-100">Design Tools Mastered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-cyan-100">Programming Languages</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-cyan-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-cyan-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}