export interface Language {
  id: string;
  name: string;
  flag: string;
  tutorCount: number;
  difficulty: 'Beginner' | 'Intermediate';
  level: string; // A1-A2, B1-B2, HSK 1-2, N5-N4, etc.
}

export interface Tutor {
  id: string;
  name: string;
  gender: 'Male' | 'Female';
  personality: string;
  description: string;
  specialties: string[];
  rating: number;
  avatar: string;
  elevenLabsVoiceId: string; // For ElevenLabs API integration
  convaiAgentId?: string; // For ElevenLabs ConvAI integration
}

export interface UserSelection {
  language?: Language;
  tutor?: Tutor;
  step: 'hero' | 'language' | 'tutor' | 'learning';
}