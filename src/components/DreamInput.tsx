import React from 'react';
import { Send } from 'lucide-react';

interface DreamInputProps {
  dream: string;
  setDream: (dream: string) => void;
  onSubmit: () => void;
}

export function DreamInput({ dream, setDream, onSubmit }: DreamInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <textarea
          value={dream}
          onChange={(e) => setDream(e.target.value)}
          placeholder="Describe your dream in detail..."
          className="w-full min-h-[150px] p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-300 focus:outline-none resize-none shadow-sm"
        />
        <button
          type="submit"
          className="absolute bottom-4 right-4 p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!dream.trim()}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}