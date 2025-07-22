import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Mobile App",
      description: "A comprehensive mobile shopping experience with intuitive navigation and seamless checkout process.",
      role: "Lead UI/UX Designer",
      tools: ["Figma", "Prototyping", "User Research", "React Native"],
      outcome: "40% increase in conversion rate",
      image: "🛍️",
      category: "Mobile Design"
    },
    {
      title: "SaaS Dashboard Platform",
      description: "Complex data visualization dashboard for enterprise clients with customizable widgets and real-time analytics.",
      role: "Product Designer & Frontend Developer",
      tools: ["Figma", "React", "D3.js", "API Integration"],
      outcome: "Reduced user training time by 60%",
      image: "📊",
      category: "Web Application"
    },
    {
      title: "Healthcare Patient Portal",
      description: "User-friendly patient management system focusing on accessibility and ease of use for all age groups.",
      role: "UX Researcher & Designer",
      tools: ["Adobe XD", "User Testing", "HTML/CSS", "WCAG Compliance"],
      outcome: "95% user satisfaction score",
      image: "🏥",
      category: "Healthcare"
    },
    {
      title: "Fintech Banking App",
      description: "Modern banking application with focus on security, trust, and seamless financial transactions.",
      role: "Senior UI Designer",
      tools: ["Figma", "Principle", "Swift UI", "Security Design"],
      outcome: "300K+ active users",
      image: "💳",
      category: "Financial"
    },
    {
      title: "Learning Management System",
      description: "Educational platform designed to enhance online learning experience with interactive features.",
      role: "UX/UI Designer & Developer",
      tools: ["Sketch", "InVision", "Vue.js", "Educational UX"],
      outcome: "2x engagement increase",
      image: "📚",
      category: "Education"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, combining user-centered design with technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-white/20 hover:bg-white/10"
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center overflow-hidden">
                <div className="text-6xl">{project.image}</div>
                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium text-white border border-white/20">
                  {project.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-200 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="font-medium text-white">Role: </span>
                    <span className="text-gray-200">{project.role}</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-white">Tools: </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm text-cyan-300 text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="font-medium text-white">Outcome: </span>
                    <span className="text-green-400 font-medium ml-2">{project.outcome}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/80 to-purple-600/80 backdrop-blur-sm hover:from-cyan-500 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm border border-white/20 hover:border-white/30">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Case Study</span>
                  </button>
                  <button className="flex items-center space-x-2 border border-white/20 hover:border-cyan-400/50 bg-white/5 backdrop-blur-sm text-gray-200 hover:text-cyan-400 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 text-sm">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            <span className="font-semibold">View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}