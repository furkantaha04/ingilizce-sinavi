import { useState, useEffect, type MouseEvent } from 'react';
import type { VocabularyWord } from '../types';

interface FlashcardProps {
  word: VocabularyWord;
  onCorrect: () => void;
  onWrong: () => void;
  currentIndex: number;
  totalRemaining: number;
  totalInSection: number;
  learnedCount: number;
}

export default function Flashcard({
  word,
  onCorrect,
  onWrong,
  totalRemaining,
  totalInSection,
  learnedCount,
}: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [word.id]);

  const handleFlip = () => {
    setIsFlipped(prev => !prev);
  };

  const handleCorrectClick = (e: MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    onCorrect();
  };

  const handleWrongClick = (e: MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    onWrong();
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4 px-1 text-sm text-gray-600 font-medium">
        <span className="flex items-center gap-1.5 text-green-600">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
          Öğrenilen: {learnedCount} / {totalInSection}
        </span>
        <span className="text-gray-500">
          Kalan Kart: {totalRemaining}
        </span>
      </div>

      <div
        className="flip-card w-full h-72 sm:h-80 cursor-pointer mb-6 select-none"
        onClick={handleFlip}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            handleFlip();
          }
        }}
      >
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Front */}
          <div className="flip-card-front bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 rounded-2xl shadow-xl flex flex-col items-center justify-between p-6 sm:p-8 text-white border-2 border-white/20">
            <div className="w-full flex justify-between items-center">
              <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider">
                {word.type}
              </span>
              <span className="text-xs text-white/70 font-mono">#{word.id}</span>
            </div>

            <div className="text-center my-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 drop-shadow-sm">
                {word.word}
              </h2>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium bg-black/15 px-4 py-2 rounded-full">
              <span>🔄</span>
              <span>Anlamı görmek için tıkla</span>
            </div>
          </div>

          {/* Back */}
          <div className="flip-card-back bg-white rounded-2xl shadow-xl flex flex-col items-center justify-between p-5 sm:p-8 border-2 border-indigo-200">
            <div className="w-full flex justify-between items-center">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase">
                {word.type}
              </span>
              <span className="text-xs text-gray-400">Türkçe Anlamı</span>
            </div>

            <div className="text-center my-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-indigo-600 mb-1">
                {word.meaningTr}
              </h3>
            </div>

            <div className="w-full bg-slate-50 rounded-xl p-3 sm:p-4 text-left border border-slate-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Örnek Cümle:
              </p>
              <p className="text-sm font-medium text-gray-800 mb-1.5 italic">
                "{word.exampleSentence}"
              </p>
              <p className="text-xs text-gray-600">
                {word.exampleSentenceTr}
              </p>
            </div>

            <div className="text-xs text-gray-400 font-medium pt-1">
              Tekrar çevirmek için kartın boş yerine tıklayın
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleWrongClick}
          className="py-3.5 px-4 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl font-bold transition-all text-sm sm:text-base border-2 border-red-300 shadow-sm hover:shadow active:scale-95 flex items-center justify-center gap-1.5"
        >
          <span>❌</span>
          <span>Yanlış (Tekrar Et)</span>
        </button>
        <button
          onClick={handleCorrectClick}
          className="py-3.5 px-4 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl font-bold transition-all text-sm sm:text-base border-2 border-green-300 shadow-sm hover:shadow active:scale-95 flex items-center justify-center gap-1.5"
        >
          <span>✅</span>
          <span>Doğru (Biliyorum)</span>
        </button>
      </div>
    </div>
  );
}
