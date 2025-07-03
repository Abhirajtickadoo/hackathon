import { Language, Tutor } from '../types';

export const languages: Language[] = [
  // English - First language
  { id: 'english-beginner', name: 'English', flag: '🇺🇸', tutorCount: 15, difficulty: 'Beginner', level: 'A1-A2' },
  { id: 'english-intermediate', name: 'English', flag: '🇺🇸', tutorCount: 12, difficulty: 'Intermediate', level: 'B1-B2' },
  
  // Spanish
  { id: 'spanish-beginner', name: 'Spanish', flag: '🇪🇸', tutorCount: 14, difficulty: 'Beginner', level: 'A1-A2' },
  { id: 'spanish-intermediate', name: 'Spanish', flag: '🇪🇸', tutorCount: 10, difficulty: 'Intermediate', level: 'B1-B2' },
  
  // French
  { id: 'french-beginner', name: 'French', flag: '🇫🇷', tutorCount: 12, difficulty: 'Beginner', level: 'A1-A2' },
  { id: 'french-intermediate', name: 'French', flag: '🇫🇷', tutorCount: 9, difficulty: 'Intermediate', level: 'B1-B2' },
  
  // German
  { id: 'german-beginner', name: 'German', flag: '🇩🇪', tutorCount: 10, difficulty: 'Beginner', level: 'A1-A2' },
  { id: 'german-intermediate', name: 'German', flag: '🇩🇪', tutorCount: 8, difficulty: 'Intermediate', level: 'B1-B2' },
  
  // Italian
  { id: 'italian-beginner', name: 'Italian', flag: '🇮🇹', tutorCount: 11, difficulty: 'Beginner', level: 'A1-A2' },
  { id: 'italian-intermediate', name: 'Italian', flag: '🇮🇹', tutorCount: 8, difficulty: 'Intermediate', level: 'B1-B2' },
  
  // Japanese
  { id: 'japanese-beginner', name: 'Japanese', flag: '🇯🇵', tutorCount: 9, difficulty: 'Beginner', level: 'N5-N4' },
  { id: 'japanese-intermediate', name: 'Japanese', flag: '🇯🇵', tutorCount: 6, difficulty: 'Intermediate', level: 'N3-N2' },
  
  // Mandarin
  { id: 'mandarin-beginner', name: 'Mandarin', flag: '🇨🇳', tutorCount: 13, difficulty: 'Beginner', level: 'HSK 1-2' },
  { id: 'mandarin-intermediate', name: 'Mandarin', flag: '🇨🇳', tutorCount: 9, difficulty: 'Intermediate', level: 'HSK 3-4' },
  
  // Portuguese
  { id: 'portuguese-beginner', name: 'Portuguese', flag: '🇧🇷', tutorCount: 8, difficulty: 'Beginner', level: 'A1-A2' },
  { id: 'portuguese-intermediate', name: 'Portuguese', flag: '🇧🇷', tutorCount: 6, difficulty: 'Intermediate', level: 'B1-B2' },
  
  // Arabic
  { id: 'arabic-beginner', name: 'Arabic', flag: '🇸🇦', tutorCount: 7, difficulty: 'Beginner', level: 'A1-A2' },
  { id: 'arabic-intermediate', name: 'Arabic', flag: '🇸🇦', tutorCount: 5, difficulty: 'Intermediate', level: 'B1-B2' }
];

// ElevenLabs ConvAI Agent IDs mapping
export const convaiAgentIds: Record<string, string> = {
  'italian-beginner': 'agent_01jz6105hefbh9pg84qb4zmazw',
  'italian-intermediate': 'agent_01jz6105hefbh9pg84qb4zmazw',
  'arabic-beginner': 'agent_01jz60tvfterbt3c792keg6k94',
  'arabic-intermediate': 'agent_01jz60tvfterbt3c792keg6k94',
  'german-beginner': 'agent_01jz5zt322exe88cksd5kf0f2s',
  'german-intermediate': 'agent_01jz5zt322exe88cksd5kf0f2s',
  'portuguese-beginner': 'agent_01jz5zsjdxfpe8y4aygxd3wtzk',
  'portuguese-intermediate': 'agent_01jz5zsjdxfpe8y4aygxd3wtzk',
  'french-beginner': 'agent_01jz5tvth1egwt9f1ytf14b9gx',
  'french-intermediate': 'agent_01jz5tvth1egwt9f1ytf14b9gx'
};

