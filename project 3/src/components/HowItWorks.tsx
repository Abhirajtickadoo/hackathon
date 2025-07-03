import React from 'react';
import { Languages, Users, Play, ArrowRight, BookOpen, MessageSquare, Award } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Languages,
      title: 'Choose Your Language & Level',
      description: 'Select from 9 popular languages and pick your perfect difficulty level - from beginner to intermediate.',
      color: 'from-emerald-500 to-teal-500',
      details: ['Beginner (A1-A2)', 'Intermediate (B1-B2)', 'Expert AI Tutors']
    },
    {
      number: '02',
      icon: Users,
      title: 'Select Your Perfect AI Tutor',
      description: 'Choose a tutor personality that matches your learning style from our diverse collection of AI tutors.',
      color: 'from-cyan-500 to-blue-500',
      details: ['Patient & Encouraging', 'Structured & Professional', 'Conversational & Fun']
    },
    {
      number: '03',
      icon: Play,
      title: 'Start Learning & Practicing',
      description: 'Begin your personalized language journey with real-time conversations, feedback, and progress tracking.',
      color: 'from-blue-500 to-indigo-500',
      details: ['Real-time conversations', 'Instant feedback', 'Progress tracking']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            How It
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get started with your language learning journey in just three simple steps and begin speaking confidently
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30 transform -translate-y-1/2 rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Step Card */}
                  <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg text-white font-bold text-lg`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6 mt-8">
                      <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-6">{step.description}</p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center justify-center text-white/60 text-sm"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full mr-3`}></div>
                          {detail}
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  </div>

                  {/* Arrow (Hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-lg">
                        <ArrowRight className="w-4 h-4 text-white/70" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Success Stories</h3>
            <p className="text-white/70">See what our learners achieve with LearnLingo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: '3x', description: 'Faster than traditional methods', icon: Award },
              { metric: '98%', description: 'Student satisfaction rate', icon: MessageSquare },
              { metric: '6 weeks', description: 'Average to conversational level', icon: BookOpen }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-xl text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.metric}
                  </div>
                  <p className="text-white/80">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-white/80 mb-6">Join thousands of learners who are already mastering new languages with LearnLingo's AI tutors</p>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
              <Play className="w-5 h-5 mr-2" />
              Start Learning Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;