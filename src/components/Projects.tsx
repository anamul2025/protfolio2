import React from 'react';
import { Code, Smartphone, Globe, Database, Shield, Brain, ShoppingCart, Car, BookOpen, Calculator } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "MRI-Based Brain Tumor Classification using CNN & XAI",
      description: "Undergraduate thesis focused on classifying brain tumors from MRI scans using deep learning and explainable AI",
      category: "AI/ML",
      icon: Brain,
      tech: ["CNN", "Deep Learning", "XAI", "Medical Imaging"],
      type: "Thesis Project"
    },
    {
      title: "Ride Sharing App Design",
      description: "Designed a user-friendly mobile app interface for a ride-sharing platform with essential UX features",
      category: "UI/UX Design",
      icon: Car,
      tech: ["Figma", "Mobile Design", "UX Research", "Prototyping"],
      type: "Design Project"
    },
    {
      title: "E-Commerce Project - ECOMART",
      description: "Developed a complete e-commerce web application with admin dashboard, product listings, and order management",
      category: "Full Stack",
      icon: ShoppingCart,
      tech: ["React", "Node.js", "MongoDB", "Admin Panel"],
      type: "Web Application"
    },
    {
      title: "Water Supply Management System",
      description: "Developed a system to monitor and manage municipal water supply data and operations",
      category: "System Design",
      icon: Database,
      tech: ["Database Design", "System Architecture", "Data Management"],
      type: "Management System"
    },
    {
      title: "Android Hacking with Metasploitable",
      description: "Explored ethical hacking techniques and Android vulnerabilities using Metasploitable for cybersecurity training",
      category: "Cybersecurity",
      icon: Shield,
      tech: ["Ethical Hacking", "Android Security", "Metasploitable", "Penetration Testing"],
      type: "Security Research"
    },
    {
      title: "Design of MPLS Protocol Using GNS3",
      description: "Simulated MPLS in a virtual network to evaluate performance metrics and routing efficiency",
      category: "Networking",
      icon: Globe,
      tech: ["GNS3", "MPLS", "Network Simulation", "Performance Analysis"],
      type: "Network Project"
    },
    {
      title: "Online Book Shop: BOOK HEAVEN",
      description: "Created a responsive online platform for book sales, including search, cart, and payment features",
      category: "E-Commerce",
      icon: BookOpen,
      tech: ["HTML/CSS", "JavaScript", "Payment Integration", "Responsive Design"],
      type: "Web Platform"
    },
    {
      title: "E-Commerce App Design",
      description: "Designed the UI/UX of a mobile e-commerce app for a smooth and modern shopping experience",
      category: "Mobile Design",
      icon: Smartphone,
      tech: ["Mobile UI", "UX Design", "Prototyping", "User Flow"],
      type: "Mobile App"
    },
    {
      title: "IIUC Supershop Management System",
      description: "Built a desktop-based system to handle inventory, billing, and reporting for a university supershop",
      category: "Desktop App",
      icon: Calculator,
      tech: ["Desktop Development", "Inventory Management", "Billing System"],
      type: "Management System"
    },
    {
      title: "E-Commerce Website (Amazon Clone)",
      description: "Built a fully functional e-commerce website mimicking Amazon's layout and features",
      category: "Web Development",
      icon: Globe,
      tech: ["Full Stack", "E-commerce", "Clone Development", "Feature Implementation"],
      type: "Web Application"
    },
    {
      title: "University Cafeteria Project",
      description: "Developed a web-based cafeteria system to streamline food ordering and payments",
      category: "Web Application",
      icon: Database,
      tech: ["Web Development", "Order Management", "Payment System"],
      type: "University Project"
    },
    {
      title: "IIUC Smart Car Parking System",
      description: "Created an automated parking system for efficient car space management",
      category: "IoT/Automation",
      icon: Car,
      tech: ["Automation", "Smart Systems", "Space Management"],
      type: "IoT Project"
    }
  ];

  const getIconColor = (category: string) => {
    const colors = {
      "AI/ML": "text-purple-400",
      "UI/UX Design": "text-cyan-400",
      "Full Stack": "text-green-400",
      "System Design": "text-blue-400",
      "Cybersecurity": "text-red-400",
      "Networking": "text-yellow-400",
      "E-Commerce": "text-orange-400",
      "Mobile Design": "text-pink-400",
      "Desktop App": "text-indigo-400",
      "Web Development": "text-teal-400",
      "Web Application": "text-emerald-400",
      "IoT/Automation": "text-violet-400"
    };
    return colors[category as keyof typeof colors] || "text-gray-400";
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive collection of academic and personal projects showcasing technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-white/20 hover:bg-white/10"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-white/10 backdrop-blur-sm rounded-lg group-hover:scale-110 transition-transform duration-300 border border-white/20`}>
                    <IconComponent className={`w-6 h-6 ${getIconColor(project.category)}`} />
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm text-cyan-300 text-xs rounded-full border border-white/20">
                      {project.category}
                    </span>
                    <div className="text-gray-400 text-xs mt-1">{project.type}</div>
                  </div>
                </div>

                {/* Project Content */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-200 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 backdrop-blur-sm text-gray-300 text-xs rounded-md border border-white/20 hover:bg-white/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Stats */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-cyan-100">Total Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-cyan-100">Technology Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1</div>
              <div className="text-cyan-100">Thesis Project</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-cyan-100">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}