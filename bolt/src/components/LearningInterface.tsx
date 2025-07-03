import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Phone, PhoneOff, Mic, MicOff, Volume2, Settings } from 'lucide-react';
import { Language, Tutor } from '../types';
import { convaiAgentIds } from '../data/languages';

interface LearningInterfaceProps {
  language: Language;
  tutor: Tutor;
  onBack: () => void;
}

const LearningInterface: React.FC<LearningInterfaceProps> = ({ language, tutor, onBack }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [connectionTime, setConnectionTime] = useState(0);
  const convaiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isConnected) {
      interval = setInterval(() => {
        setConnectionTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isConnected]);

  const getAgentId = () => {
    // First check if tutor has specific agent ID
    if (tutor.convaiAgentId) {
      return tutor.convaiAgentId;
    }
    // Fallback to language-based agent ID
    return convaiAgentIds[language.id];
  };

  const handleConnect = async () => {
    const agentId = getAgentId();
    
    if (!agentId) {
      console.error('No ConvAI agent ID found for this language/tutor');
      alert('ConvAI agent not available for this language yet. Please try another language.');
      return;
    }

    setIsConnecting(true);
    
    try {
      // Clear any existing ConvAI widget
      if (convaiRef.current) {
        convaiRef.current.innerHTML = '';
      }

      // Create the ConvAI widget element
      const convaiElement = document.createElement('elevenlabs-convai');
      convaiElement.setAttribute('agent-id', agentId);
      
      // Add some styling to make it fit better
      convaiElement.style.width = '100%';
      convaiElement.style.height = '400px';
      convaiElement.style.borderRadius = '20px';
      convaiElement.style.overflow = 'hidden';
      
      if (convaiRef.current) {
        convaiRef.current.appendChild(convaiElement);
      }

      // Simulate connection delay
      setTimeout(() => {
        setIsConnecting(false);
        setIsConnected(true);
        console.log(`Connected to ConvAI agent: ${agentId}`);
      }, 2000);
    } catch (error) {
      console.error('Failed to connect to ConvAI:', error);
      setIsConnecting(false);
      alert('Failed to connect to the AI tutor. Please try again.');
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setConnectionTime(0);
    
    // Clear the ConvAI widget
    if (convaiRef.current) {
      convaiRef.current.innerHTML = '';
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const agentId = getAgentId();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Header */}
      <div className="backdrop-blur-md bg-white/10 border-b border-white/20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center text-white/80 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Tutors
          </button>
          
          <div className="flex items-center space-x-4">
            <span className="text-2xl">{language.flag}</span>
            <div className="text-white">
              <h1 className="text-xl font-bold">{language.name} with {tutor.name}</h1>
              {isConnected && (
                <p className="text-white/70 text-sm">{formatTime(connectionTime)}</p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl text-white hover:bg-white/20 transition-all duration-300">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Interface */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center">
          {/* Tutor Avatar */}
          <div className="relative mb-8">
            <div className={`w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl ${isConnected ? 'ring-4 ring-green-400 ring-opacity-50' : isConnecting ? 'ring-4 ring-yellow-400 ring-opacity-50 animate-pulse' : ''}`}>
              <img
                src={tutor.avatar}
                alt={tutor.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Status Indicator */}
            <div className="absolute bottom-4 right-16 w-8 h-8 rounded-full border-4 border-white shadow-lg">
              {isConnected ? (
                <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
              ) : isConnecting ? (
                <div className="w-full h-full bg-yellow-400 rounded-full animate-pulse"></div>
              ) : (
                <div className="w-full h-full bg-gray-400 rounded-full"></div>
              )}
            </div>
          </div>

          {/* Connection Status */}
          <div className="mb-8">
            {isConnecting ? (
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 border border-white/20">
                <div className="animate-spin w-8 h-8 border-3 border-pink-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <h2 className="text-2xl font-bold text-white mb-2">Connecting to {tutor.name}...</h2>
                <p className="text-white/70">Setting up your personalized learning session with ElevenLabs ConvAI</p>
                {agentId && (
                  <p className="text-white/50 text-sm mt-2">Agent ID: {agentId}</p>
                )}
              </div>
            ) : isConnected ? (
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-2">Connected with {tutor.name}</h2>
                <p className="text-white/70">Ready to practice your {language.name}!</p>
                <p className="text-white/50 text-sm mt-2">Powered by ElevenLabs ConvAI</p>
              </div>
            ) : (
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-2">Ready to Connect</h2>
                <p className="text-white/70">Click the button below to start your session with {tutor.name}</p>
                {agentId ? (
                  <p className="text-white/50 text-sm mt-2">ConvAI Agent Ready: {agentId}</p>
                ) : (
                  <p className="text-red-400 text-sm mt-2">⚠️ ConvAI agent not available for this language yet</p>
                )}
              </div>
            )}
          </div>

          {/* ConvAI Widget Container */}
          {isConnected && (
            <div className="mb-8">
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">AI Conversation Interface</h3>
                <div 
                  ref={convaiRef}
                  className="w-full min-h-[400px] rounded-2xl overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                />
              </div>
            </div>
          )}

          {/* Control Buttons */}
          <div className="flex justify-center space-x-6 mb-8">
            {!isConnected && !isConnecting && (
              <button
                onClick={handleConnect}
                disabled={!agentId}
                className={`flex items-center justify-center w-20 h-20 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
                  agentId 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-green-500/25' 
                    : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                }`}
              >
                <Phone className="w-8 h-8" />
              </button>
            )}

            {isConnected && (
              <>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`flex items-center justify-center w-16 h-16 rounded-full shadow-xl transition-all duration-300 hover:scale-110 ${
                    isMuted 
                      ? 'bg-red-500 hover:bg-red-400' 
                      : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                  }`}
                >
                  {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                </button>

                <button className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full text-white shadow-xl hover:bg-white/30 transition-all duration-300 hover:scale-110">
                  <Volume2 className="w-6 h-6" />
                </button>

                <button
                  onClick={handleDisconnect}
                  className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-110"
                >
                  <PhoneOff className="w-8 h-8" />
                </button>
              </>
            )}
          </div>

          {/* Tutor Info Panel */}
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 border border-white/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl mr-3">{tutor.gender === 'Male' ? '👨‍🏫' : '👩‍🏫'}</div>
              <div>
                <h3 className="text-xl font-bold text-white">{tutor.name}</h3>
                <p className="text-white/70">{tutor.personality}</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">{tutor.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {tutor.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/20"
                >
                  {specialty}
                </span>
              ))}
            </div>
            {agentId && (
              <div className="text-white/50 text-xs">
                ConvAI Agent ID: {agentId}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningInterface;