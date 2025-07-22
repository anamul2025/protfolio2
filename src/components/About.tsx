import React from 'react';
import { Code, Palette, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const skills = [
    { category: 'Design', icon: Palette, items: ['UI/UX Design', 'User Research', 'Prototyping', 'Design Systems'] },
    { category: 'Technical', icon: Code, items: ['HTML/CSS', 'JavaScript', 'React', 'Git'] },
    { category: 'Soft Skills', icon: Users, items: ['Problem Solving', 'Collaboration', 'User Empathy', 'Communication'] },
    { category: 'Tools', icon: Lightbulb, items: ['Figma', 'Adobe XD', 'Sketch', 'API Knowledge'] }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/anamul_picture.jpg" 
                alt="Md Anamul Haque - UI/UX Designer" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400 rounded-full opacity-80 blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-80 blur-sm"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a passionate UI/UX designer with a strong Computer Science background, combining creative design thinking with technical expertise to create exceptional digital experiences. My unique blend of design sensibility and programming knowledge allows me to bridge the gap between aesthetics and functionality.
              </p>
              <p>
                With years of experience in user-centered design and development, I specialize in creating intuitive interfaces that not only look beautiful but also solve real user problems. I believe that great design is invisible – it simply works, making users' lives easier and more enjoyable.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.category}
                className="group p-6 bg-white/5 backdrop-blur-lg rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-white/10 hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <IconComponent className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-white">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-200 text-sm flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}