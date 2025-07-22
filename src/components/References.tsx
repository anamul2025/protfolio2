import React from 'react';
import { User, Mail, Phone, Briefcase, GraduationCap } from 'lucide-react';

export default function References() {
  const references = [
    {
      name: "Mr. Mohammad Mahadi Hassan",
      title: "Associate Professor",
      department: "Department of Computer Science and Engineering",
      institution: "International Islamic University Chittagong (IIUC)",
      phone: "+880 1957719040",
      email: "mahadi.cse@yahoo.com",
      relationship: "Thesis Supervisor",
      icon: "👨‍🏫",
      category: "Academic"
    },
    {
      name: "Md. Saiful Islam",
      title: "Contractual Staff",
      department: "CARE Bangladesh",
      institution: "Former Lecturer, Department of Computer Science and Engineering, IIUC",
      email: "Engr.smsaif@gmail.com",
      relationship: "Former Lecturer & Mentor",
      icon: "👨‍💼",
      category: "Professional"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Academic": "from-blue-500/20 to-indigo-600/20 text-blue-300",
      "Professional": "from-green-500/20 to-emerald-600/20 text-green-300"
    };
    return colors[category as keyof typeof colors] || "from-gray-500/20 to-gray-600/20 text-gray-300";
  };

  return (
    <section id="references" className="py-20 bg-gradient-to-br from-blue-950 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">References</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted professionals who can speak to my work ethic and capabilities
          </p>
        </div>

        {/* References Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {references.map((reference, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-white/20 hover:bg-white/10"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {reference.icon}
                  </div>
                  <div>
                    <div className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(reference.category)} backdrop-blur-sm text-sm rounded-full border border-white/20 inline-block`}>
                      {reference.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* Name and Title */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {reference.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-200">
                    <Briefcase className="w-4 h-4 mr-3 text-cyan-400" />
                    <span className="font-medium">{reference.title}</span>
                  </div>
                  <div className="flex items-start text-gray-200">
                    <GraduationCap className="w-4 h-4 mr-3 text-cyan-400 mt-0.5" />
                    <div>
                      <div>{reference.department}</div>
                      <div className="text-sm text-gray-300 mt-1">{reference.institution}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-200">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <a 
                    href={`mailto:${reference.email}`}
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    {reference.email}
                  </a>
                </div>
                {reference.phone && (
                  <div className="flex items-center text-gray-200">
                    <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                    <a 
                      href={`tel:${reference.phone}`}
                      className="hover:text-cyan-400 transition-colors duration-200"
                    >
                      {reference.phone}
                    </a>
                  </div>
                )}
              </div>

              {/* Relationship */}
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center text-gray-300">
                  <User className="w-4 h-4 mr-3 text-cyan-400" />
                  <span className="text-sm font-medium">{reference.relationship}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reference Note */}
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <User className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Professional References</h3>
            <p className="text-cyan-100 mb-6 leading-relaxed">
              These distinguished professionals have worked closely with me and can provide detailed insights 
              into my technical capabilities, work ethic, and professional character. They are available to 
              discuss my qualifications and contributions upon request.
            </p>
            <div className="text-sm text-cyan-200">
              References available upon request for serious inquiries
            </div>
          </div>
        </div>

        {/* Reference Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2</div>
            <div className="text-gray-300">Professional References</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">1</div>
            <div className="text-gray-300">Academic Supervisor</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-gray-300">Recommendation Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}