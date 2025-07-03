import React from 'react';
import { Mic, BarChart3, Globe, BookOpen, MessageSquare, Award, Zap, Users, Brain } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Personalization',
      description: 'Advanced AI adapts to your learning style, pace, and preferences for maximum efficiency.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: MessageSquare,
      title: 'Real Conversation Practice',
      description: 'Practice authentic conversations in real-world scenarios with intelligent AI tutors.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Mic,
      title: 'Pronunciation Perfection',
      description: 'Get instant feedback on your pronunciation with cutting-edge speech recognition.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: BarChart3,
      title: 'Smart Progress Tracking',
      description: 'Detailed analytics and insights help you understand your learning journey.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Cultural Immersion',
      description: 'Learn cultural context and nuances that make you truly fluent, not just grammatically correct.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Accelerated Learning',
      description: 'Proven methods that help you achieve fluency 3x faster than traditional approaches.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: BookOpen,
      title: 'Structured Curriculum',
      description: 'Follow expertly designed learning paths from beginner to intermediate levels.',
      color: 'from-rose-500 to-orange-500'
    },
    {
      icon: Award,
      title: 'Achievement System',
      description: 'Stay motivated with badges, streaks, and milestones that celebrate your progress.',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Users,
      title: 'Multiple Tutor Personalities',
      description: 'Choose from patient, structured, or conversational tutors that match your learning preference.',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Powerful
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Features</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience the future of language learning with AI-powered features designed to accelerate your progress and make learning enjoyable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/15 h-full">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
            <p className="text-white/80 mb-6">Join thousands of learners who are already mastering languages faster with LearnLingo</p>
            <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 cursor-pointer">
              <Zap className="w-5 h-5 mr-2" />
              Experience All Features
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;