import React, { useState, useMemo } from 'react';
import { Search, Users, Star, BookOpen, Award, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { languages } from '../data/languages';

interface LanguageGridProps {
  onLanguageSelect: (language: Language) => void;
}

const LanguageGrid: React.FC<LanguageGridProps> = ({ onLanguageSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Group languages by name
  const groupedLanguages = useMemo(() => {
    const filtered = languages.filter(lang =>
      lang.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const grouped = filtered.reduce((acc, lang) => {
      if (!acc[lang.name]) {
        acc[lang.name] = [];
      }
      acc[lang.name].push(lang);
      return acc;
    }, {} as Record<string, Language[]>);

    // Sort languages to put English first
    const sortedKeys = Object.keys(grouped).sort((a, b) => {
      if (a === 'English') return -1;
      if (b === 'English') return 1;
      return a.localeCompare(b);
    });

    const sortedGrouped: Record<string, Language[]> = {};
    sortedKeys.forEach(key => {
      sortedGrouped[key] = grouped[key].sort((a, b) => {
        const order = { 'Beginner': 1, 'Intermediate': 2 };
        return order[a.difficulty] - order[b.difficulty];
      });
    });

    return sortedGrouped;
  }, [searchTerm]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'from-emerald-400 to-teal-500';
      case 'Intermediate': return 'from-amber-400 to-orange-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return <BookOpen className="w-4 h-4" />;
      case 'Intermediate': return <Award className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getLanguageGradient = (languageName: string) => {
    const gradients = {
      'English': 'from-blue-500 to-indigo-600',
      'Spanish': 'from-red-500 to-orange-600',
      'French': 'from-blue-600 to-purple-600',
      'German': 'from-gray-600 to-slate-700',
      'Italian': 'from-green-500 to-emerald-600',
      'Japanese': 'from-pink-500 to-rose-600',
      'Mandarin': 'from-red-600 to-yellow-500',
      'Portuguese': 'from-green-600 to-teal-600',
      'Arabic': 'from-amber-600 to-orange-700'
    };
    return gradients[languageName] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Language</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Select your preferred language and difficulty level. Each level comes with expert AI tutors ready to guide your learning journey.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/50" />
            </div>
            <input
              type="text"
              placeholder="Search languages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-300 text-lg"
            />
          </div>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedLanguages).map(([languageName, languageVariants], index) => {
            const mainLanguage = languageVariants[0];
            
            return (
              <div
                key={languageName}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 overflow-hidden">
                  {/* Main Language Header */}
                  <div className="p-6 text-center">
                    <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {mainLanguage.flag}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">{languageName}</h3>
                    
                    {/* Total Tutors */}
                    <div className="flex items-center justify-center text-white/80 mb-4">
                      <Users className="w-5 h-5 mr-2" />
                      <span className="text-lg">
                        {languageVariants.reduce((sum, lang) => sum + lang.tutorCount, 0)} Total Tutors
                      </span>
                    </div>

                    {/* Available Levels Indicator */}
                    <div className="flex justify-center space-x-2 mb-6">
                      {languageVariants.map((variant) => (
                        <div
                          key={variant.id}
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${getDifficultyColor(variant.difficulty)} shadow-lg`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Difficulty Levels - CLICKABLE */}
                  <div className="px-6 pb-6 space-y-3 cursor-pointer">
                    {languageVariants.map((variant, variantIndex) => (
                      <button
                        key={variant.id}
                        onClick={() => {
                          console.log('Language selected:', variant);
                          onLanguageSelect(variant);
                        }}
                        className="w-full group/level relative backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                        style={{ animationDelay: `${(index * 0.1) + (variantIndex * 0.05)}s` }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 bg-gradient-to-r ${getDifficultyColor(variant.difficulty)} rounded-xl flex items-center justify-center shadow-lg group-hover/level:scale-110 transition-transform duration-300`}>
                              {getDifficultyIcon(variant.difficulty)}
                            </div>
                            <div className="text-left">
                              <div className="text-white font-semibold text-lg">{variant.difficulty}</div>
                              <div className="text-white/60 text-sm">{variant.level}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <div className="text-right">
                              <div className="text-white/80 text-sm">{variant.tutorCount} tutors</div>
                              <div className="flex items-center text-yellow-400">
                                <Star className="w-3 h-3 fill-current mr-1" />
                                <span className="text-xs">4.8+</span>
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-white/60 group-hover/level:text-white group-hover/level:translate-x-1 transition-all duration-300" />
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div className={`absolute inset-0 pointer-events-none bg-gradient-to-r ${getDifficultyColor(variant.difficulty)} opacity-0 group-hover/level:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                      </button>
                    ))}
                  </div>

                  {/* Card Hover Effect */}
                  <div className={`absolute inset-0 pointer-events-none bg-gradient-to-r ${getLanguageGradient(languageName)} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {Object.keys(groupedLanguages).length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-6 animate-bounce">🔍</div>
            <h3 className="text-3xl font-bold text-white mb-4">No languages found</h3>
            <p className="text-white/70 text-lg">Try adjusting your search terms</p>
          </div>
        )}

        {/* Bottom Info */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose LearnLingo?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Structured Learning</h4>
                <p className="text-white/70 text-sm">Progressive difficulty levels designed by language experts</p>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Expert AI Tutors</h4>
                <p className="text-white/70 text-sm">Personalized tutors matched to your learning style</p>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Fast Progress</h4>
                <p className="text-white/70 text-sm">See results in weeks, not months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageGrid;