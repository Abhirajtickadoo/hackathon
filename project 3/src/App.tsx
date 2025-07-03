import React, { useState } from 'react';
import { UserSelection } from './types';
import HeroSection from './components/HeroSection';
import LanguageGrid from './components/LanguageGrid'; 
import TutorSelection from './components/TutorSelection';
import LearningInterface from './components/LearningInterface';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';

function App() {
  const [userSelection, setUserSelection] = useState<UserSelection>({
    step: 'hero'
  });

  const handleStartLearning = () => {
    console.log('Starting learning journey...');
    setUserSelection({ step: 'language' });
  };

  const handleLanguageSelect = (language: any) => {
    console.log('Language selected in App:', language);
    setUserSelection({
      language,
      step: 'tutor'
    });
  };

  const handleTutorSelect = (tutor: any) => {
    console.log('Tutor selected in App:', tutor);
    setUserSelection({
      ...userSelection,
      tutor,
      step: 'learning'
    });
  };

  const handleBack = () => {
    console.log('Going back from step:', userSelection.step);
    if (userSelection.step === 'tutor') {
      setUserSelection({ step: 'language' });
    } else if (userSelection.step === 'learning') {
      setUserSelection({
        language: userSelection.language,
        step: 'tutor'
      });
    } else if (userSelection.step === 'language') {
      setUserSelection({ step: 'hero' });
    }
  };

  // Debug: Log current state
  console.log('Current user selection:', userSelection);

  if (userSelection.step === 'learning' && userSelection.language && userSelection.tutor) {
    console.log('Rendering LearningInterface');
    return (
      <LearningInterface
        language={userSelection.language}
        tutor={userSelection.tutor}
        onBack={handleBack}
      />
    );
  }

  if (userSelection.step === 'tutor' && userSelection.language) {
    console.log('Rendering TutorSelection for language:', userSelection.language);
    return (
      <TutorSelection
        language={userSelection.language}
        onTutorSelect={handleTutorSelect}
        onBack={handleBack}
      />
    );
  }

  if (userSelection.step === 'language') {
    console.log('Rendering LanguageGrid');
    return <LanguageGrid onLanguageSelect={handleLanguageSelect} />;
  }

  console.log('Rendering Hero page');
  return (
    <div className="min-h-screen">
      <HeroSection onStartLearning={handleStartLearning} />
      <FeaturesSection />
      <HowItWorks />
    </div>
  );
}

export default App;