import React, { useState, useEffect } from 'react';
import { ArrowDown, MessageCircle, Eye } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = ["Computer Science Engineer", "UI/UX Designer"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseAtEnd = 2000;
  const pauseBeforeDelete = 1000;

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseBeforeDelete);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayedText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : (charIndex === currentPhrase.length ? pauseAtEnd : typingSpeed));

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseAtEnd, pauseBeforeDelete]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.1}px)`
          }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(${scrollY * -0.2}px) translateX(${scrollY * -0.1}px)`
          }}
        ></div>
        {/* Additional floating elements for enhanced parallax */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.1}deg)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-25"
          style={{
            transform: `translateY(${scrollY * -0.25}px) rotate(${scrollY * -0.05}deg)`
          }}
        ></div>
      </div>

      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      >
        <div className="text-center">
          {/* Animated Profile Image */}
          <div 
            className="relative inline-block mb-8"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`
            }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-1 shadow-2xl">
              <img 
                src="/anamul_picture.jpg" 
                alt="Md Anamul Haque" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-gray-900 animate-pulse"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
            Md Anamul <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Haque</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-light">
            <span className="dynamic-text">{displayedText}</span>
            <span className="blinking-cursor">|</span>
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in delay-300">
            Designing clean, user-first interfaces backed by technical insight.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-400">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="group flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Eye className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold">View My Work</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group flex items-center space-x-2 border-2 border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white hover:border-transparent px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold">Contact Me</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .blinking-cursor {
          animation: blink 1s infinite;
          color: #22d3ee;
          font-weight: normal;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}