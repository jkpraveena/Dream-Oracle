import React, { useState } from 'react';
import { Moon } from 'lucide-react';
import { DreamInput } from './components/DreamInput';
import { Interpretation } from './components/Interpretation';
import { analyzeDream } from './utils/dreamAnalysis';

function App() {
  const [dream, setDream] = useState('');
  const [interpretation, setInterpretation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDreamSubmit = async () => {
    setLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    const result = analyzeDream(dream);
    setInterpretation(result);
    setLoading(false);
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="min-h-screen bg-white/30 backdrop-blur-lg px-4 py-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Moon className="w-8 h-8 text-purple-600" />
              <h1 className="text-4xl font-bold text-purple-800">Dream Oracle</h1>
            </div>
            <p className="text-lg text-purple-700 max-w-xl mx-auto">
              Share your dream and receive AI-powered insights into its potential meanings and symbolism.
            </p>
          </div>

          <DreamInput 
            dream={dream}
            setDream={setDream}
            onSubmit={handleDreamSubmit}
          />

          <Interpretation 
            interpretation={interpretation}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;