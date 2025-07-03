import React from 'react';
import { Languages, Globe, Sparkles, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  onStartLearning: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartLearning }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4AA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Glassmorphism Container */}
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          {/* Brand Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Brand Name */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                LearnLingo
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-white/90">
              Master Any Language
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              with Your Personal AI Tutor
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience personalized 1-on-1 conversational learning with AI tutors tailored to your level and learning style
          </p>

          {/* Floating Language Icons */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {['us', ':es:', ':fr:', ':de:', ':it:', ':jp:', ':cn:', ':flag-br:', ':flag-sa:'].map((flag, index) => (
              <div
                key={index}
                className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl border border-white/30 shadow-lg hover:scale-110 hover:bg-white/30 transition-all duration-300 cursor-pointer"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animation: 'bounce 2s infinite'
                }}
              >
                {flag}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => {
              console.log('Start Your Journey clicked');
              onStartLearning();
            }}
            className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-110 hover:from-emerald-400 hover:to-teal-500 mb-8"
          >
            <Globe className="w-7 h-7 mr-4 group-hover:rotate-12 transition-transform duration-300" />
            Start Your Journey
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
          </button>

          {/* Stats */}
          <div className="flex justify-center space-x-12 text-center">
            <div className="text-white/90 group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">100K+</div>
              <div className="text-sm text-white/70">Active Learners</div>
            </div>
            <div className="text-white/90 group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">9</div>
              <div className="text-sm text-white/70">Languages</div>
            </div>
            <div className="text-white/90 group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">98%</div>
              <div className="text-sm text-white/70">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;