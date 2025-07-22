import React from 'react';
import { BookOpen, ExternalLink, Calendar, Users, Award, FileText } from 'lucide-react';

export default function Publications() {
  const publications = [
    {
      title: "Comparative Analysis of CNN Architectures and a Customized BT-CNN with XAI for Brain Tumor Classification",
      authors: "Md. Anamul Haque and M. M. Hassan",
      venue: "Department of Computer Science and Engineering, IIUC, Chittagong, Bangladesh",
      year: "2025",
      status: "Thesis Submitted",
      type: "Undergraduate Thesis",
      category: "AI/ML",
      description: "Research on brain tumor classification using convolutional neural networks with explainable AI techniques for medical imaging applications.",
      keywords: ["CNN", "XAI", "Brain Tumor", "Medical Imaging", "Deep Learning"],
      icon: "🧠"
    },
    {
      title: "Design and Performance Evaluation of an MPLS-Based Corporate Network Using OSPF and VLSM in GNS3",
      authors: "A. Al-Noman, C. R. Debi, Md. Anamul Haque, and M. S. Hasan",
      venue: "Proceedings of the QPAIN 2025 Conference",
      year: "2025",
      status: "Submitted",
      type: "Conference Paper",
      category: "Networking",
      paperId: "Paper ID: 1447",
      description: "Performance analysis of MPLS-based corporate networks using OSPF routing protocol and VLSM in simulated environments.",
      keywords: ["MPLS", "OSPF", "VLSM", "GNS3", "Network Performance"],
      icon: "🌐"
    },
    {
      title: "Assessment of Risk Perception and Subjective Norms Related to Mpox (Monkeypox) Among Adult Males in Bangladesh: A Cross-Sectional Study",
      authors: "N. Nazmunnahar, Md. Anamul Haque, B. Ahamed, Md. R. Islam, et al.",
      venue: "Health Science Reports",
      year: "2023",
      volume: "vol. 6, no. 6",
      month: "June",
      doi: "10.1002/hsr2.1352",
      status: "Published",
      type: "Journal Article",
      category: "Public Health",
      license: "CC BY-NC-ND 4.0",
      description: "Cross-sectional study examining risk perception and behavioral factors related to Mpox among adult males in Bangladesh.",
      keywords: ["Public Health", "Risk Perception", "Mpox", "Cross-sectional Study", "Bangladesh"],
      researchGate: "https://www.researchgate.net/profile/Md-Haque-408?ev=hdrxprf",
      icon: "🏥"
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      "Published": "from-green-500/20 to-emerald-600/20 text-green-300",
      "Submitted": "from-yellow-500/20 to-orange-600/20 text-yellow-300",
      "Thesis Submitted": "from-blue-500/20 to-indigo-600/20 text-blue-300"
    };
    return colors[status as keyof typeof colors] || "from-gray-500/20 to-gray-600/20 text-gray-300";
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/ML": "from-purple-500/20 to-pink-600/20 text-purple-300",
      "Networking": "from-cyan-500/20 to-blue-600/20 text-cyan-300",
      "Public Health": "from-red-500/20 to-rose-600/20 text-red-300"
    };
    return colors[category as keyof typeof colors] || "from-gray-500/20 to-gray-600/20 text-gray-300";
  };

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-blue-950 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Publications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Academic contributions and research work in AI/ML, networking, and public health
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-8 mb-16">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-white/20 hover:bg-white/10"
            >
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Publication Icon & Status */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {pub.icon}
                    </div>
                    <div className="lg:hidden space-y-2">
                      <div className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(pub.status)} backdrop-blur-sm text-sm rounded-full border border-white/20 inline-block`}>
                        {pub.status}
                      </div>
                      <div className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(pub.category)} backdrop-blur-sm text-sm rounded-full border border-white/20 inline-block ml-2`}>
                        {pub.category}
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block space-y-2">
                    <div className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(pub.status)} backdrop-blur-sm text-sm rounded-full border border-white/20 inline-block`}>
                      {pub.status}
                    </div>
                    <div className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(pub.category)} backdrop-blur-sm text-sm rounded-full border border-white/20 inline-block`}>
                      {pub.category}
                    </div>
                  </div>
                </div>

                {/* Publication Details */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                    {pub.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-200">
                      <Users className="w-4 h-4 mr-2 text-cyan-400" />
                      <span className="text-sm">{pub.authors}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-200">
                      <BookOpen className="w-4 h-4 mr-2 text-cyan-400" />
                      <span className="text-sm">{pub.venue}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-200">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                      <span className="text-sm">
                        {pub.month && `${pub.month} `}{pub.year}
                        {pub.volume && `, ${pub.volume}`}
                      </span>
                    </div>

                    {pub.paperId && (
                      <div className="flex items-center text-gray-200">
                        <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                        <span className="text-sm">{pub.paperId}</span>
                      </div>
                    )}

                    {pub.doi && (
                      <div className="flex items-center text-gray-200">
                        <Award className="w-4 h-4 mr-2 text-cyan-400" />
                        <span className="text-sm">DOI: {pub.doi}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {pub.description}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.keywords.map((keyword, keyIndex) => (
                      <span
                        key={keyIndex}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm text-gray-300 text-xs rounded-md border border-white/20"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    {pub.researchGate && (
                      <a
                        href={pub.researchGate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/80 to-purple-600/80 backdrop-blur-sm hover:from-cyan-500 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm border border-white/20 hover:border-white/30"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>ResearchGate</span>
                      </a>
                    )}
                    {pub.license && (
                      <span className="px-3 py-2 bg-white/5 backdrop-blur-sm text-gray-300 text-xs rounded-lg border border-white/20">
                        {pub.license}
                      </span>
                    )}
                  </div>
                </div>

                {/* Publication Type & Year */}
                <div className="hidden lg:block lg:col-span-1 text-right">
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-cyan-400">
                      {pub.year}
                    </div>
                    <div className="text-gray-300 font-medium">
                      {pub.type}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Profile Link */}
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <BookOpen className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Research Profile</h3>
          <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
            Explore my complete research portfolio and connect with me on academic platforms
          </p>
          <a
            href="https://www.researchgate.net/profile/Md-Haque-408?ev=hdrxprf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/30"
          >
            <ExternalLink className="w-5 h-5" />
            <span>View ResearchGate Profile</span>
          </a>
        </div>

        {/* Publication Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3</div>
            <div className="text-gray-300">Total Publications</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">1</div>
            <div className="text-gray-300">Published Papers</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3</div>
            <div className="text-gray-300">Research Areas</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2025</div>
            <div className="text-gray-300">Latest Research</div>
          </div>
        </div>
      </div>
    </section>
  );
}