import React, { useState } from 'react';
import { ArrowLeft, Play, Star, Award, MessageCircle, Volume2 } from 'lucide-react';
import { Language, Tutor } from '../types';
import { tutorsByLanguage } from '../data/languages';

interface TutorSelectionProps {
  language: Language;
  onTutorSelect: (tutor: Tutor) => void;
  onBack: () => void;
}

const TutorSelection: React.FC<TutorSelectionProps> = ({ language, onTutorSelect, onBack }) => {
  const [playingPreview, setPlayingPreview] = useState<string | null>(null);
  const tutors = tutorsByLanguage[language.id] || [];

  console.log('TutorSelection rendered with:', { language, tutorsCount: tutors.length });

  const handleVoicePreview = (tutorId: string) => {
    console.log('Playing voice preview for tutor:', tutorId);
    setPlayingPreview(tutorId);
    // Simulate voice preview duration
    setTimeout(() => setPlayingPreview(null), 3000);
  };

  const handleTutorSelect = (tutor: Tutor) => {
    console.log('Tutor selected:', tutor);
    onTutorSelect(tutor);
  };

  const getPersonalityColor = (personality: string) => {
    if (personality.includes('Patient')) return 'from-green-400 to-emerald-500';
    if (personality.includes('Structured')) return 'from-red-400 to-pink-500';
    if (personality.includes('Conversational')) return 'from-blue-400 to-cyan-500';
    return 'from-purple-400 to-indigo-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center mb-12">
          <button
            onClick={onBack}
            className="flex items-center text-white/80 hover:text-white transition-colors duration-300 mr-6"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Languages
          </button>
          <div className="flex items-center">
            <span className="text-4xl mr-4">{language.flag}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {language.name} Tutors
              </h1>
              <p className="text-white/70 text-lg mt-2">
                Choose your perfect learning companion - {language.difficulty} Level ({language.level})
              </p>
            </div>
          </div>
        </div>

        {/* Debug Info */}
        <div className="mb-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
          <p className="text-white/80 text-sm">
            Debug: Language ID: {language.id} | Tutors found: {tutors.length}
          </p>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {tutors.map((tutor, index) => (
            <div
              key={tutor.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative backdrop-blur-md bg-white/10 rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105">
                {/* Avatar */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tutor.avatar}
                    alt={tutor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Voice Preview Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVoicePreview(tutor.id);
                    }}
                    className="absolute top-4 right-4 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-pink-500/50 transition-all duration-300"
                  >
                    {playingPreview === tutor.id ? (
                      <Volume2 className="w-5 h-5 animate-pulse" />
                    ) : (
                      <Play className="w-5 h-5 ml-1" />
                    )}
                  </button>

                  {/* Gender Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {tutor.gender}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Name and Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white">{tutor.name}</h3>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-5 h-5 fill-current mr-1" />
                      <span className="text-white font-semibold">{tutor.rating}</span>
                    </div>
                  </div>

                  {/* Personality Badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getPersonalityColor(tutor.personality)} shadow-lg mb-4`}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {tutor.personality}
                  </div>

                  {/* Description */}
                  <p className="text-white/80 mb-4 leading-relaxed">{tutor.description}</p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <div className="flex items-center text-white/70 mb-2">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Specialties</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tutor.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/20"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ElevenLabs Voice ID */}
                  <div className="mb-4 p-2 bg-white/5 rounded-lg">
                    <p className="text-white/50 text-xs">
                      ElevenLabs Voice ID: {tutor.elevenLabsVoiceId}
                    </p>
                  </div>

                  {/* Select Button */}
                  <button
                    onClick={() => handleTutorSelect(tutor)}
                    className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 hover:from-pink-400 hover:to-purple-500"
                  >
                    Choose {tutor.name}
                  </button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* No Tutors Available */}
        {tutors.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">👨‍🏫</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Tutors Found</h3>
            <p className="text-white/70">
              No tutors available for {language.name} - {language.difficulty} level (ID: {language.id})
            </p>
            <p className="text-white/50 text-sm mt-2">
              Available language IDs: {Object.keys(tutorsByLanguage).join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorSelection;