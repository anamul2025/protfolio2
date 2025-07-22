import React from 'react';
import { Users, Award, Code, Heart, Trophy, Star } from 'lucide-react';

export default function Extracurricular() {
  const activities = [
    {
      title: "Teaching Assistant (TA)",
      description: "Served as a Teaching Assistant for university-level courses",
      period: "2023-2025",
      icon: "👨‍🏫",
      category: "Academic"
    },
    {
      title: "Red Crescent College Leader",
      description: "Led community service initiatives and humanitarian projects",
      period: "Leadership Role",
      icon: "🏥",
      category: "Leadership"
    },
    {
      title: "Campus Ambassador - Requin BD",
      description: "Represented the company and promoted their services on campus",
      period: "Brand Ambassador",
      icon: "🎯",
      category: "Professional"
    },
    {
      title: "Graphics Coordinator - IEEE CS Bangladesh",
      description: "Team SPARK - Coordinated graphics and design initiatives",
      period: "2023",
      icon: "🎨",
      category: "Technical"
    },
    {
      title: "Convocation Volunteer",
      description: "Volunteered in 5th Convocation ceremony and various university events",
      period: "Sept 2022",
      icon: "🎓",
      category: "Service"
    },
    {
      title: "Hackathon Participant",
      description: "Actively participated in national hackathons and coding competitions",
      period: "Multiple Events",
      icon: "💻",
      category: "Competition"
    }
  ];

  const achievements = [
    {
      title: "IEEEXtreme 16.0 Programming Competition",
      description: "Team: IIUC DWIP ELITE",
      date: "Oct 22, 2022",
      type: "Competition"
    },
    {
      title: "Runner-Up - Energy Quest Quiz",
      description: "IEEE PES Day 2023 Quiz Competition",
      date: "May 10, 2023",
      type: "Award"
    },
    {
      title: "Social Leadership Hackathon",
      description: "Organized by BYLC",
      date: "July 30-31, 2021",
      type: "Hackathon"
    },
    {
      title: "ICISET 2024 Participant",
      description: "National academic conference, interdisciplinary collaboration",
      date: "2024",
      type: "Conference"
    }
  ];

  return (
    <section id="extracurricular" className="py-20 bg-gradient-to-br from-blue-950 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Extracurricular <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Activities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Leadership, community service, and technical contributions beyond academics
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <div className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm text-cyan-300 text-sm rounded-full border border-white/20 inline-block mb-2">
                    {activity.category}
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {activity.title}
              </h3>
              
              <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                {activity.description}
              </p>
              
              <div className="flex items-center text-cyan-400 font-medium text-sm">
                <Star className="w-4 h-4 mr-2" />
                {activity.period}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <Trophy className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Key Achievements</h3>
            <p className="text-cyan-100">Recognition and awards for excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white">{achievement.title}</h4>
                  <span className="px-2 py-1 bg-white/20 text-xs rounded-full">{achievement.type}</span>
                </div>
                <p className="text-cyan-100 text-sm mb-2">{achievement.description}</p>
                <p className="text-cyan-200 text-xs">{achievement.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Personal Interests</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Coding', 'Teaching', 'Travelling', 'Learning', 'Reading', 'Cricket', 'Badminton'].map((hobby, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 backdrop-blur-lg text-gray-200 rounded-full border border-white/20 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}