export const tutorsByLanguage: Record<string, Tutor[]> = {
  'english-beginner': [
    {
      id: 'sarah-english-beginner',
      name: 'Sarah',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Warm and supportive, perfect for building confidence in English basics',
      specialties: ['Pronunciation', 'Grammar Basics', 'Everyday Conversation'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'sarah-voice-id'
    },
    {
      id: 'mike-english-beginner',
      name: 'Mike',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Makes learning English enjoyable with interactive conversations',
      specialties: ['Speaking Practice', 'Vocabulary Building', 'Cultural Context'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'mike-voice-id'
    }
  ],
  'english-intermediate': [
    {
      id: 'jessica-english-intermediate',
      name: 'Jessica',
      gender: 'Female',
      personality: 'Structured & Professional',
      description: 'Focused on advancing your English to the next level',
      specialties: ['Business English', 'Academic Writing', 'Advanced Grammar'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'jessica-voice-id'
    }
  ],
  'spanish-beginner': [
    {
      id: 'maria-spanish-beginner',
      name: 'María',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Warm and supportive, perfect for building confidence in Spanish',
      specialties: ['Pronunciation', 'Basic Grammar', 'Travel Spanish'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'maria-voice-id'
    }
  ],
  'spanish-intermediate': [
    {
      id: 'sofia-spanish-intermediate',
      name: 'Sofía',
      gender: 'Female',
      personality: 'Structured & Professional',
      description: 'Disciplined approach with excellent results for intermediate Spanish',
      specialties: ['Advanced Grammar', 'Business Spanish', 'Academic Writing'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'sofia-voice-id'
    }
  ],
  'french-beginner': [
    {
      id: 'claire-french-beginner',
      name: 'Claire',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Gentle guidance with authentic Parisian accent',
      specialties: ['Pronunciation', 'Cultural Context', 'Travel French'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'claire-voice-id',
      convaiAgentId: 'agent_01jz5tvth1egwt9f1ytf14b9gx'
    },
    {
      id: 'pierre-french-beginner',
      name: 'Pierre',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Brings French culture to life through conversation',
      specialties: ['Everyday French', 'Cultural Context', 'Basic Grammar'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'pierre-voice-id',
      convaiAgentId: 'agent_01jz5tvth1egwt9f1ytf14b9gx'
    }
  ],
  'french-intermediate': [
    {
      id: 'isabelle-french-intermediate',
      name: 'Isabelle',
      gender: 'Female',
      personality: 'Sophisticated & Refined',
      description: 'Perfect French with literary and cultural depth',
      specialties: ['Literature', 'Advanced Grammar', 'Business French'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'isabelle-voice-id',
      convaiAgentId: 'agent_01jz5tvth1egwt9f1ytf14b9gx'
    }
  ],
  'german-beginner': [
    {
      id: 'greta-german-beginner',
      name: 'Greta',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Supportive approach to German language learning',
      specialties: ['Grammar Basics', 'Pronunciation', 'Everyday German'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'greta-voice-id',
      convaiAgentId: 'agent_01jz5zt322exe88cksd5kf0f2s'
    },
    {
      id: 'hans-german-beginner',
      name: 'Hans',
      gender: 'Male',
      personality: 'Structured & Professional',
      description: 'Methodical approach to German fundamentals',
      specialties: ['Grammar', 'Business German', 'Technical Vocabulary'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'hans-voice-id',
      convaiAgentId: 'agent_01jz5zt322exe88cksd5kf0f2s'
    }
  ],
  'german-intermediate': [
    {
      id: 'ingrid-german-intermediate',
      name: 'Ingrid',
      gender: 'Female',
      personality: 'Structured & Professional',
      description: 'Advanced German with focus on precision and accuracy',
      specialties: ['Advanced Grammar', 'Business German', 'Academic Writing'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'ingrid-voice-id',
      convaiAgentId: 'agent_01jz5zt322exe88cksd5kf0f2s'
    }
  ],
  'italian-beginner': [
    {
      id: 'giulia-italian-beginner',
      name: 'Giulia',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Warm Italian hospitality in language learning',
      specialties: ['Pronunciation', 'Cultural Context', 'Travel Italian'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'giulia-voice-id',
      convaiAgentId: 'agent_01jz6105hefbh9pg84qb4zmazw'
    },
    {
      id: 'marco-italian-beginner',
      name: 'Marco',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Passionate about sharing Italian language and culture',
      specialties: ['Everyday Italian', 'Food & Culture', 'Basic Grammar'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'marco-voice-id',
      convaiAgentId: 'agent_01jz6105hefbh9pg84qb4zmazw'
    }
  ],
  'italian-intermediate': [
    {
      id: 'valentina-italian-intermediate',
      name: 'Valentina',
      gender: 'Female',
      personality: 'Sophisticated & Refined',
      description: 'Elegant Italian with cultural sophistication',
      specialties: ['Literature', 'Art & Culture', 'Business Italian'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'valentina-voice-id',
      convaiAgentId: 'agent_01jz6105hefbh9pg84qb4zmazw'
    }
  ],
  'japanese-beginner': [
    {
      id: 'yuki-japanese-beginner',
      name: 'Yuki',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Gentle introduction to Japanese language and culture',
      specialties: ['Hiragana/Katakana', 'Basic Grammar', 'Cultural Context'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'yuki-voice-id'
    }
  ],
  'japanese-intermediate': [
    {
      id: 'akiko-japanese-intermediate',
      name: 'Akiko',
      gender: 'Female',
      personality: 'Sophisticated & Refined',
      description: 'Advanced Japanese with cultural depth',
      specialties: ['Kanji', 'Literature', 'Business Japanese'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'akiko-voice-id'
    }
  ],
  'mandarin-beginner': [
    {
      id: 'li-wei-mandarin-beginner',
      name: 'Li Wei',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Gentle introduction to Mandarin with focus on tones',
      specialties: ['Pinyin', 'Tones', 'Basic Characters'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'li-wei-voice-id'
    }
  ],
  'mandarin-intermediate': [
    {
      id: 'liu-yan-mandarin-intermediate',
      name: 'Liu Yan',
      gender: 'Female',
      personality: 'Sophisticated & Refined',
      description: 'Advanced Mandarin with cultural sophistication',
      specialties: ['Literature', 'Classical Chinese', 'Business Chinese'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'liu-yan-voice-id'
    }
  ],
  'portuguese-beginner': [
    {
      id: 'ana-portuguese-beginner',
      name: 'Ana',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Warm Brazilian approach to Portuguese learning',
      specialties: ['Pronunciation', 'Brazilian Culture', 'Travel Portuguese'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'ana-voice-id',
      convaiAgentId: 'agent_01jz5zsjdxfpe8y4aygxd3wtzk'
    },
    {
      id: 'carlos-portuguese-beginner',
      name: 'Carlos',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Energetic approach to Portuguese with cultural insights',
      specialties: ['Everyday Portuguese', 'Music & Culture', 'Basic Grammar'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'carlos-portuguese-voice-id',
      convaiAgentId: 'agent_01jz5zsjdxfpe8y4aygxd3wtzk'
    }
  ],
  'portuguese-intermediate': [
    {
      id: 'camila-portuguese-intermediate',
      name: 'Camila',
      gender: 'Female',
      personality: 'Sophisticated & Refined',
      description: 'Advanced Portuguese with cultural depth',
      specialties: ['Literature', 'Business Portuguese', 'Regional Variations'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'camila-voice-id',
      convaiAgentId: 'agent_01jz5zsjdxfpe8y4aygxd3wtzk'
    }
  ],
  'arabic-beginner': [
    {
      id: 'fatima-arabic-beginner',
      name: 'Fatima',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Gentle introduction to Arabic language and script',
      specialties: ['Arabic Script', 'Pronunciation', 'Cultural Context'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'fatima-voice-id',
      convaiAgentId: 'agent_01jz60tvfterbt3c792keg6k94'
    },
    {
      id: 'omar-arabic-beginner',
      name: 'Omar',
      gender: 'Male',
      personality: 'Structured & Professional',
      description: 'Methodical approach to Arabic fundamentals',
      specialties: ['Grammar', 'Writing', 'Classical Arabic'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'omar-voice-id',
      convaiAgentId: 'agent_01jz60tvfterbt3c792keg6k94'
    }
  ],
  'arabic-intermediate': [
    {
      id: 'layla-arabic-intermediate',
      name: 'Layla',
      gender: 'Female',
      personality: 'Sophisticated & Refined',
      description: 'Advanced Arabic with literary and cultural depth',
      specialties: ['Literature', 'Classical Arabic', 'Business Arabic'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'layla-voice-id',
      convaiAgentId: 'agent_01jz60tvfterbt3c792keg6k94'
    }
  ]
};