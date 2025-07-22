import React, { useEffect, useRef, useState } from 'react';
import { Award, Calendar, ExternalLink, BookOpen, Code, Users, Briefcase } from 'lucide-react';

export default function Certifications() {
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
              }, index * 150);
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

  const certifications = [
    {
      title: "User Experience (UX) Design Training",
      issuer: "Dept. of CSE, CUET under EDGE Project (ICT Division)",
      date: "Aug 2024 - Dec 2024",
      duration: "80 hours",
      category: "UX Design",
      icon: "🎨",
      featured: true
    },
    {
      title: "Deep Learning Certification",
      issuer: "Simplilearn",
      date: "Jan 21, 2025",
      category: "AI/ML",
      icon: "🧠",
      featured: true
    },
    {
      title: "Introduction to GAN Certification",
      issuer: "Simplilearn",
      date: "Jan 21, 2025",
      category: "AI/ML",
      icon: "🤖",
      featured: true
    },
    {
      title: "CareerX Program",
      issuer: "BYLC, supported by IKEA Foundation and Embassy of Netherlands",
      date: "Feb 16, 2023",
      duration: "Month-long blended program",
      category: "Leadership",
      icon: "🌟",
      featured: true
    },
    {
      title: "Crash Course on Python",
      issuer: "Google via Coursera",
      date: "Oct 12, 2024",
      category: "Programming",
      icon: "🐍"
    },
    {
      title: "SQL Essential Training",
      issuer: "LinkedIn Learning",
      date: "2024",
      category: "Database",
      icon: "🗄️"
    },
    {
      title: "Agile Project Management Certification",
      issuer: "HP LIFE Online Course",
      date: "Sept 10, 2024",
      category: "Management",
      icon: "📋"
    },
    {
      title: "MERN Stack Development Workshop",
      issuer: "Creative IT Institute IEEE CS BDC Team SPARK",
      date: "Oct 17, 2024",
      category: "Web Development",
      icon: "💻"
    },
    {
      title: "Build a Full Website using WordPress",
      issuer: "Coursera Project Network",
      date: "Oct 15, 2024",
      category: "Web Development",
      icon: "🌐"
    },
    {
      title: "Professional Outsourcing Training (Graphic Design)",
      issuer: "LEDP (ICT Division)",
      date: "2020",
      duration: "200 hours",
      category: "Design",
      icon: "🎭"
    }
  ];

  const workshops = [
    {
      title: "Programming with Python: Hands-on for Beginners",
      organizer: "IEEE IIUC SB, PES SBC, WIE Affinity Group",
      date: "May 14-15, 2022"
    },
    {
      title: "Workshop on How to Build Robust Python APIs",
      organizer: "IEEE IIUC SB",
      date: "Oct 11-13, 2023"
    },
    {
      title: "Workshop on Professional Industrial Automation",
      organizer: "IEEE PES IIUC SBC",
      date: "May 6, 2024"
    },
    {
      title: "IEEE PES YP Powering the Future Summit 2023",
      organizer: "IEEE",
      date: "2023",
      theme: "Accelerating Climate Solutions"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "UX Design": "from-cyan-500/20 to-blue-600/20 text-cyan-300",
      "AI/ML": "from-purple-500/20 to-pink-600/20 text-purple-300",
      "Leadership": "from-yellow-500/20 to-orange-600/20 text-yellow-300",
      "Programming": "from-green-500/20 to-emerald-600/20 text-green-300",
      "Database": "from-blue-500/20 to-indigo-600/20 text-blue-300",
      "Management": "from-red-500/20 to-rose-600/20 text-red-300",
      "Web Development": "from-teal-500/20 to-cyan-600/20 text-teal-300",
      "Design": "from-pink-500/20 to-purple-600/20 text-pink-300"
    };
    return colors[category as keyof typeof colors] || "from-gray-500/20 to-gray-600/20 text-gray-300";
  };

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Training</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development through certified programs
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.filter(cert => cert.featured).map((cert, index) => (
              <div
                ref={(el) => itemRefs.current[index] = el}
                key={index}
                className={`group bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-white/10 hover:border-white/20 hover:bg-white/10 transform ${
                  visibleItems.includes(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: visibleItems.includes(index) ? `${index * 200}ms` : '0ms'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(cert.category)} backdrop-blur-sm text-sm rounded-full border border-white/20`}>
                    {cert.category}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-gray-200 mb-3 text-sm">
                  {cert.issuer}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-cyan-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {cert.date}
                  </div>
                  {cert.duration && (
                    <div className="text-gray-400">
                      {cert.duration}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">All Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/10 hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex items-center mb-3">
                  <div className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <div className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(cert.category)} backdrop-blur-sm text-xs rounded-full border border-white/20`}>
                    {cert.category}
                  </div>
                </div>
                
                <h4 className="font-semibold text-white mb-2 text-sm group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.title}
                </h4>
                
                <p className="text-gray-300 mb-2 text-xs">
                  {cert.issuer}
                </p>
                
                <div className="text-cyan-400 text-xs">
                  {cert.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops & Seminars */}
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Workshops & Seminars</h3>
            <p className="text-cyan-100">Active participation in professional development events</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h4 className="font-semibold text-white mb-2">{workshop.title}</h4>
                <p className="text-cyan-100 text-sm mb-2">{workshop.organizer}</p>
                <div className="flex items-center justify-between">
                  <p className="text-cyan-200 text-xs">{workshop.date}</p>
                  {workshop.theme && (
                    <span className="px-2 py-1 bg-white/20 text-xs rounded-full">{workshop.theme}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
            <div className="text-gray-300">Total Certifications</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">8</div>
            <div className="text-gray-300">Skill Categories</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">280+</div>
            <div className="text-gray-300">Training Hours</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2025</div>
            <div className="text-gray-300">Latest Certification</div>
          </div>
        </div>
      </div>
    </section>
  );
}